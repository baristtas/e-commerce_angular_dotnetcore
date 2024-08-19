using ECommerceAPI.Application.Abstractions;
using ECommerceAPI.Application.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace ECommerceAPI.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IProductReadRepository _productReadRepository;
        private readonly IProductWriteRepository _productWriteRepository;
        public ProductsController(IProductWriteRepository productWriteRepository, IProductReadRepository productReadRepository)
        {
            _productReadRepository = productReadRepository;
            _productWriteRepository = productWriteRepository;
        }

        [HttpGet]
        public async void Get()
        {
            await _productWriteRepository.AddRangeAsync(new()
            {
                new() {Id = Guid.NewGuid(), Name = "Product 1", Price = 100,CreatedDate = DateTime.UtcNow,Stock = 10},
                new() {Id = Guid.NewGuid(), Name = "Product 2", Price = 200,CreatedDate = DateTime.UtcNow,Stock = 20},
                new() {Id = Guid.NewGuid(), Name = "Product 3", Price = 300,CreatedDate = DateTime.UtcNow,Stock = 30},
                new() {Id = Guid.NewGuid(), Name = "Product 4", Price = 400,CreatedDate = DateTime.UtcNow,Stock = 40},

            });
            await _productWriteRepository.SaveAsync();
        }

        //[HttpGet]
        //public IActionResult GetProducts()
        //{
        //    var products = m_productService.GetProducts();
        //    return Ok(products);
        //}

        //[HttpGet("Hey/YO/wazzup")]
        //public IActionResult GetProducts([FromBody] int what)
        //{
        //
        //    return Ok(new
        //    {
        //        za = what,
        //        xd = 31
        //    });
        //}
    }
}
