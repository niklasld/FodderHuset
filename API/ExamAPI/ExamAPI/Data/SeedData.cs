using System;
using System.Collections.Generic;
using ExamAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System.Linq;
using System.Threading.Tasks;

namespace ExamAPI.Data
{
    public class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new ExamAPIContext(serviceProvider.GetRequiredService<DbContextOptions<ExamAPIContext>>()))
            {
                if (context.Animal.Any())
                {
                    return;   // DB has been seeded
                }

                context.Animal.AddRange(
                    new Animal
                    {
                        AnimalName = "Parrot"
                    },
                    new Animal
                    {
                        AnimalName = "Dog"
                    },
                    new Animal
                    {
                        AnimalName = "Cat"
                    }
                );
                //context.SaveChanges();


                if (context.Product.Any())
                {
                    return;   // DB has been seeded
                }
                context.Product.AddRange(
                    new Product
                    {
                        Name = "Ystads Pappegoya TJUBANG",
                        Price = 13.6,
                        Weight = 20,
                        FoodForID = 1
                    }

                );
                context.SaveChanges();
            }
        }
    }
}
