using ECommerceAPI.Application.ViewModels.Products;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ECommerceAPI.Application.Validators.Products
{
    public class ValidatorCreateProduct : AbstractValidator<VM_Create_Product>
    {
        public ValidatorCreateProduct()
        {
            RuleFor(p => p.Name).NotEmpty().WithMessage("Ürün ismi boş olamaz.").NotNull().WithMessage("Ürün ismi boş olamaz.").MaximumLength
                (150).MinimumLength(3).WithMessage("Ürün ismi 3 ile 150 karakter arasında olmalıdır.");

            RuleFor(p => p.Stock).NotEmpty().WithMessage("Stok bilgisi boş bırakılamaz.").NotNull().WithMessage("Stok bilgisi boş bırakılamaz").Must
                (s => s >= 0).WithMessage("Stok negatif olamaz.");

            RuleFor(p => p.Price).NotEmpty().WithMessage("Fiyat bilgisi boş olamaz.").NotNull().WithMessage("Fiyat bilgisi boş bırakılamaz").Must
    (s => s >= 0).WithMessage("Fiyat negatif olamaz.");

        }
    }
}
