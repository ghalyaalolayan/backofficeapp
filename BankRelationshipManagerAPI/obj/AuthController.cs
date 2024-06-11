using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Collections.Generic;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private static List<User> users = new List<User>
    {
        new User { Username = "admin", Password = "password" }
    };

    [HttpPost("login")]
    public IActionResult Login([FromBody] LoginRequest request)
    {
        var user = users.FirstOrDefault(u => u.Username == request.Username && u.Password == request.Password);
        if (user != null)
        {
            return Ok(new { Token = "sample-token" });
        }
        return Unauthorized();
    }
}

public class LoginRequest
{
    public string Username { get; set; }
    public string Password { get; set; }
}

public class User
{
    public string Username { get; set; }
    public string Password { get; set; }
}
