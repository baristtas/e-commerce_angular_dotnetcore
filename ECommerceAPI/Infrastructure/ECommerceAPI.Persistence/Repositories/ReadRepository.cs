using ECommerceAPI.Application.Repositories;
using ECommerceAPI.Domain.Entities.Common;
using ECommerceAPI.Persistence.Contexts;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ECommerceAPI.Persistence.Repositories
{
    public class ReadRepository<T> : IReadRepository<T> where T : BaseEntity
    {
        private readonly AppDbContext m_context;
        public ReadRepository(AppDbContext context)
        {
            m_context = context;
        }
        public DbSet<T> Table => m_context.Set<T>();

        IQueryable<T> IReadRepository<T>.GetAll() => Table;

        IQueryable<T> IReadRepository<T>.GetWhere(Expression<Func<T, bool>> method)
            => Table.Where(method);

        public async Task<T> GetSingleAsync(Expression<Func<T, bool>> method)
        => await Table.FirstOrDefaultAsync(method);

        public async Task<T> GetByIdAsync(string id)//Reflection ya da marker ile yapmamız gerek. Çünkü T'nin id değişkeni yok
        => await Table.FirstOrDefaultAsync<T>(e => e.Id == Guid.Parse(id)); //Markerla yaptık
        
    }
}
