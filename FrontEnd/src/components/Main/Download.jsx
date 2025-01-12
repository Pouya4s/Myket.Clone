import React from "react"
import { BiSolidDownload } from "react-icons/bi";
import VerticalSlider from "./VerticalSlider";
import HorizontalSlider from "./HorizontalSlider";

function Download() {
  return (
    <section className="download h-[760px] bg-[#212121] overflow-hidden"> {/* mt-[-78px] */}
      <div className="downloadWrapper flex container h-full">
        <div className="flex flex-col flex-1 pt-52 h-full items-start">
          <img className="h-[95px] w-[300px]" src={require("../../assets/Home/myket2.png")} alt="myket" />
          <p className="text-4xl font-black leading-loose mt-10">دانلود بازی‌ و برنامه‌ اندرویدی تماشای فیلم، سریال و انیمیشن</p>
          <div className="flex flex-col w-full mt-16">
            <a href="https://assets.myket.ir/apks/myket-972.apk" className="myketD flex items-center justify-center text-[26px] bg-[#07f] inline w-[55%] p-4 rounded-2xl font-bold gap-2">
              <BiSolidDownload id="DownloadIcon" className="animate-MoveUpDown" size={25}/>دانلود مایکت
            </a>
            <p className="w-[55%] text-center text-[13px] py-5"><a href="https://myket.ir/download#guide">راهنمای نصب مایکت</a></p>
          </div>
        </div>
        <VerticalSlider/>
        <HorizontalSlider/>
      </div>
    </section>
  );
}
export default Download;
