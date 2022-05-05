using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Northwind.Models;

namespace Northwind.Controllers
{
    public class ReportController : Controller
    {
        // this controller depends on the NorthwindRepository
        private NorthwindContext _northwindContext;
        public ReportController(NorthwindContext db) => _northwindContext = db;

        public IActionResult Category() => View(_northwindContext.Categories.OrderBy(c => c.CategoryName));

        public IActionResult ReportOne(int id)
        {
            ViewBag.id = 1;
            return View(_northwindContext.Categories.OrderBy(c => c.CategoryName));
        }
//--------------------------------------------------------------------------------------------------------------------
        //Pull all orders within the last year
        //Group the orders by Orders.OrderId so the FK can then pull the OrderDetails.OrderId info to calculate sales        

        public IActionResult ReportTwo(int id){
            ViewBag.id = 1;
            return View(_northwindContext.Categories.OrderBy(c => c.CategoryName));
            
            // .OrderDetails.GroupBy(c => c.ProductId));
        }      
        
    }
}