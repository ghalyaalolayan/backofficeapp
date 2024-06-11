using System;

namespace BankRelationshipManagerAPI
{
    public class Customer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Gender { get; set; }
        public int CustomerNumber { get; set; }
    }
}
