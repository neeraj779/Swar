namespace Swar.API.Exceptions;

public class EntityAlreadyExistsException : Exception
{
    private readonly string _message;

    public EntityAlreadyExistsException()
    {
        _message = "Entity already exists in the database";
    }

    public EntityAlreadyExistsException(string message)
    {
        _message = message;
    }

    public EntityAlreadyExistsException(string message, int userId) : base(message)
    {
        _message = message;
        UserId = userId;
    }

    public int UserId { get; }

    public override string Message => _message;
}