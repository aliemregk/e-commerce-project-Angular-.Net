using Core.Utilities.Results;
using Core.Utilities.Results.DataResults;
using Entities.Concrete;
using Entities.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Abstract
{
    public interface IOrderService
    {
        IDataResult<List<Order>> GetAll();
        IDataResult<List<Order>> GetAllByUserId(int userId);
        IDataResult<List<Order>> GetAllByProductId(int productId);
        IDataResult<List<OrderDetailDto>> GetOrderDetails();
        IResult Add(Order order);
        IResult Update(Order order);
        IResult Delete(Order order);

    }
}
