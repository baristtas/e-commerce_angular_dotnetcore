using ECommerceAPI.Domain.Entities;
using ECommerceAPI.Domain.Entities.Common;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ECommerceAPI.Persistence.Contexts
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Customer> Customers { get; set; }

        public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            this.ChangeTracker.Entries<BaseEntity>().ToList().ForEach(e =>
            {
                if(e.State == EntityState.Added) e.Entity.CreatedDate = DateTime.UtcNow;
                else if(e.State == EntityState.Modified) e.Entity.UpdatedDate = DateTime.UtcNow;
            });

            return await base.SaveChangesAsync(cancellationToken);
        }
    }
}
