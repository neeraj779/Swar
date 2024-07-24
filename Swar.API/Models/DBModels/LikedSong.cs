﻿using System.ComponentModel.DataAnnotations;

namespace Swar.API.Models.DBModels
{
    public class LikedSong
    {
        [Key]
        public int LikeId { get; set; }
        public string SongId { get; set; } = string.Empty;
        public int UserId { get; set; }
        public User User { get; set; }
    }
}
