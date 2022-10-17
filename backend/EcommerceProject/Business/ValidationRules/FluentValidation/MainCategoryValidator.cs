using Entities.Concrete;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.ValidationRules.FluentValidation
{
    public class MainCategoryValidator : AbstractValidator<MainCategory>
    {
        public MainCategoryValidator()
        {
            RuleFor(mc => mc.Name).NotEmpty();
            RuleFor(mc => mc.Name).MinimumLength(2);
        }
    }
}
