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
using Entities.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Concrete
{
    public class ProductManager : IProductService
    {
        IProductDal _productDal;

        public ProductManager(IProductDal productDal)
        {
            _productDal = productDal;
        }

        [SecuredOperation("admin")]
        [ValidationAspect(typeof(ProductValidator))]
        [CacheRemoveAspect("IProductService.Get")]
        public IResult Add(Product product)
        {
            IResult result = BusinessRules.Run(
                CheckIfProductExists(product.Name));
            if (result != null)
            {
                return result;
            }
            _productDal.Add(product);
            return new SuccessResult(Messages.Added);
        }

        [SecuredOperation("admin")]
        [CacheRemoveAspect("IProductService.Get")]
        public IResult Delete(Product product)
        {
            _productDal.Delete(product);
            return new SuccessResult(Messages.Deleted);
        }

        [CacheAspect]
        public IDataResult<List<Product>> GetAll()
        {
            var result = _productDal.GetAll();
            return new SuccessDataResult<List<Product>>(result, Messages.Listed);
        }

        [CacheAspect]
        public IDataResult<List<Product>> GetAllByCategoryId(int categoryId)
        {
            var result = _productDal.GetAll(p => p.CategoryId == categoryId);
            return new SuccessDataResult<List<Product>>(result, Messages.Listed);
        }


        public IDataResult<Product> GetByProductId(int productId)
        {
            var result = _productDal.Get(p => p.Id == productId);
            return new SuccessDataResult<Product>(result, Messages.Listed);
        }


        public IDataResult<List<ProductDetailDto>> GetProductDetails()
        {
            var result = _productDal.GetProductDetails();
            return new SuccessDataResult<List<ProductDetailDto>>(result, Messages.Listed);
        }

        [SecuredOperation("admin")]
        [CacheRemoveAspect("IProductService.Get")]
        public IResult Update(Product product)
        {
            _productDal.Update(product);
            return new SuccessResult(Messages.Updated);
        }

        private IResult CheckIfProductExists(string name)
        {
            var result = _productDal.GetAll(p => p.Name == name).Any();
            if (result)
            {
                return new ErrorResult(Messages.ProductExists);
            }
            return new SuccessResult();
        }
    }
}
