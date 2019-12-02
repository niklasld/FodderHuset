using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Models
{
    public class Animal
    {
        [Key]
        public int ID { get; set; }
        public string AnimalName { get; set; }


        public Animal() { }
    }
}
