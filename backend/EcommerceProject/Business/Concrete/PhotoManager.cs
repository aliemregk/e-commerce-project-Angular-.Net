using Business.Abstract;
using Business.BusinessAspects.Autofac;
using Business.Constants;
using Business.ValidationRules.FluentValidation;
using Core.Aspects.Autofac.Caching;
using Core.Aspects.Autofac.Validation;
using Core.Utilities.Business;
using Core.Utilities.Results;
using Core.Utilities.Results.DataResults;
using DataAccess.Abstract;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Concrete
{
    public class PhotoManager : IPhotoService
    {
        IPhotoDal _photoDal;

        public PhotoManager(IPhotoDal photoDal)
        {
            _photoDal = photoDal;
        }

        [SecuredOperation("admin")]
        [ValidationAspect(typeof(PhotoValidator))]
        [CacheRemoveAspect("IPhotoService.Get")]
        public IResult Add(Photo photo)
        {
            IResult result = BusinessRules.Run(
                CheckIfPhotoExists(photo.Url));
            if (result != null)
            {
                return result;
            }
            _photoDal.Add(photo);
            return new SuccessResult(Messages.Added);
        }

        [SecuredOperation("admin")]
        [CacheRemoveAspect("IPhotoService.Get")]
        public IResult Delete(Photo photo)
        {
            _photoDal.Delete(photo);
            return new SuccessResult(Messages.Deleted);
        }

        [CacheAspect]
        public IDataResult<List<Photo>> GetAll()
        {
            var result = _photoDal.GetAll();
            return new SuccessDataResult<List<Photo>>(result, Messages.Listed);
        }

        [CacheAspect]
        public IDataResult<List<Photo>> GetAllByProductId(int productId)
        {
            var result = _photoDal.GetAll(p => p.ProductId == productId);
            return new SuccessDataResult<List<Photo>>(result, Messages.Listed);
        }

        [SecuredOperation("admin")]
        [CacheRemoveAspect("IPhotoService.Get")]
        public IResult Update(Photo photo)
        {
            _photoDal.Update(photo);
            return new SuccessResult(Messages.Updated);
        }

        private IResult CheckIfPhotoExists(string url)
        {
            var result = _photoDal.GetAll(p => p.Url == url).Any();
            if (result)
            {
                return new ErrorResult(Messages.PhotoExists);
            }
            return new SuccessResult();
        }
    }
}
