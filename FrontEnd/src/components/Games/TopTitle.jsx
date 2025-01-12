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
        <span> بازی ها </span>
      </div>
      <div className="container pt-9 text-sm">
        <h1 className="text-2xl font-bold">دانلود بازی های اندرویدی جدید و رایگان</h1>
        <p className="py-5 leading-7">دانلود بازی اندرویدی بسیار آسان است؛ اما ما پیشنهادهای جذابی از بازی‌های ایرانی و خارجی موبایل داریم که در دسته‌بندی‌های مرتب برای شما آماده کرده‌ایم و به لحظه درحال بروزرسانی و آپدیت بازی‌ها هستیم.</p>
      </div>
    </>
  );
}

export default TopTitle;

