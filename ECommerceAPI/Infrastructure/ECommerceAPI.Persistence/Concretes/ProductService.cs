using ECommerceAPI.Application.Abstractions;
using ECommerceAPI.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ECommerceAPI.Persistence.Concretes
{
    internal class ProductService : IProductService
    {
        public List<Product> GetProducts() => new()
        {
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Product1",
                Stock = 100,
                CreatedDate = DateTime.Now,
                Price = 100
            },
           new()
            {
                Id = Guid.NewGuid(),
                Name = "Product2",
                Stock = 100,
                CreatedDate = DateTime.Now,
                Price = 22
           },
           new()
            {
                Id = Guid.NewGuid(),
                Name = "Product3",
                Stock = 100,
                CreatedDate = DateTime.Now,
                Price = 55
           },
           new()
            {
                Id = Guid.NewGuid(),
                Name = "Product4",
                Stock = 100,
                CreatedDate = DateTime.Now,
                Price = 90
           },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Product5",
                Stock = 100,
                CreatedDate = DateTime.Now,
                Price = 80
            },
        };

    }
}
