using Business.Abstract;
using Business.BusinessAspects.Autofac;
using Business.Constants;
using Business.ValidationRules.FluentValidation;
using Core.Aspects.Autofac.Validation;
using Core.Entities.Concrete;
using Core.Utilities.Business;
using Core.Utilities.Results;
using Core.Utilities.Results.DataResults;
using DataAccess.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Concrete
{
    public class UserManager : IUserService
    {
        IUserDal _userDal;

        public UserManager(IUserDal userDal)
        {
            _userDal = userDal;
        }

        [ValidationAspect(typeof(UserValidator))]
        public IResult Add(User user)
        {
            _userDal.Add(user);
            return new SuccessResult(Messages.Added);
        }

        public IResult Delete(User user)
        {
            _userDal.Delete(user);
            return new SuccessResult(Messages.Deleted);
        }

        public IResult Update(User user)
        {
            _userDal.Update(user);
            return new SuccessResult(Messages.Updated);
        }

        public IDataResult<List<User>> GetAll()
        {
            var result = _userDal.GetAll();
            if (result != null)
            {
                return new SuccessDataResult<List<User>>(result, Messages.Listed);
            }
            return new ErrorDataResult<List<User>>(result, Messages.ListingError);
        }

        public IDataResult<User> GetByEmail(string email)
        {
            var result = _userDal.Get(u => u.Email == email);
            if (result != null)
            {
                return new SuccessDataResult<User>(result, Messages.Listed);
            }
            return new ErrorDataResult<User>(result, Messages.ListingError);
        }

        public IDataResult<User> GetById(int id)
        {
            var result = _userDal.Get(u => u.Id == id);
            return new SuccessDataResult<User>(result, Messages.Listed);
        }

        public IDataResult<List<OperationClaim>> GetClaims(User user)
        {
            var result = _userDal.GetClaims(user);
            if (result != null)
            {
                return new SuccessDataResult<List<OperationClaim>>(result, Messages.Listed);
            }
            return new ErrorDataResult<List<OperationClaim>>(result, Messages.ListingError);
        }
    }
}
