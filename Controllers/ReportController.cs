using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Northwind.Models;
using Newtonsoft.Json;

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

        
       //public IActionResult ReportOne() => View(_northwindContext.Categories.OrderBy(b => b.CategoryName));
  
    //    public IActionResult ReportOne() {
    //        List<Category> categories = _northwindContext.Categories.OrderBy(b => b.CategoryId).ToList();
    //        return View(categories);
    //    }
        // [HttpGet]
        // public Category GetCategory(int id)
        // {
        //     Category chosenCategory = _northwindContext.Categories.Where(c => c.CategoryId == id);
        //     ViewBag.id = id;
        //     return chosenCategory;
        // }
        
        public IActionResult ReportTwo() => View(_northwindContext.Discounts.OrderBy(b => b.DiscountId));    
    }
}
