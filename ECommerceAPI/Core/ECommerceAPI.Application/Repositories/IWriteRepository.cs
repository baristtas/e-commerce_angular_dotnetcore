using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ECommerceAPI.Application.Repositories
{
    public interface IWriteRepository<T> : IRepository<T> where T : class //T'nin classs olduğunu belirttim.
    {
        Task<bool> AddAsync(T entity);
        Task<bool> UpdateAsync(List<T> entities);
        Task<bool> Remove(T entity);
        Task<bool> Remove(string id);
        Task<bool> UpdateAsync(T entity);
    }
}
