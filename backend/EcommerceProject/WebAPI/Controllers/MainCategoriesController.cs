using Business.Abstract;
using Entities.Concrete;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MainCategoriesController : ControllerBase
    {
        IMainCategoryService _mainCategoryService;

        public MainCategoriesController(IMainCategoryService mainCategoryService)
        {
            _mainCategoryService = mainCategoryService;
        }

        [HttpGet("getall")]
        public IActionResult GetAll()
        {
            var result = _mainCategoryService.GetAll();
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("add")]
        public IActionResult Add(MainCategory mainCategory)
        {
            var result = _mainCategoryService.Add(mainCategory);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("update")]
        public IActionResult Update(MainCategory mainCategory)
        {
            var result = _mainCategoryService.Update(mainCategory);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("delete")]
        public IActionResult Delete(MainCategory mainCategory)
        {
            var result = _mainCategoryService.Delete(mainCategory);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }
    }
}
