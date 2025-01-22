// import '../../App.css';
// import { getJson, postJson, deleteJson } from './fetch';

import { Link, Outlet, useLocation } from 'react-router-dom';

function AdminLayout() {
    const path = useLocation().pathname;
    let page = (path.split("/")[path.split("/").length-1]==="")?path.split("/")[path.split("/").length-2]:path.split("/")[path.split("/").length-1];
    
    return (
      <div className="bg-[#212121]">
        <div className="container pt-[80px] pt-9 flex justify-between">
          {/* Side Menu */}
          <section className="w-[30%]">
            <div className="m-3 rounded-xl bg-[#404040] py-4 px-3">
              <ul>
                <Link to="/Developers/Admin">
                  <li className={page==="Admin"?"p-2 py-3 my-1 bg-[#080808] cursor-default select-none rounded-md":"p-2 py-3 my-1 hover:bg-[#212121] cursor-pointer select-none rounded-md"}>
                    پنل اصلی
                  </li>
                </Link>
                <Link to="/Developers/Admin/categorys">
                  <li className={page==="categorys"?"p-2 py-3 my-1 bg-[#080808] cursor-default select-none rounded-md":"p-2 py-3 my-1 hover:bg-[#212121] cursor-pointer select-none rounded-md"}>
                    دسته بندی ها
                  </li>
                </Link>
                <Link to="/Developers/Admin/applications">
                  <li className={page==="applications"?"p-2 py-3 my-1 bg-[#080808] cursor-default select-none rounded-md":"p-2 py-3 my-1 hover:bg-[#212121] cursor-pointer select-none rounded-md"}>
                    اپلیکیشن ها
                  </li>
                </Link>
                <Link to="/Developers/Admin/CatAppRel">
                  <li className={page==="CatAppRel"?"p-2 py-3 my-1 bg-[#080808] cursor-default select-none rounded-md":"p-2 py-3 my-1 hover:bg-[#212121] cursor-pointer select-none rounded-md"}>
                    ارتباط اپلیکیشن و دسته بندی
                  </li>
                </Link>
              </ul>
            </div>
          </section>
          {/* Index */}
          <article className="w-[68%] m-3">
            <Outlet/>
          </article>
        </div>
      </div>
    );
}
  
export default AdminLayout;  