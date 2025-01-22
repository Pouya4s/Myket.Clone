import React, { useState } from "react"
import { IoIosSearch } from "react-icons/io";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiOutlineAppstore } from "react-icons/ai";
import { BiMoviePlay } from "react-icons/bi";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { useSearchParams } from "react-router-dom";

function Header() {

  const [params]=useSearchParams();
  const [searchVal,setSearchVal]=useState(params.get("S")!==undefined?params.get("S"):"");
  // function search(s){}
  return (
    <>
      <header className="header bg-[#212121] backdrop-blur-md z-50">
        <div className="pad40 container h-full flex justify-between items-center gap-5">
            <a className="" id="logo" href="/">
              <img src={require("../../assets/Home/myket.png")} alt="myket" className="h-[50px]"/>
            </a>
            <form action="" method="get" className="flex-1 text-center flex justify-center items-center">
              <input required value={searchVal} name='S' className="w-3/4 p-3 bg-[#2e2e2e] rounded-lg border border-[#515151]" onChange={(e)=>{setSearchVal(e.target.value)}} type="search" />
              <button className="text-[#0091ea] p-3 shadow hover:shadow-[#2e2e2e] rounded"><IoIosSearch className="pointer-events-none" size={30} /></button>
              {/* onClick={(e)=>{search(e.target.previousElementSibling.value)}} */}
            </form>
            <a id="Toplink" className="bg-[#07f] mx-2 font-bold text-[15px] rounded-xl py-1 px-3" href="https://assets.myket.ir/apks/myket-972.apk">
              دانلود مایکت
            </a>
        </div>
      </header>
      <div className="flex fixed z-50 h-[75px] w-full bottom-0 bg-[#212121] rounded-t-3xl shadow-[0_0px_5px_2px_rgba(25,25,25,1)] hidden" id="handTools">
        <div className="flex-1">
          <a className="block pt-2 h-full" href="games">
            <IoGameControllerOutline className="mx-auto" size={35} color="#7c8e94"/>
            <p className="text-center font-bold mt-2 text-[#7c8e94] text-[12px]">بازی ها</p>
          </a>
        </div>
        <div className="flex-1">
          <a className="block pt-2 h-full" href="apps">
            <AiOutlineAppstore className="mx-auto" size={35} color="#7c8e94"/>
            <p className="text-center font-bold mt-2 text-[#7c8e94] text-[12px]">برنامه ها</p>
          </a>
        </div>
        <div className="flex-1">
          <a className="block pt-2 h-full" href="Movies">
            <BiMoviePlay className="mx-auto" size={35} color="#7c8e94"/>
            <p className="text-center font-bold mt-2 text-[#7c8e94] text-[12px]">فیلم و سریال</p>
          </a>
        </div>
        <div className="flex-1">
          <a className="block pt-2 h-full" href="Developers">
            <MdOutlineDeveloperMode className="mx-auto" size={35} color="#7c8e94"/>
            <p className="text-center font-bold mt-2 text-[#7c8e94] text-[12px]">توسعه دهندگان</p>
          </a>
        </div>
      </div>
    </>
  );
}
export default Header;
