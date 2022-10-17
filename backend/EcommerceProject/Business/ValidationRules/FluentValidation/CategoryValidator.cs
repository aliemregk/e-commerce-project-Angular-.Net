using Entities.Concrete;
using FluentValidation;

namespace Business.ValidationRules.FluentValidation
{
    public class CategoryValidator : AbstractValidator<Category>
    {
        public CategoryValidator()
        {
            RuleFor(c => c.Name).NotEmpty();
            RuleFor(c => c.MainCategoryId).NotEmpty();
            RuleFor(c=> c.Discount).InclusiveBetween(0, 99);
        }
    }
}
