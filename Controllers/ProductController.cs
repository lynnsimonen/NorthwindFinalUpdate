using Microsoft.AspNetCore.Mvc;
using Northwind.Models;
using System.Linq;

namespace Northwind.Controllers
{
    public class ProductController : Controller
    {
        // this controller depends on the NorthwindRepository
        private NorthwindContext _northwindContext;
        public ProductController(NorthwindContext db) => _northwindContext = db;
        public IActionResult Category() => View(_northwindContext.Categories.OrderBy(c => c.CategoryName));

        public IActionResult Index(int id)
        {
            ViewBag.id = id;
            return View(_northwindContext.Categories.OrderBy(c => c.CategoryName));
        }
        //display all current product discounts (use valid date range) in a Bootstrap list view
        //public IActionResult Discounts() => View(_NorthwindContext.Discounts.Where(d => d.StartTime <= DateTime.Now && d.EndTime > DateTime.Now).OrderBy(d => d.Code));
    }
}
// == id && d.EndTime > DateTime.Now