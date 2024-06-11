using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

[ApiController]
[Route("api/[controller]")]
public class CustomersController : ControllerBase
{
    private static List<Customer> customers = new List<Customer>();

    [HttpGet]
    public IActionResult GetCustomers()
    {
        return Ok(customers);
    }

    [HttpPost("add")] // Ensure that the route is properly defined
    public IActionResult AddCustomer([FromBody] CustomerDto customerDto)
    {
        try
        {
            if (string.IsNullOrWhiteSpace(customerDto.Name))
            {
                return BadRequest("Customer name is required.");
            }

            var newCustomer = new Customer
            {
                Name = customerDto.Name,
                DateOfBirth = customerDto.DateOfBirth,
                Gender = customerDto.Gender,
                CustomerNumber = GenerateCustomerNumber()
            };

            customers.Add(newCustomer);

            return Ok(newCustomer);
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"An error occurred while adding the customer: {ex.Message}");
        }
    }

    [HttpPut("{customerNumber}")]
    public IActionResult UpdateCustomer(int customerNumber, [FromBody] CustomerDto customerDto)
    {
        var customer = customers.FirstOrDefault(c => c.CustomerNumber == customerNumber);
        if (customer == null)
        {
            return NotFound("Customer not found.");
        }

        customer.Name = customerDto.Name;
        customer.DateOfBirth = customerDto.DateOfBirth;
        customer.Gender = customerDto.Gender;

        return Ok(customer);
    }

    [HttpDelete("{customerNumber}")]
    public IActionResult DeleteCustomer(int customerNumber)
    {
        var customer = customers.FirstOrDefault(c => c.CustomerNumber == customerNumber);
        if (customer == null)
        {
            return NotFound("Customer not found.");
        }

        customers.Remove(customer);
        return Ok();
    }

    private int GenerateCustomerNumber()
    {
        Random random = new Random();
        return random.Next(1000, 9999);
    }
}

public class CustomerDto
{
    public string Name { get; set; }
    public DateTime DateOfBirth { get; set; }
    public string Gender { get; set; }
}

public class Customer
{
    public string Name { get; set; }
    public DateTime DateOfBirth { get; set; }
    public string Gender { get; set; }
    public int CustomerNumber { get; set; }
}
