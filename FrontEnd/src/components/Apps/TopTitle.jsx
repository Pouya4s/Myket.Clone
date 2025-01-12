// import '../../App.css';
// import { getJson, postJson, deleteJson } from './fetch';

import { BiSolidLeftArrow } from "react-icons/bi";
import { Link } from "react-router-dom";

function TopTitle() {
  return (
    <>
      <div className="container pt-9 text-sm">
        شما اینجا هستید:
        <Link className="text-[#07f]" to={"/"}> خانه </Link>
        <BiSolidLeftArrow className="inline align-middle" size={10} /> 
        <span> برنامه ها </span>
      </div>
      <div className="container pt-9 text-sm">
        <h1 className="text-2xl font-bold">دانلود برنامه اندرویدی جدید و رایگان</h1>
        <p className="py-5 leading-7">دانلود برنامه‌های اندروید از استور امن مایکت با ترافیک نیم‌بها و بروزرسانی برنامه‌های نصب شده گوشی شما از وظایف ماست. پس برای آپدیت برنامه‌ها و نصب برنامه‌های جدید موبایل سراغ ما را بگیرید.</p>
      </div>
    </>
  );
}

export default TopTitle;

