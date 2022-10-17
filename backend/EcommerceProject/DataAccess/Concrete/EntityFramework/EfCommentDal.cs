using Core.DataAccess.EntityFramework;
using DataAccess.Abstract;
using Entities.Concrete;
using Entities.DTOs;
using System.Collections.Generic;
using System.Linq;

namespace DataAccess.Concrete.EntityFramework
{
    public class EfCommentDal : EfEntityRepositoryBase<Comment, ECommerceContext>, ICommentDal
    {
        public List<CommentDetailDto> GetCommentDetails()
        {
          
                using (ECommerceContext context = new ECommerceContext())
                {
                    var result = from c in context.Comments
                                 join u in context.Users
                                 on c.UserId equals u.Id
                                 select new CommentDetailDto
                                 {
                                     Id = c.Id,
                                     ProductId = c.ProductId,
                                     UserName = $"{u.FirstName} {u.LastName}",
                                     Content = c.Content
                                 };
                    return result.ToList();
                }
            
        }
    }

}
