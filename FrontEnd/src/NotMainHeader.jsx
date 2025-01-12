import React from "react"
import { AiOutlineSearch } from "react-icons/ai";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiOutlineAppstore } from "react-icons/ai";
import { BiMoviePlay } from "react-icons/bi";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header bg-[rgba(0,0,0,.5)] backdrop-blur-md z-50">
        <div className="pad40 container h-full flex justify-between">
            <div className="flex items-center">
              <a className="" id="logo" href="https://myket.ir">
                <img src={require("./assets/Home/myket.png")} alt="myket" className="h-[50px]"/>
              </a>
            </div>
            <div className="menu flex items-center justify-end flex-1">
              <div className="menubtns flex w-[85 %]">
                <ul className="flex justify-end gap-5 w-full text-[16px]">
                  <li><Link to="/Games">بازی ها</Link></li>
                  <li><Link to="/Apps">برنامه ها</Link></li>
                  <li><Link to="/Movies">فیلم و سریال</Link></li>
                  <li><Link to="/Developers">توسعه دهندگان</Link></li>
                </ul>
              </div>
              <a id="Toplink" className="bg-[#07f] mx-2 font-bold text-[15px] rounded-xl py-1 px-3" href="#/#download">
                دانلود مایکت
              </a>
              <div className="flex justify-around items-center text-[20px] font-sans text-[#07f] font-bold">
                <a href="#/#Search"><AiOutlineSearch size={27} className=""/></a>
              </div>
            </div>
        </div>
      </header>
      <div className="flex fixed z-50 h-[75px] w-full bottom-0 bg-[#212121] rounded-t-3xl shadow-[0_0px_5px_2px_rgba(25,25,25,1)] hidden" id="handTools">
        <div className="flex-1">
          <a className="block pt-2 h-full" href="#/#games">
            <IoGameControllerOutline className="mx-auto" size={35} color="#7c8e94"/>
            <p className="text-center font-bold mt-2 text-[#7c8e94] text-[12px]">بازی ها</p>
          </a>
        </div>
        <div className="flex-1">
          <a className="block pt-2 h-full" href="#/#programs">
            <AiOutlineAppstore className="mx-auto" size={35} color="#7c8e94"/>
            <p className="text-center font-bold mt-2 text-[#7c8e94] text-[12px]">برنامه ها</p>
          </a>
        </div>
        <div className="flex-1">
          <a className="block pt-2 h-full" href="#/#Movies">
            <BiMoviePlay className="mx-auto" size={35} color="#7c8e94"/>
            <p className="text-center font-bold mt-2 text-[#7c8e94] text-[12px]">فیلم و سریال</p>
          </a>
        </div>
        <div className="flex-1">
          <a className="block pt-2 h-full" href="#/#Developers">
            <MdOutlineDeveloperMode className="mx-auto" size={35} color="#7c8e94"/>
            <p className="text-center font-bold mt-2 text-[#7c8e94] text-[12px]">توسعه دهندگان</p>
          </a>
        </div>
      </div>
    </>
  );
}
export default Header;