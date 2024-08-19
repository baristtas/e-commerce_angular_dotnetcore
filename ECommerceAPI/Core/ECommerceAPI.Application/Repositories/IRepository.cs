using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ECommerceAPI.Application.Repositories
{
    public interface IRepository<T> where T : class //T'nin classs olduğunu belirttim.
    {
        DbSet<T> Table { get; }
    }
}
