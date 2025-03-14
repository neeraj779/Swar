﻿using System.ComponentModel.DataAnnotations;
using Swar.API.Models.ENUMs;

namespace Swar.API.Models.DBModels;

public class User
{
    [Key] public int UserId { get; set; }

    public string? ExternalId { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public byte[]? HashedPassword { get; set; }
    public byte[]? PasswordHashKey { get; set; }
    public UserStatusEnum.UserStatus UserStatus { get; set; }
    public UserRoleEnum.UserRole Role { get; set; } = UserRoleEnum.UserRole.User;
    public DateTime RegistrationDate { get; set; }

    public ICollection<Playlist>? Playlists { get; set; }
    public ICollection<LikedSong>? LikedSongs { get; set; }
    public ICollection<PlayHistory>? PlayHistories { get; set; }
}