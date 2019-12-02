using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using API.Models;

namespace API.Models
{
    public class APIContext : DbContext
    {
        public APIContext (DbContextOptions<APIContext> options)
            : base(options)
        {
        }

        public DbSet<API.Models.User> User { get; set; }

        public DbSet<API.Models.Animal> Animal { get; set; }

        public DbSet<API.Models.Products> Products { get; set; }
    }
}
