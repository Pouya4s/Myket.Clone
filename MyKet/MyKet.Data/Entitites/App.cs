using MyKet.Data.Entitites.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyKet.Data.Entitites
{
    public class App: Entity
    {
        public App()
        {
        }
        public string Image { get; set; }
        public string Name { get; set; }
        public string CatchTitle { get; set; }
        public string Description { get; set; }
        public string DownloadsCount { get; set; }
        public int SizeInMBs { get; set; }
        public string DownloadLink { get; set; }
        public List<string> Galery { get; set; }

        public List<Category> Categories { get; set; } = [];
        public bool IsGame { get; set; }
    }
}
