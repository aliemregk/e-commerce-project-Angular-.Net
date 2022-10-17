using Core.Entities;

namespace Entities.Concrete
{
    public class Product : IEntity
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string Description { get; set; } = null!;
        public decimal UnitPrice { get; set; }
        public int UnitsInStock { get; set; }
        public int? Discount { get; set; }
        public int CategoryId { get; set; }
        public string CoverImg { get; set; }

    }
}
