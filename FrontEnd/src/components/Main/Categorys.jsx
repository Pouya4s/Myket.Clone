import React from "react"

function Categorys() {
  return (
    <div className="cat felx flex-col bg-[#212121] pt-28 pb-16">
      <div className="flex flex-col">
        <h3 className="text-xl text-center">دسته‌بندی‌ها</h3>
        <div className="catSpliter miniCon flex h-full container my-5">
          <div className="flex flex-col h-full flex-1">
            <div className="flex-1 rounded-3xl overflow-hidden m-2 Cbox bg-[#2c2c2e] mt-6">
              <a className="block h-full relative" href="#/#social">
              <img className="object-cover w-full h-full" src={require("../../assets/Home/category-android-social-media-apps.svg").default} alt="social" />
              <span className="absolute top-[45%] right-16 text-xl">شبکه‌های اجتماعی</span>
              </a>
            </div>
            <div className="flex border-black flex-1 gap-3 py-5 px-2">
              <div className="flex-1 rounded-3xl Cbox overflow-hidden bg-[#2c2c2e]">
                <a className="block h-full relative" href="#/#tools">
                  <img className="object-cover w-full h-full" src={require("../../assets/Home/category-android-assistant-apps.svg").default} alt="social" />
                  <span className="absolute top-[45%] right-5 text-xl">ابزارهای کاربردی</span>
                </a>
              </div>
              <div className="flex-1 rounded-3xl Cbox overflow-hidden bg-[#2c2c2e]">
                <a className="block h-full relative" href="#/#sports">
                  <img className="object-cover w-full h-full" src={require("../../assets/Home/category-android-sport-apps.svg").default} alt="social" />
                  <span className="absolute top-[45%] right-5 text-xl">برنامه ورزشی</span>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-full flex-1">
            <div className="flex border-black flex-1 gap-3 py-5 px-2">
              <div className="flex-1 rounded-3xl Cbox overflow-hidden bg-[#2c2c2e]">
                <a className="block h-full relative" href="#/#movies">
                  <img className="object-cover w-full h-full" src={require("../../assets/Home/category-android-video-editor-apps.svg").default} alt="social" />
                  <span className="absolute top-[45%] right-5 text-xl">فیلم و عکس</span>
                </a>
              </div>
              <div className="flex-1 rounded-3xl Cbox overflow-hidden bg-[#2c2c2e]">
                <a className="block h-full relative" href="#/#fungames">
                  <img className="object-cover w-full h-full" src={require("../../assets/Home/category-android-fun-games.svg").default} alt="social" />
                  <span className="absolute top-[45%] right-5 text-xl">بازی تفننی</span>
                </a>
              </div>
            </div>
            <div className="flex-1 rounded-3xl overflow-hidden m-2 Cbox bg-[#2c2c2e] mb-6">
              <a className="block h-full relative" href="#/#actiongame">
                <img className="object-cover w-full h-full" src={require("../../assets/Home/category-android-action-games.svg").default} alt="social" />
                <span className="absolute top-[45%] right-16 text-xl">بازی اکشن</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="mt-12 text-xl text-center">سایر</h3>
        <div className="miniCon others flex h-full container my-5">
          <div className="otherBig bg-[#2c2c2e] m-2 rounded-3xl overflow-hidden Cbox relative" style={{flex:2}}>
            <a href="#/#advertisement" className="inline-block w-full h-full">
              <img className="w-full h-full" src={require("../../assets/Home/myket-advertisements.svg").default} alt="tablighat" />
              <span className="bBig absolute px-3 py-4 rounded-2xl border-[#b9dae9a8] min-w-40 text-center border right-[37%] top-[40%] bg-[#2c2c2e] text-xl">تبلیغات</span>
            </a>
          </div>
          <div className="otherSmall flex-1 bg-[#2c2c2e] m-2 rounded-3xl overflow-hidden Cbox relative">
            <a href="#/#jobOffer" className="inline-block w-full h-full">
              <img className="w-full h-full" src={require("../../assets/Home/myket-job-offers.svg").default} alt="tablighat" />
              <span className="bsmall absolute px-3 py-4 rounded-2xl border-[#b9dae9a8] min-w-40 text-center border right-[17%] top-[40%] bg-[#2c2c2e] text-xl">فرصت‌های شغلی</span>
            </a>
          </div>
          <div className="otherSmall flex-1 bg-[#2c2c2e] m-2 rounded-3xl overflow-hidden Cbox relative">
            <a href="#/#magazine" className="inline-block w-full h-full">
              <img className="w-full h-full" src={require("../../assets/Home/myket-mag.svg").default} alt="tablighat" />
              <span className="bsmall absolute px-3 py-4 rounded-2xl border-[#b9dae9a8] min-w-40 text-center border right-[21%] top-[40%] bg-[#2c2c2e] text-xl">مجله مایکت</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Categorys;