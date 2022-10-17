using Core.Entities;
using Entities.Concrete;
using System.Collections.Generic;


namespace Entities.DTOs
{
    public class ProductDetailDto : IDto
    {
        public int ProductId { get; set; }
        public string CategoryName { get; set; }
        public decimal UnitPrice { get; set; }
        public List<Photo> Photos { get; set; }
    }
}
