using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyKet.Data.Entitites.Base
{
    public class Entity : object
    {
        public Entity()
        {

        }
        [Key]
        public int Id { get; set; }

    }
}
