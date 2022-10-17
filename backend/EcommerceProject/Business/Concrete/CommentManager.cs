using Business.Abstract;
using Business.BusinessAspects.Autofac;
using Business.Constants;
using Core.Aspects.Autofac.Caching;
using Core.Utilities.Business;
using Core.Utilities.Results;
using Core.Utilities.Results.DataResults;
using DataAccess.Abstract;
using Entities.Concrete;
using Entities.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Business.Concrete
{
    public class CommentManager : ICommentService
    {
        ICommentDal _commentDal;

        public CommentManager(ICommentDal commentDal)
        {
            _commentDal = commentDal;
        }

        [SecuredOperation("admin, member")]
        [CacheRemoveAspect("ICategoryService.Get")]
        public IResult Add(Comment comment)
        {
            _commentDal.Add(comment);
            return new SuccessResult(Messages.Added);
        }

        [SecuredOperation("admin, member")]
        [CacheRemoveAspect("ICategoryService.Get")]
        public IResult Delete(Comment comment)
        {
            _commentDal.Delete(comment);
            return new SuccessResult(Messages.Deleted);
        }

        [CacheAspect]
        public IDataResult<List<Comment>> GetAllByProductId(int id)
        {
            var result = _commentDal.GetAll(c => id == c.ProductId);
            return new SuccessDataResult<List<Comment>>(result, Messages.Listed);
        }

        public IDataResult<List<CommentDetailDto>> GetCommentDetails()
        {
            var result = _commentDal.GetCommentDetails();
            return new SuccessDataResult<List<CommentDetailDto>>(result, Messages.Listed);
        }

    }
}
