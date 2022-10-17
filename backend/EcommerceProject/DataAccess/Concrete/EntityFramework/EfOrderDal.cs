using Core.DataAccess.EntityFramework;
using DataAccess.Abstract;
using Entities.Concrete;
using Entities.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Concrete.EntityFramework
{
    public class EfOrderDal : EfEntityRepositoryBase<Order, ECommerceContext>, IOrderDal
    {
        public List<OrderDetailDto> GetOrderDetails()
        {
            using (ECommerceContext context = new ECommerceContext())
            {
                var result = from o in context.Orders
                             join p in context.Products
                             on o.ProductId equals p.Id
                             join u in context.Users
                             on o.UserId equals u.Id
                             select new OrderDetailDto
                             {
                                 Id = o.Id,
                                 DeliveryDate = o.DeliveryDate,
                                 isDelivered = o.isDelivered,
                                 OrderDate = o.OrderDate,
                                 Quantity = o.Quantity,
                                 TotalPrice = o.TotalPrice,
                                 ProductName = p.Name,
                                 UserName = $"{u.FirstName} {u.LastName}"
                             };
                return result.ToList();
            }
        }
    }
}