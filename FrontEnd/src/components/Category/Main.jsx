// import '../../App.css';
// import { getJson, postJson, deleteJson } from './fetch';

import { useState } from "react";
// import { useSearchParams } from "react-router-dom";

function Category() {

  // const [params]=useSearchParams();
  // const [catID]=useState(params.get("id")!==undefined?params.get("id"):"");
  const [catName]=useState("استراتژی");

  let apps=[
    {id:1,title:"پسرخوانده",catchTitle:"نبرد مافیا و شهروند",image:require("../../assets/Games/StepBoy.webp")},
    {id:2,title:"کلش آف کلنز",catchTitle:"بازی استراتژی محبوب",image:require("../../assets/Games/ClashofClans.webp")},
    {id:3,title:"پسرخوانده",catchTitle:"نبرد مافیا و شهروند",image:require("../../assets/Games/StepBoy.webp")},
    {id:4,title:"کلش آف کلنز",catchTitle:"بازی استراتژی محبوب",image:require("../../assets/Games/ClashofClans.webp")},
    {id:5,title:"پسرخوانده",catchTitle:"نبرد مافیا و شهروند",image:require("../../assets/Games/StepBoy.webp")},
    {id:6,title:"کلش آف کلنز",catchTitle:"بازی استراتژی محبوب",image:require("../../assets/Games/ClashofClans.webp")},
    {id:7,title:"پسرخوانده",catchTitle:"نبرد مافیا و شهروند",image:require("../../assets/Games/StepBoy.webp")},
    {id:8,title:"کلش آف کلنز",catchTitle:"بازی استراتژی محبوب",image:require("../../assets/Games/ClashofClans.webp")},
    {id:9,title:"پسرخوانده",catchTitle:"نبرد مافیا و شهروند",image:require("../../assets/Games/StepBoy.webp")},
    {id:10,title:"کلش آف کلنز",catchTitle:"بازی استراتژی محبوب",image:require("../../assets/Games/ClashofClans.webp")},
    {id:11,title:"پسرخوانده",catchTitle:"نبرد مافیا و شهروند",image:require("../../assets/Games/StepBoy.webp")},
    {id:12,title:"کلش آف کلنز",catchTitle:"بازی استراتژی محبوب",image:require("../../assets/Games/ClashofClans.webp")},
    {id:13,title:"پسرخوانده",catchTitle:"نبرد مافیا و شهروند",image:require("../../assets/Games/StepBoy.webp")},
    {id:14,title:"کلش آف کلنز",catchTitle:"بازی استراتژی محبوب",image:require("../../assets/Games/ClashofClans.webp")},
    {id:15,title:"کلش آف کلنز",catchTitle:"بازی استراتژی محبوب",image:require("../../assets/Games/ClashofClans.webp")},
  ]

  return (
    <>
      <article className="pt-[80px] bg-[#212121] min-h-[450px] pb-5">
        {
          <>
            <h1 className="container my-10 text-xl font-bold">{catName}</h1>
            <div className="flex flex-wrap gap-2 container">
              {
                (apps.length!==0 && apps!==undefined)?
                  apps.map((app)=>(
                    <a href={'/details?id='+app.id} className="block w-[13%] rounded-md hover:shadow-md shadow-black hover:bg-[#242629] p-2 transition-all duration-300 overflow-hidden h-fit">
                      <img className="pb-3 rounded-3xl" src={app.image} alt="appImage" />
                      <h2 className="text-sm">{app.title}</h2>
                      <p className="text-xs text-[#a7a7a7]">{app.catchTitle}</p>
                    </a>
                  ))
                :(
                  <h2 className="flex-1 text-center text-2xl p-5 text-[#a7a7a7]">برنامه ای در این دسته بندی وجود ندارد!</h2>
                )
              }
            </div>
          </>
        }
      </article>
    </>
  );
}

export default Category;

