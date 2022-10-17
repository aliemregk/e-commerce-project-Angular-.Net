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
    public class MainCategoryManager : IMainCategoryService
    {
        IMainCategoryDal _mainCategoryDal;

        public MainCategoryManager(IMainCategoryDal mainCategoryDal)
        {
            _mainCategoryDal = mainCategoryDal;
        }

        [SecuredOperation("admin")]
        [ValidationAspect(typeof(MainCategoryValidator))]
        [CacheRemoveAspect("IMainCategoryService.Get")]
        public IResult Add(MainCategory mainCategory)
        {
            IResult result = BusinessRules.Run(
                CheckIfMainCategoryNameExists(mainCategory.Name));

            if (result != null)
            {
                return result;
            }
            _mainCategoryDal.Add(mainCategory);
            return new SuccessResult(Messages.Added);
        }

        [SecuredOperation("admin")]
        [CacheRemoveAspect("IMainCategoryService.Get")]
        public IResult Delete(MainCategory mainCategory)
        {
            _mainCategoryDal.Delete(mainCategory);
            return new SuccessResult(Messages.Deleted);
        }

        [CacheAspect]
        public IDataResult<List<MainCategory>> GetAll()
        {
            var result = _mainCategoryDal.GetAll();
            return new SuccessDataResult<List<MainCategory>>(result, Messages.Listed);
        }

        [SecuredOperation("admin")]
        [ValidationAspect(typeof(MainCategoryValidator))]
        [CacheRemoveAspect("IMainCategoryService.Get")]
        public IResult Update(MainCategory mainCategory)
        {
            _mainCategoryDal.Update(mainCategory);
            return new SuccessResult(Messages.Updated);
        }

        private IResult CheckIfMainCategoryNameExists(string name)
        {
            var result = _mainCategoryDal.GetAll(mc => mc.Name == name).Any();
            if (result)
            {
                return new ErrorResult(Messages.CategoryExists);
            }
            return new SuccessResult();
        }
    }
}