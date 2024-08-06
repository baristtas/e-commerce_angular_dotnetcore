using ECommerceAPI.Application.Abstractions;
using ECommerceAPI.Persistence.Concretes;
using ECommerceAPI.Persistence.Contexts;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ECommerceAPI.Persistence
{
    public static class ServiceRegistration
    {
        public static void AddPersistenceServices(this IServiceCollection services)
        {
            services.AddDbContext<AppDbContext>(options => options.UseNpgsql("User ID=postgres;Password=123456;Host=172.17.0.2.;Port=5432;Database=ECommerceAPIDb;Pooling=true;Min Pool Size=0;Max Pool Size=100;Connection Lifetime=0;"));

            services.AddSingleton<IProductService,ProductService>();
        }
    }
}
