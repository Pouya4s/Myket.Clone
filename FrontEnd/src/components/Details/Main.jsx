// import '../../App.css';
// import { getJson, postJson, deleteJson } from './fetch';
import myjs from './detailsSlider.js';
import { GoTriangleLeft } from "react-icons/go";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";


function Main({props}) {
  let propDetail={
    title: "فیلیمو",
    phrase: "دنیایی از فیلم و سریال روی گوشی شما",
    imgLink: require("../../assets/Apps/Filimo.webp"),
    DLink: "#/details/#download",
    details:[
      {id:0,name:"نسخه",value:"۴.۱۷"},
      {id:1,name:"آخرین بروزرسانی",value:"۱۴۰۳/۰۹/۱۹"},
      {id:2,name:"تعداد دانلود",value:"۱۱ میلیون"},
      {id:3,name:"امتیاز",value:"۴.۳"},
      {id:4,name:"تعداد نظرات",value:"۶۸,۱۷۵"},
      {id:5,name:"حجم",value:"۲۱ مگابایت"},
      {id:6,name:"نوع",value:"برنامه اندرویدی",link:"#/details/#AndroidApps"},
      {id:7,name:"دسته‌بندی",value:"عکس و فیلم",link:"#/details/#catMovies"},
      {id:8,name:"سازنده",value:"صبا ایده",link:"#/details/#Creator"}
    ],
    gallery:[
      {id:0,link:require("../../assets/Apps/FilimoGallery/pic1.webp")},
      {id:1,link:require("../../assets/Apps/FilimoGallery/pic2.webp")},
      {id:2,link:require("../../assets/Apps/FilimoGallery/pic3.webp")},
      {id:3,link:require("../../assets/Apps/FilimoGallery/pic4.webp")},
      {id:4,link:require("../../assets/Apps/FilimoGallery/pic5.webp")},
      {id:5,link:require("../../assets/Apps/FilimoGallery/pic6.webp")},
      {id:6,link:require("../../assets/Apps/FilimoGallery/pic7.webp")},
    ],
  }
  return (
    <>
      <div id='black'></div>
      <article className="pt-[80px] bg-[#212121]">
        <section className="container flex pt-3 justify-between">
          {/* SideBar */}
          <div className="w-[29%] flex flex-col">
            <div className='flex flex-col bg-[#4f4f4f] rounded-lg p-4 mb-3'>
              <div className="flex gap-5 pl-1">
                <img className="w-[110px] h-[110px] rounded-lg" src={propDetail.imgLink} alt="AppImage" />
                <div className="flex flex-col w-full justify-evenly">
                  <h1 className="font-bold text-[20px]">{propDetail.title}</h1>
                  <p className="text-xs leading-7">{propDetail.phrase}</p>
                </div>
              </div>
              <div className="my-5">
                <a className="block bg-[#07f] p-2.5 text-center rounded-lg font-bold" href={propDetail.DLink}>نصب</a>
              </div>
              <div className="appDetails flex flex-col text-[13px]">
              {
                propDetail.details.map((detail)=>{
                  if(!detail.link){
                    return(
                      <div className="appDetail flex p-3">
                        <span className="flex-1 font-bold">{detail.name}</span>
                        <span className="flex-1">{detail.value}</span>
                      </div>
                    )  
                  }
                  return(
                    <div className="appDetail flex p-3">
                      <span className="flex-1 font-bold">{detail.name}</span>
                      <span className="flex-1">
                        <a className="text-[#00b0ff]" href={detail.link}>
                          {detail.value}
                        </a>
                      </span>
                    </div>
                  )
                })
              }
              </div>
            </div>
          </div>
          {/* MainPage */}
          <div className="w-[70%]">
            <div class="sliderwrapper">
              <span id="sliderRight" class="arrow right">
                <FaAngleRight/>
              </span>
              <span id="sliderLeft" class="arrow left">
                <FaAngleLeft/>
              </span>
                <div class="slider">
                {
                  propDetail.gallery.map((galImg,index)=>(
                    <div class="slideritem">
                      <img onLoad={myjs} src={galImg.link} alt="GalleryImage" />
                    </div>
                  ))
                }
                </div>
            </div>
            <div className='py-[20px]'>
              <Link to='/' className='text-[#00b0ff] text-sm'>خانه</Link>
              <GoTriangleLeft size={18} className='inline'/>
              <Link to='/Apps' className='text-[#00b0ff] text-sm'>برنامه ها</Link>
              <GoTriangleLeft size={18} className='inline'/>
              <a href='#/details/#catMovies' className='text-[#00b0ff] text-sm'>عکس و فیلم</a>
            </div>
            <div className='allAppDescription text-[12px] leading-[27px]'>
              <p className=''>
              به لطف پیشرفت‌های حاصل شده در زمینه تکنولوژی، اکنون دنبال کردن محصولات دنیای سرگرمی از جمله فیلم و سریال از همیشه ساده‌تر شده است. در گذشته برای لذت بردن از تماشای فیلم‌ها باید به سینما می‌رفتیم، اما کم کم پای VHS و سپس CD و DVD به پروسه تماشای فیلم‌ها باز و به کمک آن‌ها امکان تماشای آثار سینمایی در خانه فراهم شد. با این حال، چندین سال است که تب و تاب استریم آنلاین فیلم و سریال به شدت زیاد شده و با توجه به ضریب نفوذ خوب اینترنت پرسرعت، می‌توان بدون دردسر به صورت آنلاین آثار موردعلاقه را تماشا کرد. فیلیمو یک پلتفرم پخش آنلاین فیلم و سریال یا VOD در ایران است که با نقاط قوت فراوانی که در خود جای داده، یک انتخاب بسیار خوب برای سپری کردن اوقات فراغت به شمار می‌آید.
              </p>

              <h2 className='my-14 font-bold text-xl'>جعبه‌ای پر از فیلم و سریال به اسم فیلیمو</h2>
              <p className='mb-14'>
                همان‌طور که گفتیم، فیلیمو یک مرجع برای تماشای فیلم و سریال به صورت آنلاین است. اصطلاحا به این گونه از سرویس‌ها VOD گفته می‌شود. فیلیمو یکی از نام‌های قدیمی و آشنا در این زمینه است که طی سال‌ها فعالیت خود، توانسته کتابخانه‌ای عظیم از فیلم‌ها و سریال‌های مختلف را در دسترس مخاطبان قرار دهد. با تهیه اشتراک فیلیمو، شما می‌توانید به بیش از ۸۵ هزار فیلم و اپیزود از سریال‌های مختلف دسترسی داشته باشید و هر زمان که خواستید، آن‌ها را تماشا کنید.
              </p>
              <p>
                به طور مثال، شما می‌توانید تماشای جدیدترین آثار سینمای هالیوود مثل فیلم‌های مارول (Marvel) را به وسیله فیلیمو تجربه کنید. فیلم‌های اکشن، درام، ماجرایی، ترسناک و کمدی، همگی در کتابخانه فیلیمو جای گرفته‌اند و این شما هستید که اثر مدنظر خود را برای تماشا انتخاب می‌کنید. دامنه کشورهایی که از سینمای آن‌ها فیلم‌هایی روی فیلیمو قرار گرفته بسیار بالاست و از ایران گرفته تا هند و آمریکا و شرق آسیا، از هر کشور آثار شاخص و جذابی برای شما دست‌چین شده است. دامنه فیلم‌ها و سریال‌های موجود بر روی فیلیمو روزانه گسترده‌تر نیز می‌شود و سرعت این پلتفرم در انتشار محتواهای جدید بسیار بالاست، به همین خاطر همیشه محتوای جدیدی برای تماشا روی فیلیمو وجود خواهد داشت.
              </p>

              <h2 className='my-14 font-bold text-base'>سریال‌های تولید شده فیلیمو</h2>
              <p className='mb-14'>
                در زمینه سریال نیز فیلیمو بسیار قدرتمند عمل کرده و شما می‌توانید انواع و اقسام سریال‌ها که محصول کشورهای گوناگون هستند و در ژانرهای مختلفی طبقه‌بندی می‌شوند را در فیلیمو پیدا کنید. گستره فیلم و سریال‌های فیلیمو بسیار بالاست و طبقه‌بندی هیجان‌انگیز آن‌ها باعث شده تا کاربر بتواند از لحاظ محتوایی بهتر با آثار مختلف آشنا شود. همچنین، فیلیمو سریال‌های اختصاصی خود به مانند «جوکر»، «یاغی» و «جیران» را نیز پخش می‌کند که بسیار پرطرفدار هستند و اگر دوست دارید به تماشای این سریال‌ها بنشینید، باید فیلیمو را انتخاب کنید.
              </p>
              <p>
                برای استفاده از محتواهای منتشر شده بر روی فیلیمو، نیازی به دانلود آن‌ها نیست و می‌توانید به صورت آنلاین فیلم یا سریال مدنظر خود را ببینید. با این حال، امکان دانلود نیز وجود دارد تا پس از دانلود، بتوانید بدون استرس بابت افت کیفیت تصویر از تماشای فیلم یا سریالی که انتخاب کرده‌اید،‌ لذت ببرید. فیلیمو بر اساس سرعت اینترنت، کیفیت تصویر را برای شما انتخاب می‌کند و با نوسانات احتمالی اتصال، ممکن است شاهد بالا یا پایین رفتن کیفیت باشید که این به دلیل جلوگیری از قطع شدن کامل تصویر یا اصطلاحا هنگ کردن آن است.
              </p>

              <h2 className='my-14 font-bold text-base'>فیلم و سریال دوبله فارسی اختصاصی</h2>
              <p className='mb-14'>
                ویژگی‌های دیگری نیز در فیلیمو وجود دارند که به شدت هیجان‌انگیزند. از جمله این ویژگی‌ها می‌توان به تغییر صوت (مثلا از دوبله فارسی به صوت اصلی انگلیسی) یا فعال و غیرفعال کردن زیرنویس اشاره کرد. از سوی دیگر، امکان قرار دادن نظر برای آثار مختلف نیز وجود دارد و به این ترتیب شما می‌توانید دیدگاه‌های خود راجع به آثار مختلف را با دیگر کاربران فیلیمو به اشتراک بگذارید و به آن‌ها در تصمیم‌گیری برای تماشا یا عدم تماشای آثار کمک کنید.
              </p>
              <p>
                صفحه هر فیلم در فیلیمو حاوی اطلاعات جالبی است که می‌تواند به شما در تصمیم‌گیری برای تماشای آن اثر کمک زیادی کند. خلاصه داستان، بازیگران و کارگردان اثر از جمله اطلاعات قرار گرفته در صفحه هر فیلم یا سریال است. سال ساخت و ژانر هر اثر نیز مشخص است و حتی می‌توانید یک پیش نمایش یا تریلر از هر اثر را نیز تماشا کنید. همچنین در پایین صفحه هر اثر نیز می‌توانید پیشنهادهای فیلیمو به شما برای فیلم یا سریال بعدی که تماشا می‌کنید را نیز مشاهده نمایید که خود یک امکان جالب دیگر است و می‌تواند کمک حال شما در پیدا کردن اثر بعدی برای تماشا باشد.
              </p>

              <h2 className='my-14 font-bold text-lg'>فیلیمو کودک و سینمای آنلاین فیلیمو</h2>
              <p className='mb-14'>
                فیلیمو کودک نام یکی از بخش‌های جالب فیلیمو است که در آن محتواهای مناسب کودکان جای گرفته. در واقع، به کمک این بخش شما می‌توانید به طور مستقیم به کارتون‌ها و انیمیشن‌ها و دیگر محتواهای مناسب برای کودکان دسترسی داشته باشید. دسته‌بندی‌های فیلیمو کودک نیز جالب است و شامل مواردی چون شخصیت‌های محبوب یا دسته‌بندی بر اساس ژانر می‌شود.
              </p>
              <p className='mb-14'>
                دیگر ویژگی‌ جالب فیلیمو، بخش سینمای آنلاین آن است که به وسیله آن‌، فیلم‌های روز سینمای ایران را می‌توانید به صورت اکران آنلاین تماشا کنید. اکران آنلاین یعنی چه؟ در واقع، شما با تهیه یک بلیت، می‌توانید به مدت ۸ ساعت فیلمی را که بلیت آن را تهیه کرده‌اید، به همراه دوستان یا اعضای خانواده خود، تماشا کنید. این یک قابلیت خوب برای افراد علاقه‌مند به فیلم‌های روز سینمای ایران به شمار می‌رود تا بتوانند بدون نیاز به مراجعه به سینما، اثر مد نظر خود را ببینند.
              </p>
              <p>
                اگر از جمله افرادی هستید که به تماشای فیلم و سریال علاقه‌ دارند، فیلیمو می‌تواند یک همراه همیشگی برای شما باشد که با نصب اپلیکیشن آن از مایکت، دروازه ورود به دنیای فیلم و سریال همواره روی گوشی شماست.
              </p>

              <h2 className='my-14 font-bold'>ویژگی‌های اصلی فیلیمو:</h2>
              <p className='mb-14'>
                . دسترسی به چندین و چند هزار فیلم و سریال مختلف
              </p>
              <p className='mb-14'>
                . گوناگونی و تنوع بالای آثار
              </p>
              <p className='mb-14'>
                . به‌روز بودن و انتشار سریع محتواهای جدید
              </p>
              <p className='mb-14'>
                . امکان دانلود اثر و تماشای آفلاین آن
              </p>
              <p className='mb-14'>
                . امکان قرار دادن نظر برای آثار
              </p>
              <p className='mb-14'>
                . وجود بخش مخصوص به کودک
              </p>
              <p className='mb-14'>
                . سینمای آنلاین برای اکران آنلاین فیلم‌های ایرانی جدید
              </p>
              <p className='mb-14'>
                تغییرات در نسخه جدید
              </p>
              <p className='mb-14'>
                بهبود عملکرد              
              </p>
            </div>
            <div className='rateings'>

            </div>
          </div>
        </section>
      </article>
    </>
  )
}

export default Main;

