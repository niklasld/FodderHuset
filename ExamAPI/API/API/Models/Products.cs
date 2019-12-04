using System;
using System.Collections.Generic;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class Products
    {

        public int Id { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public double Weight { get; set; }
        public string imgLink { get; set; }
        public string FoodFor { get; set; }

        //FK Animal
        public virtual Animal Animal { get; set; }

        public virtual ICollection<Order> Orders { get; set; }

        //Constructor
        public Products() { }
    }
}