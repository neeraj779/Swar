﻿using System.ComponentModel.DataAnnotations;

namespace Swar.API.Models.DTOs;

public class AddPlaylistDTO
{
    [Required(ErrorMessage = "Playlist name is required.")]
    [StringLength(100, ErrorMessage = "Playlist name cannot exceed 100 characters.")]
    [MinLength(1, ErrorMessage = "Playlist name must be at least 1 character long.")]
    public string PlaylistName { get; set; } = string.Empty;

    public string Description { get; set; } = string.Empty;


    [Required(ErrorMessage = "IsPrivate is required.")]
    public bool IsPrivate { get; set; }
}