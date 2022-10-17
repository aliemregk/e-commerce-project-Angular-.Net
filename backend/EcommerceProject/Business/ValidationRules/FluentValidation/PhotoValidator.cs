using Entities.Concrete;
using FluentValidation;

namespace Business.ValidationRules.FluentValidation
{
    public class PhotoValidator : AbstractValidator<Photo>
    {
        public PhotoValidator()
        {
            RuleFor(p => p.Url).NotEmpty();
        }
    }
}
