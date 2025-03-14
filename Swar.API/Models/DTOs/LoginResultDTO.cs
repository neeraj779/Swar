﻿namespace Swar.API.Models.DTOs;

public class LoginResultDTO
{
    public string AccessToken { get; set; } = string.Empty;
    public string RefreshToken { get; set; } = string.Empty;
    public string Role { get; set; } = string.Empty;
    public string TokenType { get; set; } = string.Empty;
}