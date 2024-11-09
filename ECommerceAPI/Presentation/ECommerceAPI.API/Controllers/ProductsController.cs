using ECommerceAPI.Application.Abstractions;
using ECommerceAPI.Application.Repositories;
using ECommerceAPI.Application.RequestParameters;
using ECommerceAPI.Application.ViewModels.Products;
using ECommerceAPI.Domain.Entities;
using ECommerceAPI.Domain.Entities.Common;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System.Net;
using System.Runtime.CompilerServices;

namespace ECommerceAPI.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class ProductsController : ControllerBase
    {
        private readonly IProductReadRepository _productReadRepository;
        private readonly IWebHostEnvironment _webHostEnviroment;
        private readonly IProductWriteRepository _productWriteRepository;
        public ProductsController(IProductWriteRepository productWriteRepository, IProductReadRepository productReadRepository, IWebHostEnvironment webHostEnviroment)
        {
            _productReadRepository = productReadRepository;
            _webHostEnviroment = webHostEnviroment;
            _productWriteRepository = productWriteRepository;

        }

        [HttpGet]
        public async Task<IActionResult> Get([FromQuery] Pagination pagination)
        {
            //return Ok(new
            //{
            //    cevap = "merhaba"
            //});
            var productCount = _productReadRepository.GetAll(false).Count();
            var datas = _productReadRepository.GetAll(false).Skip(pagination.Page * pagination.Size).Take(pagination.Size).Select(x =>
            new
            {
                x.Id,
                x.Name,
                x.Stock,
                x.Price,
                x.CreatedDate,
                x.UpdatedDate
            }).ToList();

            return Ok(new
            {
                totalCount = productCount,
                datas
            });
        }
        //[HttpGet("id")]
        //public async Task<IActionResult> Get(string id)
        //{
        //    Product prd = await _productReadRepository.GetByIdAsync(id,false);
        //    return Ok(prd);
        //}
        [HttpGet("id")]
        public async Task<IActionResult> Get([FromQuery] string id)
        {
            Product prd = await _productReadRepository.GetByIdAsync(id, false);
            return Ok(prd);
        }

        [HttpPost]
        public async Task<IActionResult> Post(VM_Create_Product model)
        {
            if (ModelState.IsValid)
            {

            }
            await _productWriteRepository.AddAsync(new Product { Name = model.Name, Price = model.Price, Stock = model.Stock });
            await _productWriteRepository.SaveAsync();
            return StatusCode((int)HttpStatusCode.Created);
        }

        [HttpPut]
        public async Task<IActionResult> Put(VM_Update_Product model)
        {
            Product product = await _productReadRepository.GetByIdAsync(model.Id);
            product.Stock = model.Stock;
            product.Name = model.Name;
            product.Price = model.Price;
            await _productWriteRepository.SaveAsync();

            return StatusCode((int)HttpStatusCode.OK);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            await _productWriteRepository.RemoveAsync(id);
            await _productWriteRepository.SaveAsync();

            return Ok(new
            {
                message = "Silme işlemi başarılı!"
            });
        }

        [HttpPost("[action]")] //https://..../api/products/action
        public async Task<IActionResult> Upload()
        {
            string uploadPath = Path.Combine(_webHostEnviroment.WebRootPath, "resource/product-images");

            if (!Directory.Exists(uploadPath)) Directory.CreateDirectory(uploadPath);

            foreach (IFormFile file in Request.Form.Files)
            {
                Random r = new Random();
                string fullPath = Path.Combine(uploadPath, $"{r.Next()}{ Path.GetExtension(file.FileName)}");

                using FileStream fileStream = new(fullPath,FileMode.CreateNew,FileAccess.Write,FileShare.None,1024*1024,false);
                await file.CopyToAsync(fileStream);
                await fileStream.FlushAsync();
            }
            return Ok();
        }
    }
}
