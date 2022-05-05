using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
namespace Northwind.Models

{
    public class Product
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string QuantityPerUnit { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal UnitPrice { get; set; }
        public short UnitsInStock { get; set; }
        public short UnitsOnOrder { get; set; }
        public short ReorderLevel { get; set; }
        public bool Discontinued { get; set; }
        public int CategoryId { get; set; }
        public Category Category { get; set; }
        public ICollection<OrderDetail> OrderDetails { get; set; }

    }
}
// namespace Northwind.Models
// {
//     public class Product
//     {
//         public int ProductId { get; set; }
//         public string ProductName { get; set; }
//         public string QuantityPerUnit { get; set; }

//         public decimal UnitPrice { get; set; }
//         //[Column(TypeName = "decimal(18,2)")]
//         public short UnitsInStock {get; set;}
//         public short UnitsOnOrder {get; set;}
//         public short ReorderLevel {get; set;}
//         public bool Discontinued {get; set;}
//         public int CategoryId {get; set;}
//         public Category Category { get; set; }
//     }
// }