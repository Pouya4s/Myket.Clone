// import '../../App.css';
// import { getJson, postJson, deleteJson } from './fetch';

// import { Link } from "react-router-dom";
import CategoryBox from "./CategoryBox";

let catBoxes=[
  {
    id:1,
    title:"استراتژی",
    link:"#/Games/#AllStrategy",
    iconLink:"Games/iconCatStrategy.png",
    imgLink:"Games/catStrategy.png",
    desc:"به طور کلی بازی های دسته بندی استراتژی توانایی مدیریت و برنامه ریزی شما را می سنجند پس اگر عاشق حل کردن معما، برنامه ریزی و توسعه هستید، بازی های استراتژی بهترین انتخاب برای شما هستند."
  },
  {
    id:2,
    title:"اکشن",
    link:"#/Games/#AllAction",
    iconLink:"Games/iconCatAction.png",
    imgLink:"Games/catAction.png",
    desc:"تعداد زیادی از بازی های محبوب موبایل در این دسته قرار می گیرند و به طور کلی هر بازی ای که بتواند در شما هیجان ایجاد کند، ضربان قلبتان را بالا ببرد، باعث ترشح آدرنالین در خون بشود در این دسته قرار می گیرد."
  },
  {
    id:3,
    title:"تفننی",
    link:"#/Games/#AllCasual",
    iconLink:"Games/iconCatCasual.png",
    imgLink:"Games/catCasual.png",
    desc:"بازی های تفننی سرگرم کننده و بی‌دردسر هستند، معمولاً مراحل کوتاهی دارند که سختی آن ها به سرعت افزایش پیدا می کند و کنترل های ساده و ابتدایی دارند تا بازیکن سریعاً با آن ارتباط بگیرد."
  },
  {
    id:4,
    title:"رانندگی",
    link:"#/Games/#AllCar",
    iconLink:"Games/iconCatCar.png",
    imgLink:"Games/catCar.png",
    desc:"سرعت، هیجان و آدرنالین سه چیزی هستند که خیلی از ما آدم ها را عاشق رانندگی و مسابقات اتومبیل رانی کرده اند. بازی های رانندگی ساخته شده‌اند تا این هیجان و حس خوب را به بازیکن منتقل کنند."
  },
  {
    id:5,
    title:"شبیه سازی",
    link:"#/Games/#AllSimulation",
    iconLink:"Games/iconCatSimulation.png",
    imgLink:"Games/catSimulation.png",
    desc:"با استفاده از بازی های این دسته می توانید مشاغل و حرفه های مختلف را در یک زندگی مجازی تجربه کنید. مثلاً خودتان را جای یک خلبان هلیکوپتر یا هواپیما های مسافربری یا یک سرآشپز حرفه ای که وقت سر خاراندن هم ندارد بگذارید."
  },
  {
    id:6,
    title:"فکری",
    link:"#/Games/#AllPuzzle",
    iconLink:"Games/iconCatPuzzle.png",
    imgLink:"Games/catPuzzle.png",
    desc:"هر بازی‌ای که تفکر شما را درگیر کند می‌تواند یک بازی فکری باشد؛ از یک چیستان گرفته تا بازی‌هایی مثل شطرنج، سودوکو یا پازل‌هایی که تکه‌های آن را کنار هم می‌چینیم و بازی های پیچیده تری که در این قسمت می توانید پیدا کنید."
  },
  {
    id:7,
    title:"کلمات و دانستنی ها",
    link:"#/Games/#AllWord",
    iconLink:"Games/iconCatWord.png",
    imgLink:"Games/catWord.png",
    desc:"به طور کلی بازی کلمه ای یا word game به هر بازی یا مسابقه ای گفته می شود که مهارت شما را در استفاده از واژه ها، ساختار آن ها و حدس زدن کلمات و اصطلاحات مختلف بسنجد."
  },
  {
    id:8,
    title:"کودک",
    link:"#/Games/#AllKids",
    iconLink:"Games/iconCatKids.png",
    imgLink:"Games/catKids.png",
    desc:"اگر در گذشته کتاب ها تنها راه یادگیری ما بودند، حالا باید بازی ها را هم به آن اضافه کنیم؛ مخصوصاً برای کودکان که معمولاً بیش از راه های رسمی آموزش مبتنی بر بازی را دوست دارند."
  },
  {
    id:9,
    title:"ماجراجویی",
    link:"#/Games/#AllAdventure",
    iconLink:"Games/iconCatAdventure.png",
    imgLink:"Games/catAdventure.png",
    desc:"در بازی های ماجراجویی معمولاً در نقش یک قهرمان قرار می گیرید و باید در مسیری که بازی برای شما مشخص می کند، حرکت کنید و چالش ها را یکی یکی از سر راه بردارید. این نوع از بازی ها معمولاً مراحل مختلفی دارند که سطح سختی آن ها به مرور افزایش پیدا می کند."
  },
  {
    id:10,
    title:"ورزشی",
    link:"#/Games/#AllSports",
    iconLink:"Games/iconCatSports.png",
    imgLink:"Games/catSports.png",
    desc:"هر بازی‌ ای که در مورد یکی از ورزش‌های موجود در دنیا باشد، در این دسته قرار می‌گیرد. بازی های ورزشی ساخته شده‌اند تا بتوانیم بدون حرکت فیزیکی از ورزش مورد علاقه‌مان لذت ببریم!"
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

