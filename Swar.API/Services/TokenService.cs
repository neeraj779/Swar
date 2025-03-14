using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using Swar.API.Interfaces.Services;
using Swar.API.Models.DBModels;

namespace Swar.API.Services;

public class TokenService : ITokenService
{
    private readonly TimeSpan _accessTokenExpiration = TimeSpan.FromHours(5);
    private readonly SymmetricSecurityKey _accessTokenKey;
    private readonly string _accessTokenSecret;
    private readonly ILogger<TokenService> _logger;
    private readonly TimeSpan _refreshTokenExpiration = TimeSpan.FromDays(30);
    private readonly SymmetricSecurityKey _refreshTokenKey;
    private readonly string _refreshTokenSecret;

    public TokenService(IConfiguration configuration, ILogger<TokenService> logger)
    {
        _accessTokenSecret = configuration["TokenKey:Access"];
        _refreshTokenSecret = configuration["TokenKey:Refresh"];
        _accessTokenKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_accessTokenSecret));
        _refreshTokenKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_refreshTokenSecret));
        _logger = logger;
    }

    public string GenerateJwtToken(User user, string token_type)
    {
        var claims = CreateClaims(user, token_type);
        var expiration = token_type == "access" ? _accessTokenExpiration : _refreshTokenExpiration;
        var key = token_type == "access" ? _accessTokenKey : _refreshTokenKey;


        var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
        var token = new JwtSecurityToken(
            "https://go-swar.us.auth0.com/",
            "https://swarapi.azurewebsites.net/api/v1/",
            claims,
            expires: DateTime.UtcNow.Add(expiration),
            signingCredentials: credentials
        );

        _logger.LogInformation($"Token generated for user {user.UserId} with token type {token_type}");
        return new JwtSecurityTokenHandler().WriteToken(token);
    }

    private List<Claim> CreateClaims(User user, string token_type)
    {
        return new List<Claim>
        {
            new(ClaimTypes.NameIdentifier, user.UserId.ToString()),
            new(ClaimTypes.Role, user.Role.ToString()),
            new(ClaimTypes.Email, user.Email),
            new("token_type", token_type)
        };
    }
}