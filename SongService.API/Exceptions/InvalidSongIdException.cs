namespace SongService.API.Exceptions;

public class InvalidSongIdException : Exception
{
    private readonly string _message;

    public InvalidSongIdException()
    {
        _message = "Invalid song id";
    }

    public override string Message => _message;
}