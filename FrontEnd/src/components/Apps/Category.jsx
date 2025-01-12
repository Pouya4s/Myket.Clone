// import '../../App.css';
// import { getJson, postJson, deleteJson } from './fetch';

import { IoIosArrowBack } from "react-icons/io";
// import { Link } from "react-router-dom";

function Category({props}) {
  //console.log(props);
  return (
    <div className="containerCat py-5 text-sm flex flex-col">
      <div className="flex flex-row justify-between font-bold mb-6">
        <h2 className="text-xl">{props.catTitle}</h2>
        <a className="text-[#07f] p-1 hover:bg-[#c9f0ff6b] hover:text-white" href={props.catLink}>همه <IoIosArrowBack className="inline" size={20} /></a>
      </div>
      <div className="flex flex-wrap gap-2 min-w-[1133px]">
        {
          props.catApps.map((app)=>(
            <div className="app w-[155px]">
              <a className="flex flex-col py-2.5 px-1 rounded-lg appShadow" href={app.appLink}>
                <img className="w-36 h-36 rounded-2xl object-cover" src={require("../../assets/"+app.imgLink)} alt="AppImage" />
                <h4 className="pt-1.5 h-[52px] font-light text-[#ddd] text-right LTR">{app.appTitle}</h4>
                <p className="text-[#a7a7a7] font-light text-xs">{app.desc}</p>
              </a>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Category;

