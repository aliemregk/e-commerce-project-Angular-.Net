using Core.Utilities.Results.DataResults;
using Core.Utilities.Results;
using Entities.Concrete;
using System.Collections.Generic;

namespace Business.Abstract
{
    public interface IPhotoService
    {
        IDataResult<List<Photo>> GetAll();
        IDataResult<List<Photo>> GetAllByProductId(int productId);
        IResult Add(Photo photo);
        IResult Update(Photo photo);
        IResult Delete(Photo photo);
    }
}
