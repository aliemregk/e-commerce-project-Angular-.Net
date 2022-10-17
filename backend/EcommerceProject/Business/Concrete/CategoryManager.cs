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
    public class CategoryManager : ICategoryService
    {
        ICategoryDal _categoryDal;

        public CategoryManager(ICategoryDal categoryDal)
        {
            _categoryDal = categoryDal;
        }

        [SecuredOperation("admin")]
        [ValidationAspect(typeof(CategoryValidator))]
        [CacheRemoveAspect("ICategoryService.Get")]
        public IResult Add(Category category)
        {
            IResult result = BusinessRules.Run(
                CheckIfCategoryNameExists(category.Name));
            if (result != null)
            {
                return result;
            }
            _categoryDal.Add(category);
            return new SuccessResult(Messages.Added);
        }

        [SecuredOperation("admin")]
        [CacheRemoveAspect("ICategoryService.Get")]
        public IResult Delete(Category category)
        {
            _categoryDal.Delete(category);
            return new SuccessResult(Messages.Deleted);
        }

        [CacheAspect]
        public IDataResult<List<Category>> GetAll()
        {
            var result = _categoryDal.GetAll();
            return new SuccessDataResult<List<Category>>(result, Messages.Listed);
        }

        [CacheAspect]
        public IDataResult<List<Category>> GetAllByMainCategoryId(int id)
        {
            var result = _categoryDal.GetAll(c => id == c.MainCategoryId);
            return new SuccessDataResult<List<Category>>(result, Messages.Listed);
        }

        [SecuredOperation("admin")]
        [CacheRemoveAspect("ICategoryService.Get")]
        public IResult Update(Category category)
        {
            _categoryDal.Update(category);
            return new SuccessResult(Messages.Updated);
        }
        private IResult CheckIfCategoryNameExists(string name)
        {
            var result = _categoryDal.GetAll(c => c.Name == name).Any();
            if (result)
            {
                return new ErrorResult(Messages.CategoryExists);
            }
            return new SuccessResult();
        }
    }
}
