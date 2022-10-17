using Core.Utilities.Results.DataResults;
using Core.Utilities.Results;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Core.Entities.Concrete;

namespace Business.Abstract
{
    public interface IUserService
    {
        IDataResult<List<User>> GetAll();
        IDataResult<User> GetByEmail(string email);
        IDataResult<User> GetById(int id);
        IDataResult<List<OperationClaim>> GetClaims(User user);
        IResult Add(User user);
        IResult Update(User user);
        IResult Delete(User user);
    }
}
