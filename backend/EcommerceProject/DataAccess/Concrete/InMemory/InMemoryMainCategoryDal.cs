using DataAccess.Abstract;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Concrete.InMemory
{
    public class InMemoryMainCategoryDal : IMainCategoryDal
    {
        public void Add(MainCategory entity)
        {
            throw new NotImplementedException();
        }

        public void Delete(MainCategory entity)
        {
            throw new NotImplementedException();
        }

        public MainCategory Get(Expression<Func<MainCategory, bool>> filter)
        {
            throw new NotImplementedException();
        }

        public List<MainCategory> GetAll(Expression<Func<MainCategory, bool>>? filter = null)
        {
            throw new NotImplementedException();
        }

        public void Update(MainCategory entity)
        {
            throw new NotImplementedException();
        }
    }
}
