using MyKet.Data.Entitites.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyKet.Data.Entitites
{
    public class Category: Entity
    {
        public Category()
        { 
        
        }
        public string Name { get; set; }
        public List<App> Apps { get; set; } = [];
    }
}
