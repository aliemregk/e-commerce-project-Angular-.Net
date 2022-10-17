using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.DTOs
{
    public class OrderDetailDto : IDto
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string ProductName { get; set; }
        public string OrderDate { get; set; }
        public bool isDelivered { get; set; }
        public string DeliveryDate { get; set; }
        public int Quantity { get; set; }
        public decimal TotalPrice { get; set; }
    }
}
