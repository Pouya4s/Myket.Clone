// import '../../App.css';
// import { getJson, postJson, deleteJson } from './fetch';

import { useState } from "react";
import Header from "./Header";
import { FaSearch } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

function Search() {

  const [params]=useSearchParams();
  const [isSearch]=useState(Boolean(params.get('S')));
  const [searchVal]=useState(params.get("S")!==undefined?params.get("S"):"");

  let apps=[
    {id:1,title:"فیلیمو",category:"کاربردی",image:require("../../assets/Apps/Filimo.webp")},
    {id:2,title:"کلش آف کلنز",category:"استریتژی",image:require("../../assets/Games/ClashofClans.webp")},
    {id:3,title:"فیلیمو",category:"کاربردی",image:require("../../assets/Apps/Filimo.webp")},
    {id:4,title:"کلش آف کلنز",category:"استریتژی",image:require("../../assets/Games/ClashofClans.webp")},
    {id:5,title:"فیلیمو",category:"کاربردی",image:require("../../assets/Apps/Filimo.webp")},
    {id:6,title:"کلش آف کلنز",category:"استریتژی",image:require("../../assets/Games/ClashofClans.webp")},
    {id:7,title:"فیلیمو",category:"کاربردی",image:require("../../assets/Apps/Filimo.webp")},
    {id:8,title:"کلش آف کلنز",category:"استریتژی",image:require("../../assets/Games/ClashofClans.webp")},
    {id:9,title:"فیلیمو",category:"کاربردی",image:require("../../assets/Apps/Filimo.webp")},
    {id:10,title:"کلش آف کلنز",category:"استریتژی",image:require("../../assets/Games/ClashofClans.webp")},
    {id:11,title:"فیلیمو",category:"کاربردی",image:require("../../assets/Apps/Filimo.webp")},
    {id:12,title:"کلش آف کلنز",category:"استریتژی",image:require("../../assets/Games/ClashofClans.webp")},
    {id:13,title:"فیلیمو",category:"کاربردی",image:require("../../assets/Apps/Filimo.webp")},
    {id:14,title:"کلش آف کلنز",category:"استریتژی",image:require("../../assets/Games/ClashofClans.webp")},
    {id:15,title:"کلش آف کلنز",category:"استریتژی",image:require("../../assets/Games/ClashofClans.webp")},
  ]

  return (
    <>
      <Header/>
      <article className="pt-[80px] bg-[#212121] min-h-[450px]">
        {
          isSearch?(
            <>
              <h1 className="container my-10 text-xl font-bold">نتیجه جستجو برای : <span>{searchVal}</span></h1>
              <div className="flex flex-wrap gap-2 container">
                {apps.map((app)=>(
                  <a href={'/details?id='+app.id} className="block w-[13%] rounded-md shadow hover:bg-[#242629] p-2">
                    <img className="pb-3 rounded-3xl" src={app.image} alt="appImage" />
                    <h2 className="text-sm">{app.title}</h2>
                    <p className="text-xs text-[#a7a7a7]">{app.category}</p>
                  </a>
                ))}
              </div>
            </>
          ):(
            <div className="flex flex-col justify-center items-center text-[#aaa] h-[450px]">
              <FaSearch size={130}/>
              <h3 className="text-sm p-5">در بین برنامه های مایکت جستجو کنید</h3>
            </div>
          )
        }
      </article>
    </>
  );
}

export default Search;

