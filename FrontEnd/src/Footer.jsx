import React from "react"
import { BiSolidPhone } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import NumberToPersianWord from "number_to_persian_word";
import { IoLogoRss } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiAparat } from "react-icons/si";

function Categorys() {
  return (
    <footer className="footer pb-6 bg-[#363638] pt-10">
        <div className="container">
          <p className="max-w-[840px] pb-4 text-base font-bold">لذت دانلود جدیدترین بازی‌ها و بهترین برنامه‌های اندروید از مایکت!</p>
          <p className="max-w-[840px] text-base">دانلود جدیدترین بازی‌های اندروید برای اوقات فراغت و دریافت بهترین برنامه‌های کاربردی برای انجام انواع فعالیت‌های روزانه. لینک مستقیم، رایگان و سریع، تست شده و امن با ترافیک نیم‌بها و نصب خودکار دیتا‍.</p>
          <hr className="my-6 border-[rgb(149,149,149)] opacity-[21%]"/>
          <div className="footersecs mx-aut flex justify-evenly">
            <div className="flex-1">
              <ul>
                <li><a href="#/#downloadapp">دانلود اپلیکیشن Myket</a></li>
                <li><a href="#/#security">امنیت و حریم شخصی</a></li>
                <li><a href="#/#cover">ارتباط با پشتیبانی</a></li>
                <li><a href="#/#conditions">شرایط استفاده</a></li>
                <li><a href="#/#benefits">مزایای مایکت</a></li>
                <li><a href="#/#technicalinformations">مستندات فنی</a></li>
              </ul>
            </div>
            <div className="flex-1">
            <ul>
                <li><a href="#/#signtoget">نشان دریافت از مایکت</a></li>
                <li><a href="#/#developers">پنل توسعه‌دهندگان</a></li>
                <li><a href="#/#jobOffer">فرصت‌های شغلی</a></li>
                <li><a href="#/#magazine">مجله مایکت</a></li>
                <li><a href="#/#about">درباره ما</a></li>
                <li><a href="#/#contactus">تماس با ما</a></li>
              </ul>
            </div>
            <div className="about flex-1">
              <h4 className="text-base font-bold">همیشه پاسخگوی شما هستیم.</h4>
              <div className="flex pt-5 leading-[55px] text-sm">
                <BiSolidPhone color="#808183" className="ml-1" size={35}/>
                <p>{NumberToPersianWord.convertEnToPe("021-92009330")}</p><pre> / </pre><p>{NumberToPersianWord.convertEnToPe("021-45637000")}</p>
              </div>
              <div className="flex pt-1 leading-[45px] text-base">
                <AiOutlineMail color="#808183" className="w-[35px] h-[35px] ml-1"/>
                <p>info@myket.ir</p>
              </div>
              <div className="flex mt-3">
                <a className="rounded-full bg-[#808080] mx-1" href="#/#aparat"><SiAparat className="m-2" size={27}/></a>
                <a className="rounded-full bg-[#808080] mx-1" href="#/#twitter"><FaTwitter className="m-2" size={27}/></a>
                <a className="rounded-full bg-[#808080] mx-1" href="#/#telegram"><FaTelegramPlane className="m-2" size={27}/></a>
                <a className="rounded-full bg-[#808080] mx-1" href="#/#instagram"><FaInstagram className="m-2" size={27}/></a>
                <a className="rounded-full bg-[#808080] mx-1" href="#/#rss"><IoLogoRss className="m-2" size={27}/></a>
              </div>
            </div>
            <div className="namadha flex flex-1">
              <img className="w-[125px] h-[135px]" src={require("./assets/Home/e-namad.png")} alt="enamad" />
              <img className="w-[135px] h-[135px]" src={require("./assets/Home/samandehi.png")} alt="samandehi" />
            </div>
          </div>
          <hr className="my-6 border-[rgb(149,149,149)] opacity-[21%]"/>
          <p className="text-center text-sm">کلیه حقوق این سایت متعلق به (پویا حسنی) می باشد</p>
        </div>
    </footer>
  );
}
export default Categorys;

<div className="Footer h-60 bg-violet-500">
</div>