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

        //[Authorize]
        [HttpPost("MethodName/V4")]
        public ActionResult<dynamic> MethodName([FromBody] object RequestData,object Xlde) 
        {
             var paramArray = JsonConvert.DeserializeObject<dynamic>(RequestData.ToString());

            string ResultCode = "200";
            string message = "success";
            bool success = true;
            string pError = "";
            dynamic liste = null;
            try
            {
                liste = DataAccessName.DataMethodName(paramArray.Parametre1);

            }
            catch(Exception ex)
            {
                success = false;
                ResultCode = "500";
                message = ex.Message;
            }

            return new ObjectResult(
                new
                {
                    success = success,
                    code = ResultCode,
                    message = message,
                    data = liste
                });
        }
    }
}
