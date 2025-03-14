namespace Swar.API.Models;

public class ErrorModel
{
    public ErrorModel()
    {
    }

    public ErrorModel(int statusCode, string message)
    {
        Status = statusCode;
        Message = message;
    }

    public int Status { get; set; }
    public string Message { get; set; }
}