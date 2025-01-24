// import '../../App.css';
// import { getJson, postJson, deleteJson } from './fetch';

import { useState, useEffect } from "react";
import { getJson } from "../../fetch";
import { useSearchParams } from "react-router-dom";
// import { useSearchParams } from "react-router-dom";

function Category() {

  const [parameters] = useSearchParams();
  const id = parameters.get('id');
  const [category, setCategory] = useState();
  useEffect(()=>{
    getCategory(id);
  });
  // const [params]=useSearchParams();
  // const [catID]=useState(params.get("id")!==undefined?params.get("id"):"");
  const [catName, setCatname]= useState();

  let apps= (category===undefined)? []: category.apps;

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
                      <h2 className="text-sm">{app.name}</h2>
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
  
  async function getCategory(id){
    let cat = await getJson("api/Categories/" + id);
    setCategory(cat);
    setCatname(cat.name);
  }
}

export default Category;

