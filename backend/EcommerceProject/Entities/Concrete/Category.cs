using Core.Entities;

namespace Entities.Concrete
{
    public class Category : IEntity
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public int MainCategoryId { get; set; }
        public int? Discount { get; set; }
        public string PhotoUrl { get; set; }
    }
}
