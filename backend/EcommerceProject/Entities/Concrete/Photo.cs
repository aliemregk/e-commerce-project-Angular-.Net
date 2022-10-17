using Core.Entities;

namespace Entities.Concrete
{
    public class Photo : IEntity
    {
        public int Id { get; set; }
        public string Url { get; set; } = null!;
        public int ProductId { get; set; }

    }
}
