using Core.Utilities.Results.DataResults;
using Core.Utilities.Results;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities.Concrete;

namespace Business.Abstract
{
    public interface ICategoryService
    {
        IDataResult<List<Category>> GetAll();
        IDataResult<List<Category>> GetAllByMainCategoryId(int id);
        IResult Add(Category category);
        IResult Update(Category category);
        IResult Delete(Category category);
    }
}
