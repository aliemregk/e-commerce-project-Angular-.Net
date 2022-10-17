using Business.Abstract;
using Business.Constants;
using Core.Aspects.Autofac.Caching;
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
    public class OrderManager : IOrderService
    {
        IOrderDal _orderDal;

        public OrderManager(IOrderDal orderDal)
        {
            _orderDal = orderDal;
        }

        [CacheRemoveAspect("IOrderService.Get")]
        public IResult Add(Order order)
        {
            _orderDal.Add( new Order
            {
                OrderDate = DateTime.Now.ToString("dd.MM.yyyy"),
                isDelivered = false,
                ProductId = order.ProductId,
                Quantity = order.Quantity,
                TotalPrice = order.TotalPrice,
                UserId = order.UserId
            });
            return new SuccessResult(Messages.Added);
        }

        [CacheRemoveAspect("IOrderService.Get")]
        public IResult Delete(Order order)
        {
            _orderDal.Delete(order);
            return new SuccessResult(Messages.Deleted);
        }

        [CacheRemoveAspect("IOrderService.Get")]
        public IResult Update(Order order)
        {
            _orderDal.Update(order);
            return new SuccessResult(Messages.Updated);
        }

        [CacheAspect]
        public IDataResult<List<Order>> GetAll()
        {
            var result = _orderDal.GetAll();
            return new SuccessDataResult<List<Order>>(result, Messages.Listed);
        }

        [CacheAspect]
        public IDataResult<List<Order>> GetAllByProductId(int productId)
        {
            var result = _orderDal.GetAll(o => o.ProductId == productId);
            return new SuccessDataResult<List<Order>>(result, Messages.Listed);
        }

        [CacheAspect]
        public IDataResult<List<Order>> GetAllByUserId(int userId)
        {
            var result = _orderDal.GetAll(o => o.UserId == userId);
            return new SuccessDataResult<List<Order>>(result, Messages.Listed);
        }

        public IDataResult<List<OrderDetailDto>> GetOrderDetails()
        {
            var result = _orderDal.GetOrderDetails();
            return new SuccessDataResult<List<OrderDetailDto>>(result, Messages.Listed);
        }
    }
}
