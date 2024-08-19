using ECommerceAPI.Application.Repositories;
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
    public class ReadRepository<T> : IReadRepository<T> where T : class
    {
        private readonly AppDbContext m_context;
        DbSet<T> IRepository<T>.Table => throw new NotImplementedException();

        IQueryable<T> IReadRepository<T>.GetAll()
        {
            throw new NotImplementedException();
        }

        Task<T> IReadRepository<T>.GetByIdAsync(string id)
        {
            throw new NotImplementedException();
        }

        Task<T> IReadRepository<T>.GetSingleAsync(Expression<Func<T, bool>> method)
        {
            throw new NotImplementedException();
        }

        IQueryable<T> IReadRepository<T>.GetWhere(Expression<Func<T, bool>> method)
        {
            throw new NotImplementedException();
        }
    }
}
