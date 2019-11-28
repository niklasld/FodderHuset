using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExamAPI.Models
{
    public class Animal
    {
        public int Id { get; set; }
        public string AnimalName { get; set; }
        List<Product> products { get; set; }

        public Animal() { }
    }
}
