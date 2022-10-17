using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Concrete
{
    public class Order : IEntity
    {
        public int Id { get; set; }
        public string OrderDate { get; set; }
        public bool isDelivered { get; set; }
        public string DeliveryDate { get; set; }
        public int Quantity { get; set; }
        public decimal TotalPrice { get; set; }
        public int UserId { get; set; }
        public int ProductId { get; set; }
    }
}
