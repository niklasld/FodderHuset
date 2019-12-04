using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class Order
    {
        public int Id { get; set; }
        public int amount { get; set; }

        //FK
        public virtual User User { get; set; }
        public virtual Products Products { get; set; }
        public virtual ICollection<Cart> Cart { get; set; }

    }
}