// import '../../App.css';
// import { getJson, postJson, deleteJson } from './fetch';

// import { Link } from "react-router-dom";
import Category from "./Category";

let cats=[
  {catTitle:"بهترین برنامه‌ های کاربردی",
   catLink:"#/Apps/#AllBest",
   catApps:[
    {id:1,appTitle:"فیلیمو - تماشای فیلم و سریال",imgLink:"Apps/Filimo.webp",desc:"بروزترین فیلم و سریال ها",appLink:"#/Apps/#Filimo"},
    {id:1,appTitle:"فیلیمو - تماشای فیلم و سریال",imgLink:"Apps/Filimo.webp",desc:"بروزترین فیلم و سریال ها",appLink:"#/Apps/#Filimo"},
    {id:1,appTitle:"فیلیمو - تماشای فیلم و سریال",imgLink:"Apps/Filimo.webp",desc:"بروزترین فیلم و سریال ها",appLink:"#/Apps/#Filimo"},
    {id:1,appTitle:"فیلیمو - تماشای فیلم و سریال",imgLink:"Apps/Filimo.webp",desc:"بروزترین فیلم و سریال ها",appLink:"#/Apps/#Filimo"},
    {id:1,appTitle:"فیلیمو - تماشای فیلم و سریال",imgLink:"Apps/Filimo.webp",desc:"بروزترین فیلم و سریال ها",appLink:"#/Apps/#Filimo"},
    {id:1,appTitle:"فیلیمو - تماشای فیلم و سریال",imgLink:"Apps/Filimo.webp",desc:"بروزترین فیلم و سریال ها",appLink:"#/Apps/#Filimo"},
    {id:1,appTitle:"فیلیمو - تماشای فیلم و سریال",imgLink:"Apps/Filimo.webp",desc:"بروزترین فیلم و سریال ها",appLink:"#/Apps/#Filimo"},
  ]},
  {catTitle:"برنامه هایی برای گوشی های جدید",
   catLink:"#/Apps/#AllMustHave",
   catApps:[
    {id:2,appTitle:"ایرانسل من",imgLink:"Apps/MyIrancell.webp",desc:"ابزار های کاربردی",appLink:"#/Apps/#MyIrancell"},
    {id:2,appTitle:"ایرانسل من",imgLink:"Apps/MyIrancell.webp",desc:"ابزار های کاربردی",appLink:"#/Apps/#MyIrancell"},
    {id:2,appTitle:"ایرانسل من",imgLink:"Apps/MyIrancell.webp",desc:"ابزار های کاربردی",appLink:"#/Apps/#MyIrancell"},
    {id:2,appTitle:"ایرانسل من",imgLink:"Apps/MyIrancell.webp",desc:"ابزار های کاربردی",appLink:"#/Apps/#MyIrancell"},
    {id:2,appTitle:"ایرانسل من",imgLink:"Apps/MyIrancell.webp",desc:"ابزار های کاربردی",appLink:"#/Apps/#MyIrancell"},
    {id:2,appTitle:"ایرانسل من",imgLink:"Apps/MyIrancell.webp",desc:"ابزار های کاربردی",appLink:"#/Apps/#MyIrancell"},
    {id:2,appTitle:"ایرانسل من",imgLink:"Apps/MyIrancell.webp",desc:"ابزار های کاربردی",appLink:"#/Apps/#MyIrancell"},
  ]},
  {catTitle:"برنامه های شخصی سازی",
   catLink:"#/Apps/#AllCustomize",
   catApps:[
    {id:3,appTitle:"4K Wallpaper Expert",imgLink:"Apps/4kWallpaper.webp",desc:"تصاویر پس‌زمینه 4K",appLink:"#/Apps/#4KWallpaper"},
    {id:3,appTitle:"4K Wallpaper Expert",imgLink:"Apps/4kWallpaper.webp",desc:"تصاویر پس‌زمینه 4K",appLink:"#/Apps/#4KWallpaper"},
    {id:3,appTitle:"4K Wallpaper Expert",imgLink:"Apps/4kWallpaper.webp",desc:"تصاویر پس‌زمینه 4K",appLink:"#/Apps/#4KWallpaper"},
    {id:3,appTitle:"4K Wallpaper Expert",imgLink:"Apps/4kWallpaper.webp",desc:"تصاویر پس‌زمینه 4K",appLink:"#/Apps/#4KWallpaper"},
    {id:3,appTitle:"4K Wallpaper Expert",imgLink:"Apps/4kWallpaper.webp",desc:"تصاویر پس‌زمینه 4K",appLink:"#/Apps/#4KWallpaper"},
    {id:3,appTitle:"4K Wallpaper Expert",imgLink:"Apps/4kWallpaper.webp",desc:"تصاویر پس‌زمینه 4K",appLink:"#/Apps/#4KWallpaper"},
    {id:3,appTitle:"4K Wallpaper Expert",imgLink:"Apps/4kWallpaper.webp",desc:"تصاویر پس‌زمینه 4K",appLink:"#/Apps/#4KWallpaper"},
  ]},
]

function Categorys() {
  return (
    <>
      {
        cats.map((cat)=>(
          <Category props={cat}/>
        ))
      }
    </>
  );
}

export default Categorys;

