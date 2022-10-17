using Core.Entities;

namespace Entities.Concrete
{
    public class Comment : IEntity
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int ProductId { get; set; }
        public string Content { get; set; }
        
    }
}
