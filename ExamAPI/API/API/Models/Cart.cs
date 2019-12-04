using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class Cart
    {
        public int Id { get; set; }

        //FK
        public virtual Order orders { get; set; }

    }
}