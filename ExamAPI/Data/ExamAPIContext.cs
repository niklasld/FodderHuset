using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace ExamAPI.Models
{
    public class ExamAPIContext : DbContext
    {
        public ExamAPIContext (DbContextOptions<ExamAPIContext> options)
            : base(options)
        {
        }

        public DbSet<ExamAPI.Models.Product> Product { get; set; }
        public DbSet<ExamAPI.Models.Animal> Animal { get; set; }
    }
}
