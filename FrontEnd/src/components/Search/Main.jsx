// import '../../App.css';
// import { getJson, postJson, deleteJson } from './fetch';

import { useEffect, useState } from "react";
import Header from "./Header";
import { FaSearch } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import { getJson } from "../../fetch";

function Search() {

  const [params]=useSearchParams();
  const [isSearch]=useState(Boolean(params.get('S')));
  const [searchVal]=useState(params.get("S")!==undefined?params.get("S"):"");
  const [apps, setApps] = useState();
  useEffect(()=>{
    getApps(searchVal);
  }, [searchVal])

  let output = (apps===undefined)?<p>در حال بارگذاری...</p>:apps.map((app)=>(
    <a key={app.id} href={'/details?id='+app.id} className="block w-[13%] rounded-md hover:shadow-md shadow-black hover:bg-[#242629] p-2 transition-all duration-300 overflow-hidden h-fit">
      <img className="pb-3 rounded-3xl" src={app.image} alt="appImage" />
      <h2 className="text-sm">{app.name}</h2>
      <p className="text-xs text-[#a7a7a7]">{app.catchTitle}</p>
    </a>
  ));
  return (
    <>
      <Header/>
      <article className="pt-[80px] bg-[#212121] min-h-[450px] pb-5">
        {
          isSearch?(
            <>
              <h1 className="container my-10 text-xl font-bold">نتیجه جستجو برای : <span>{searchVal}</span></h1>
              <div className="flex flex-wrap gap-2 container">
                {output}
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
  async function getApps(s){
        let app = await getJson("api/Apps/SearchApp/" + s);
        console.log(app);
        setApps(app);
  }
}

export default Search;

