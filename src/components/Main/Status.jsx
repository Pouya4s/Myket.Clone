import React from "react"
import State from "./State";
import Boxes from "./Boxes";

const states=[
  {number:50,text:"میلیون نصب فعال"},
  {number:26,text:"میلیون کاربر فعال ماهانه"},
  {number:180,text:"میلیون جستجو ماهانه"},
  {number:140,text:"میلیون دانلود ماهانه"},
  {number:900,text:"میلیون دقیقه پخش ماهانه فیلم و سریال"},
  {number:10,text:"هزار فیلم و سریال"},
]

function Status() {
  return (
    <section className="SBWrapper bg-[#2d343d] h-[580px]">
      <div className="statusWrapper container flex justify-center gap-5 py-20">
        {
          states.map( (obj)=>(
            <State number={obj.number} text={obj.text}/>
          ))
        }
      </div>
      <Boxes />
    </section>
  );
}
export default Status;
