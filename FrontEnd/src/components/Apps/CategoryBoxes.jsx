// import '../../App.css';
// import { getJson, postJson, deleteJson } from './fetch';

// import { Link } from "react-router-dom";
import CategoryBox from "./CategoryBox";

let catBoxes=[
  {
    id:1,
    title:"آب و هوا",
    link:"#/Apps/#AllWeather",
    iconLink:"Apps/iconCatWeather.png",
    imgLink:"Apps/catWeather.png",
    desc:"با استفاده از اپلیکیشن‌های این دسته می توانیم مشخصه هایی از شرایط جوی مثل دما، میزان رطوبت نسبی، سرعت و جریان باد، احتمال بارندگی، فشار هوا و امکان وقوع سیل، طوفان، و... را در تمام با دقت بالایی در ۲۴ ساعت شبانه روز و حتی برای چند روز بعد پیش بینی کنیم."
  },
  {
    id:2,
    title:"ابزار های کاربردی",
    link:"#/Apps/#AllProductivity",
    iconLink:"Apps/iconCatProductivity.png",
    imgLink:"Apps/catProductivity.png",
    desc:"اپلیکیشن‌های کاربردی استفاده از امکانات مختلف گوشی شما را ساده‌تر می‌کنند. همچنین می توانید از آن‌ها برای مدیریت این امکانات استفاده کنید. اگر به اپلیکیشنی برای مدیریت حجم اینترنت مصرفی، استفاده از چراغ قوه گوشی و یا کشتن ویروس‌ها و بدافزارها نیاز دارید، سری به این دسته بندی بزنید."
  },
  {
    id:3,
    title:"اخبار",
    link:"#/Apps/#AllNews",
    iconLink:"Apps/iconCatNews.png",
    imgLink:"Apps/catNews.png",
    desc:"فرقی نمی کند که پیر باشید یا جوان، فرقی نمی کند چه شغلی دارید، زن یا مرد بودن هم خیلی مهم نیست؛ با استفاده از اپلیکیشن‌های این دسته در جریان آخرین اخبار درباره‌ی موضوعاتی که علاقه دارید قرار می‌گیرید."
  },
  {
    id:4,
    title:"آشپزی و رستوران",
    link:"#/Apps/#AllCookery",
    iconLink:"Apps/iconCatCookery.png",
    imgLink:"Apps/catCookery.png",
    desc:"اگر به غذا و آشپزی علاقه دارید یا قصد دارید دستور پخت یک غذای جدید را یاد بگیرید، نظرات افراد مختلف درباره‌ی رستوران موردنظرتان را بدانید یا به‌صورت آنلاین غذا سفارش بدهید، حتماً سری به اپلیکیشن‌های این دسته بزنید."
  },
  {
    id:5,
    title:"امور مالی",
    link:"#/Apps/#AllBank",
    iconLink:"Apps/iconCatBank.png",
    imgLink:"Apps/catBank.png",
    desc:"فرقی نمی کند که به یک حسابدار شخصی برای مدیریت هزینه‌ها احتیاج دارید، می خواهید اپلیکیشن موبایل بانک موردنظرتان را نصب کنید یا با یکی از اپلیکیشن های پرداخت پول کارت به کارت کنید، همه ی این ها را می توانید در دسته بندی مالی مایکت پیدا کنید."
  },
  {
    id:6,
    title:"آموزشی",
    link:"#/Apps/#AllEducation",
    iconLink:"Apps/iconCatEducation.png",
    imgLink:"Apps/catEducation.png",
    desc:"امروزه اپلیکیشن های آموزشی به عنوان راهی کم هزینه و آسان برای یادگیری به حساب می آیند و دسترسی به آموزش سطح بالا و حرفه ای را برای ما راحت تر کرده اند. اگر پیش از این کلاس درس تنها محل یادگیری بود، باید وب سایت ها و برنامه های اندرویدی را هم به آن اضافه کنیم."
  },
  {
    id:7,
    title:"پزشکی و سلامت",
    link:"#/Apps/#AllMedical",
    iconLink:"Apps/iconCatMedical.png",
    imgLink:"Apps/catMedical.png",
    desc:"امروزه با پیشرفت علم پزشکی و همه‌گیر شدن موبایل‌های هوشمند، اپلیکیشن‌های سلامتی می‌توانند به شما در حفظ سلامتی، داشتن تغذیه و بدنی سالم‌تر کمک کرده و دسترسی به مراکز درمانی و اطلاعات پایه‌ی پزشکی را راحت‌تر کنند."
  },
  {
    id:8,
    title:"تناسب اندام",
    link:"#/Apps/#AllHealth",
    iconLink:"Apps/iconCatHealth.png",
    imgLink:"Apps/catHealth.png",
    desc:"در این دسته می‌توانید اپلیکیشن‌های کالری شمار را پیدا کنید که رژیم‌های غذایی سالم را در اختیارتان گذاشته و کمک می‌کنند تا میزان کالری مصرفی روزانه‌ی خود را کنترل کنید. هم چنین با کمک از اپلیکیشن‌های ورزشی می‌توانید بدنی سالم و ورزیده داشته باشید."
  },
  {
    id:9,
    title:"خرید",
    link:"#/Apps/#AllHealth",
    iconLink:"Apps/iconCatHealth.png",
    imgLink:"Apps/catHealth.png",
    desc:"امروزه چیزی نزدیک به نیمی از خرید های اینترنتی توسط موبایل انجام می شود و خرید آنلاین بیش از این که یک انتخاب لوکس باشد، تبدیل به انتخابی شده که راحت تر و بی دردسر از خرید حضوری است. با استفاده از اپلیکیشن‌های این دسته می توانید یک خرید آنلاین سریع و بی دردسر داشته باشید."
  },
  {
    id:10,
    title:"سرگرمی",
    link:"#/Apps/#AllEntertainment",
    iconLink:"Apps/iconCatEntertainment.png",
    imgLink:"Apps/catEntertainment.png",
    desc:"احتمالاً شما هم وقتی با یک موقعیت کسل کننده مواجه می شوید اولین کاری که میکنید درآوردن گوشی از جیب و اسکرول کردن اینستاگرام و توییتر یا پخش کردن آهنگی برای گوش کردن و سریالی برای تماشا کردن است. هر کدام از ما راهی برای این کسالت کلافه کننده داریم ولی مقصد مشترک اکثرمان گوشی هوشمندمان است."
  },
  {
    id:11,
    title:"سیر و سفر",
    link:"#/Apps/#AllTravel",
    iconLink:"Apps/iconCatTravel.png",
    imgLink:"Apps/catTravel.png",
    desc:"اگر اهل سفر باشید، مسلماً با چالش هایی مثل رزرو هتل، خرید بلیت اتوبوس و قطار و هواپیما، مسیریابی در شهری که هیچ شناختی از آن ندارید و… روبرو شده اید. اپلیکیشن های این دسته می توانند برای هر کدام از این چالش ها راه حلی سریع و قابل اطمینان در اختیارتان بگذارند."
  },
  {
    id:12,
    title:"شبکه های اجتماعی",
    link:"#/Apps/#AllSocial",
    iconLink:"Apps/iconCatSocial.png",
    imgLink:"Apps/catSocial.png",
    desc:"با استفاده از اپلیکیشن‌های این دسته می‌توانید پیام‌رسان یا رسانه‌ی اجتماعی موردعلاقه‌تان را دانلود و نصب کنید و به ابزارهایی برای مدیریت بهتر صفحه‌ی اینستاگرام یا کانال تلگرامی‌تان دسترسی داشته باشید."
  },
  {
    id:13,
    title:"شخصی سازی",
    link:"#/Apps/#AllCustomize",
    iconLink:"Apps/iconCatCustomize.png",
    imgLink:"Apps/catCustomize.png",
    desc:"با استفاده از اپلیکیشن های دسته ی شخصی سازی می توانید کیبورد، منوها، تم گوشی، تصویر پس زمینه، تم صفحه ی قفل گوشی و بسیاری از ویژگی های تصویری دستگاه اندرویدیتان را تغییر داده و ظاهری جدید به آن ببخشید."
  },
  {
    id:14,
    title:"صوت و موسیقی",
    link:"#/Apps/#AllMusic",
    iconLink:"Apps/iconCatMusic.png",
    imgLink:"Apps/catMusic.png",
    desc:"اولین گزینه‌ی اکثر ما برای گوش کردن به موسیقی گوشی هوشمندان است. با استفاده از اپلیکیشن‌های این دسته می‌توانید به سرویس‌های آنلاین پخش موسیقی دسترسی داشته باشید و یا یک موزیک پلیر جدید با امکانات بیشتر برای گوشی خود دانلود کنید."
  },
  {
    id:15,
    title:"عکس و فیلم",
    link:"#/Apps/#AllMovie",
    iconLink:"Apps/iconCatMovie.png",
    imgLink:"Apps/catMovie.png",
    desc:"همه‌گیر شدن رسانه‌های اجتماعی بین آدم‌ها باعث شده تا سر و کارمان با فیلم و عکس هم بیشتر شود. با استفاده از اپلیکیشن‌های این دسته می‌توانید عکس‌ها را مطابق سلیقه خودتان ویرایش کنید، تصاویر جدید بسازید و یا با بهم چسباندن عکس‌ها و ویدیوهای مختلف، ویدیوی خاص خودتان را بسازید."
  },
  {
    id:16,
    title:"کتاب",
    link:"#/Apps/#AllBook",
    iconLink:"Apps/iconCatBook.png",
    imgLink:"Apps/catBook.png",
    desc:"برای خیلی‌ها هنوز هم منبعی بهتر از کتاب برای مطالعه و یادگرفتن چیزهای جدید وجود ندارد. از طرفی کتاب الکترونیکی دیگر یک مفهوم لوکس و دست نیافتنی نیست. با استفاده از اپلیکیشن‌های این دسته می‌توانید با هزینه‌ی کمتر به انبوهی از کتاب‌های دیجیتال و منابع مطالعاتی دسترسی داشته باشید."
  },
  {
    id:17,
    title:"کسب و کار",
    link:"#/Apps/#AllBusiness",
    iconLink:"Apps/iconCatBusiness.png",
    imgLink:"Apps/catBusiness.png",
    desc:"دنیای امروز کسب و کار با علوم کامپیوتر و فناوری اطلاعات گره خورده فعالیت‌های اقتصادی بدون کمک سیستم های دیجیتالی و کامپیوترها رسماً فلج می شوند. برای همین تسلط به ابزار دیجیتال و برنامه ها و نرم افزارهای کامپیوتری پایه برای کسب درآمد و فعالیت های تجاری ضروری هستند."
  },
  {
    id:18,
    title:"ورزشی",
    link:"#/Apps/#AllSports",
    iconLink:"Apps/iconCatSports.png",
    imgLink:"Apps/catSports.png",
    desc:"فرقی نمی‌کند به چه ورزش یا تیمی علاقه دارید، پیگیری اخبار دنیای ورزش و تماشای رقابت های ورزشی پای ثابت روزمره ی خیلی از ماست و در صدر آن هم فوتبال قرار دارد. با استفاده از اپلیکیشن‌های این دسته در جریان آخرین اخبار ورزشی قرار گرفته و یا برای انجام تمرینات ورزشی یک مربی مجازی همراه خود داشته باشید."
  },
]

function CategoryBoxes() {
  return (
    <div className="containerCat py-5 flex flex-wrap justify-between">
      {
        catBoxes.map((catBox)=>(
          <CategoryBox props={catBox}/>
        ))
      }
    </div>
  );
}

export default CategoryBoxes;

