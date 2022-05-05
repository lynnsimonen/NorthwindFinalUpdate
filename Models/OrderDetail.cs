using System;
using System.ComponentModel.DataAnnotations.Schema;
namespace Northwind.Models
{
    public class OrderDetail
    {
        public Int32 OrderDetailId { get; set; }
        public Int32 OrderId { get; set; }        
        public Int32 ProductId { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal UnitPrice { get; set; }
        public Int16 Quantity { get; set; }
        
        [Column(TypeName = "decimal(5,3")]
        public decimal Discount { get; set; }

        public Order Order {get; set;}
        public Product Product {get; set;}
        
    }
}