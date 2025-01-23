// import '../../App.css';
// import { getJson, postJson, deleteJson } from './fetch';

import Rain from './Rain';

function Main() {
    return (
      <article className="pt-[78px] bg-[#212121]">
        <div id="rainCard" className="relative overflow-hidden bg-[#727272]">
          <img onLoad={(e)=>{Rain(e.target.parentElement)}} className="Starter absolute top-[90%]" src={require("../../assets/Home/DevelopersSVG.png")} alt="AppImage" />
          <div className='absolute bg-[rgba(0,0,0,.6)] w-full h-full left-0 top-0 z-10'></div>
          <div className="flex relative container text-center justify-start pb-10 z-20 pt-[70px]">
            <div className="flex flex-col p-10 pt-5 pr-0 w-[55%] items-center">
              <div>
                <h1 className="text-3xl font-bold pb-10">پنل توسعه دهندگان مایکت</h1>
                <p className="leading-7 px-16 text-sm">چه یک توسعه‌دهنده تازه‌کار باشید، چه یک تیم بزرگ از توسعه‌دهندگان ماهر، خوشحالیم که تصمیم گرفته‌اید اپلیکیشن‌تان را به بیش از ۵۰ میلیون کاربر مایکت عرضه نمایید و کسب درآمد کنید.</p>
              </div>
              <img className="max-w-[300px] mt-24" src={require("../../assets/Home/DevelopersSVG.png")} alt="DevelopersSVG" />
            </div>
            <div className="flex flex-col bg-[#222425] rounded-2xl py-10 px-20 w-[40%]">
              <h2 className="pt-10 pb-20 text-lg">ورود / ثبت‌نام</h2>
              <form action="#" method="post">
                <p className="text-start text-sm text-[#c6c6c7]"><label>ایمیل:</label></p>
                <input style={{direction:"ltr"}} name="email" className="outline-0 rounded-lg m-2 py-2 px-3 bg-[#222425] border border-[#424648] w-full caret-[#0091ea]" type="email" />
                <p className="text-start text-sm text-[#c6c6c7] mt-2"><label>پسورد:</label></p>
                <input style={{direction:"ltr"}} name="password" className="outline-0 rounded-lg m-2 py-2 px-3 bg-[#222425] border border-[#424648] w-full caret-[#0091ea]" type="password" />
                <button type="submit" className="py-2 mx-2 my-5 bg-[#2196f3] rounded-lg w-full shadow shadow-[#494a4b] active:shadow-lg active:shadow-[#494a4b]">ادامه</button>
              </form>
              <div className="flex py-10 justify-around text-[#c6c6c7] text-sm">
                <hr className="flex-[.4] border-[#424648] mt-2" />
                <label>یا</label>
                <hr className="flex-[.4] border-[#424648] mt-2" />
              </div>
              <a href="#GoogleSignIn" className="hover:text-[#2196f3] text-sm text-[#dcdcdc]">
                <div className="flex items-center justify-center">
                  <img className="w-5 h-5 mx-3" src={require("../../assets/Home/googleIcon.png")} alt="Google" />
                  <p>ورود با حساب کاربری گوگل</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </article>
    );
}
  
export default Main;  