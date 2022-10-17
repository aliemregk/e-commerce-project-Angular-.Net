using Core.Utilities.Results;
using Core.Utilities.Results.DataResults;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Abstract
{
    public interface IMainCategoryService
    {
        IDataResult<List<MainCategory>> GetAll();
        IResult Add(MainCategory mainCategory);
        IResult Update(MainCategory mainCategory);
        IResult Delete(MainCategory mainCategory);
    }
}
