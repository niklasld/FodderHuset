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
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public double Weight { get; set; }
        public string imgLink { get; set; }

        //animal EF
        [ForeignKey("animal_ID")]
        public int AnimalID { get; set; }
        public string FoodFor { get; set; }

        public Products() { }
    }
}
