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

        IQueryable<T> IReadRepository<T>.GetAll(bool tracking = true)
        {
            if (tracking) return Table;
            return Table.AsNoTracking();
        }

        IQueryable<T> IReadRepository<T>.GetWhere(Expression<Func<T, bool>> method, bool tracking = true)
        {
            if(tracking) return Table.Where(method);
            return Table.AsNoTracking();
        }

        public async Task<T> GetSingleAsync(Expression<Func<T, bool>> method, bool tracking = true)
        {
            if (tracking) return await Table.FirstOrDefaultAsync(method);
            return await Table.AsNoTracking().FirstOrDefaultAsync(method);
        }

        public async Task<T> GetByIdAsync(string id, bool tracking = true)//Reflection ya da marker ile yapmamız gerek. Çünkü T'nin id değişkeni yok
        {
            //await Table.FirstOrDefaultAsync<T>(e => e.Id == Guid.Parse(id)); //Markerla yaptık
            if (tracking) return await Table.FindAsync(Guid.Parse(id));
            return await Table.AsNoTracking().FirstOrDefaultAsync(data => data.Id == Guid.Parse(id));
        }

        public async Task<int> SaveAsync() => await m_context.SaveChangesAsync();

    }
}
