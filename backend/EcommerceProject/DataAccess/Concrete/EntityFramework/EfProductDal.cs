using Core.DataAccess.EntityFramework;
using DataAccess.Abstract;
using Entities.Concrete;
using Entities.DTOs;
using System.Collections.Generic;
using System.Linq;

namespace DataAccess.Concrete.EntityFramework
{
    public class EfProductDal : EfEntityRepositoryBase<Product, ECommerceContext>, IProductDal
    {
        public List<ProductDetailDto> GetProductDetails()
        {
            using (ECommerceContext context = new ECommerceContext())
            {
                var result = from p in context.Products
                             join c in context.Categories
                             on p.CategoryId equals c.Id
                             join ph in context.Photos
                             on p.Id equals ph.ProductId
                             select new ProductDetailDto
                             {
                                 ProductId = p.Id,
                                 CategoryName = c.Name,
                                 UnitPrice = p.UnitPrice,
                                 Photos = (from photo in context.Photos where photo.ProductId == p.Id select photo).ToList()
                             };
                return result.ToList();
            }
        }
    }
}
