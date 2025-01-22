// import '../../App.css';
// import { getJson, postJson, deleteJson } from './fetch';

import { Link } from "react-router-dom";
import { FaArrowsRotate } from "react-icons/fa6";;

function AdminMain() {
    return (
      <div className="w-full flex justify-evenly">
        <Link to={'/Developers/Admin/applications'} className="block rounded-3xl w-[30%] border-2 border-[#060606] cursor-pointer flex flex-col items-center p-4 hover:bg-[#454545]">
          <img className="rounded-2xl" src={require('../../assets/Games/ClashofClans.webp')} alt="app" />
          <h2 className="text-center pt-3">مدیریت اپلیکیشن ها</h2>
        </Link>
        <Link to={'/Developers/Admin/CatAppRel'} className="block rounded-3xl w-[30%] border-2 border-[#060606] cursor-pointer flex flex-col items-center p-4 hover:bg-[#454545]">
          <div className="h-full w-full relative">
            <FaArrowsRotate className="absolute z-10 rotate-[-45deg] text-[#080808] top-9 right-9" size={'60%'}/>
            <img className="rounded-2xl absolute w-[60%]" src={require('../../assets/Games/ClashofClans.webp')} alt="app" />
            <img className="rounded-2xl absolute w-[60%] bottom-0 left-0" src={require('../../assets/Games/strategySymbol.jpg')} alt="app" />
          </div>
          <h2 className="text-center pt-3">مدیریت ارتباطات</h2>
        </Link>
        <Link to={'/Developers/Admin/categorys'} className="block rounded-3xl w-[30%] border-2 border-[#060606] cursor-pointer flex flex-col items-center p-4 hover:bg-[#454545]">
          <img className="rounded-2xl" src={require('../../assets/Games/strategySymbol.jpg')} alt="app" />
          <h2 className="text-center pt-3">مدیریت دسته بندی ها</h2>
        </Link>
      </div>
    );
}
  
export default AdminMain; 