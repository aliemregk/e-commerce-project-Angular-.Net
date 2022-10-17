using Core.Utilities.Results.DataResults;
using Core.Utilities.Results;
using System.Collections.Generic;
using Entities.Concrete;
using Entities.DTOs;

namespace Business.Abstract
{
    public interface ICommentService
    {
        IDataResult<List<Comment>> GetAllByProductId(int id);
        IDataResult<List<CommentDetailDto>> GetCommentDetails();
        IResult Add(Comment comment);
        IResult Delete(Comment comment);
    }
}
