import React from "react"
import {ReactComponent as Download} from "../../assets/Home/feature-download.svg"
import {ReactComponent as free_watch_movie} from "../../assets/Home/feature-free-watch-movie.svg"
import {ReactComponent as games} from "../../assets/Home/feature-games.svg"
import {ReactComponent as update_film} from "../../assets/Home/feature-update-film.svg"
import {ReactComponent as waranty} from "../../assets/Home/feature-waranty.svg"
import {ReactComponent as support} from "../../assets/Home/feature-support.svg"

function Boxes(){
    const boxes=[
        {text:"دانلود و به‌روزرسانی برنامه‌ها و بازی‌ها با ترافیک نیم‌بها",image:Download},
        {text:"تماشای رایگان فیلم و سریال",image:free_watch_movie},
        {text:"نصب آسان و سریع بازی‌های دیتادار",image:games},
        {text:"فیلم‌ها و سریال‌های روز دنیا با دوبله فارسی",image:update_film},
        {text:"تضمین ایمنی گوشی با سپر امنیت مایکت",image:waranty},
        {text:"پشتیبانی همیشگی و کامل توسط کارشناسان",image:support},
    ]
    return(
        <div className="boxWrapper flex flex-wrap justify-between items-center h-[350px] container">
        {
            boxes.map( (box)=>{
                let Svg=box.image
                return(
                <div className="box flex pd-10 bg-[#212121] w-[340px] h-[125px] p-5 rounded-3xl shadow-md shadow-[#111]">
                    <Svg className="w-[95px] h-[95px]"/>
                    <p className="flex justify-center items-center text-center leading-9 pr-1 flex-1 ">{box.text}</p>
                </div>
            )})
        }
        </div>
    )
}
export default Boxes