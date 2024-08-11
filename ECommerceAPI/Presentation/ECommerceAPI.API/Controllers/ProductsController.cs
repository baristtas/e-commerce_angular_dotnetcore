using ECommerceAPI.Application.Abstractions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace ECommerceAPI.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IProductService m_productService;

        public ProductsController(IProductService productService)
        {
            m_productService = productService;
        }

        [HttpGet]
        public IActionResult GetProducts()
        {
            var products = m_productService.GetProducts();
            return Ok(products);
        }

        [HttpGet("Hey/YO/wazzup")]
        public IActionResult GetProducts([FromBody] int what)
        {

            return Ok(new
            {
                za = what,
                xd = 31
            });
        }
    }
}
