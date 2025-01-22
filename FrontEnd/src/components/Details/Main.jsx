// import '../../App.css';
// import { getJson, postJson, deleteJson } from './fetch';
import myjs from './detailsSlider.js';
import { GoTriangleLeft } from "react-icons/go";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { getJson } from '../../fetch.jsx';
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from 'react';

function Main({props}) {
  const [parameters] = useSearchParams();
  const id = parameters.get('id');
  const [app, setApp] = useState();
  useEffect(()=>{
      getApp(id);
  });
  
  let kollesh = (app===undefined)?<p className='text-2xl p-8 container'>Loading...</p>:<section className="container flex pt-3 justify-between">
  {/* SideBar */}
  <div className="w-[29%] flex flex-col">
    <div className='flex flex-col bg-[#4f4f4f] rounded-lg p-4 mb-3'>
      <div className="flex gap-5 pl-1">
        <img className="w-[110px] h-[110px] rounded-lg" src={app.image} alt="AppImage" />
        <div className="flex flex-col w-full justify-evenly">
          <h1 className="font-bold text-[20px]">{app.name}</h1>
          <p className="text-xs leading-7">{app.catchTitle}</p>
        </div>
      </div>
      <div className="my-5">
        <a className="block bg-[#07f] p-2.5 text-center rounded-lg font-bold" href={app.downloadLink}>نصب</a>
      </div>
      <div className="appDetails flex flex-col text-[13px]">
  
        <div className="appDetail flex p-3">
          <span className="flex-1 font-bold">نوع</span>
          <span className="flex-1">{(app.isGame)?"بازی":"نرم افزار"}</span>
        </div>
        <div className="appDetail flex p-3">
          <span className="flex-1 font-bold">تعداد دانلود</span>
          <span className="flex-1">{app.downloadsCount}</span>
        </div>
        <div className="appDetail flex p-3">
          <span className="flex-1 font-bold">حجم</span>
          <span className="flex-1">{app.sizeInMBs}</span>
        </div>
        <div className="appDetail flex p-3">
          <span className="flex-1 font-bold">دسته بندی ها</span>
          <span className="flex-1">{app.categories.map((cat)=>(<>{cat.name} <br/></>))}</span>
        </div>
        
        
      </div>
    </div>
  </div>
  {/* MainPage */}
  <div className="w-[70%] mb-10">
    <div class="sliderwrapper">
      <span id="sliderRight" class="arrow right">
        <FaAngleRight/>
      </span>
      <span id="sliderLeft" class="arrow left">
        <FaAngleLeft/>
      </span>
        <div class="slider">
        {
          app.galery.map((link)=>(
            <div class="slideritem">
              <img onLoad={myjs} src={link} alt="GalleryImage" />
            </div>
          ))
        }
        </div>
    </div>
    <div className='py-[20px]'>
      <Link to='/' className='text-[#00b0ff] text-sm'>خانه</Link>
      <GoTriangleLeft size={18} className='inline'/>
      {(app.isGame)?<Link to='/Games' className='text-[#00b0ff] text-sm'>بازی ها</Link>:
        <Link to='/Apps' className='text-[#00b0ff] text-sm'>برنامه ها</Link>}
      <GoTriangleLeft size={18} className='inline'/>
      <Link to={'/Category?id='+ app.categories[0].id } className='text-[#00b0ff] text-sm'>{app.categories[0].name}</Link>
    </div>
    <div className='allAppDescription text-[12px] leading-[27px]'>
      {app.description}
    </div>
  </div>
</section>;
  return (
    <>
      <div id='black'></div>
      <article className="pt-[80px] bg-[#212121]">
        {kollesh}
      </article>
    </>
  )
  async function getApp(id)
    {
        let result = await getJson('api/apps/' + id);
        setApp(result);
    }
}

export default Main;

