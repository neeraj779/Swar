namespace Swar.API.Models.DTOs;

public class PlaylistSongsDTO
{
    public PlaylistInfoDTO PlaylistInfo { get; set; } = new();
    public List<string> Songs { get; set; } = new();
}