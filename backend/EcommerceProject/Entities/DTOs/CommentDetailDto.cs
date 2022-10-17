using Core.Entities;

namespace Entities.DTOs
{
    public class CommentDetailDto : IDto
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public string UserName { get; set; }
        public string Content { get; set; }
    }
}
