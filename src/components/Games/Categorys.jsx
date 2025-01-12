// import '../../App.css';
// import { getJson, postJson, deleteJson } from './fetch';

// import { Link } from "react-router-dom";
import Category from "./Category";

let cats=[
  {catTitle:"بهترین بازی‌ های اندروید",
   catLink:"#/Games/#AllBest",
   catApps:[
    {id:1,appTitle:"Clash of Clans",imgLink:"Games/ClashofClans.webp",desc:"کلش اف کلنز",appLink:"#/Games/#clash"},
    {id:1,appTitle:"Clash of Clans",imgLink:"Games/ClashofClans.webp",desc:"کلش اف کلنز",appLink:"#/Games/#clash"},
    {id:1,appTitle:"Clash of Clans",imgLink:"Games/ClashofClans.webp",desc:"کلش اف کلنز",appLink:"#/Games/#clash"},
    {id:1,appTitle:"Clash of Clans",imgLink:"Games/ClashofClans.webp",desc:"کلش اف کلنز",appLink:"#/Games/#clash"},
    {id:1,appTitle:"Clash of Clans",imgLink:"Games/ClashofClans.webp",desc:"کلش اف کلنز",appLink:"#/Games/#clash"},
    {id:1,appTitle:"Clash of Clans",imgLink:"Games/ClashofClans.webp",desc:"کلش اف کلنز",appLink:"#/Games/#clash"},
    {id:1,appTitle:"Clash of Clans",imgLink:"Games/ClashofClans.webp",desc:"کلش اف کلنز",appLink:"#/Games/#clash"},
  ]},
  {catTitle:"بهترین بازی‌ های ایرانی",
   catLink:"#/Games/#AllIran",
   catApps:[
    {id:2,appTitle:"شب های مافیا (آنلاین و صوتی)",imgLink:"Games/Mafia.webp",desc:"تفننی",appLink:"#/Games/#mafia"},
    {id:2,appTitle:"شب های مافیا (آنلاین و صوتی)",imgLink:"Games/Mafia.webp",desc:"تفننی",appLink:"#/Games/#mafia"},
    {id:2,appTitle:"شب های مافیا (آنلاین و صوتی)",imgLink:"Games/Mafia.webp",desc:"تفننی",appLink:"#/Games/#mafia"},
    {id:2,appTitle:"شب های مافیا (آنلاین و صوتی)",imgLink:"Games/Mafia.webp",desc:"تفننی",appLink:"#/Games/#mafia"},
    {id:2,appTitle:"شب های مافیا (آنلاین و صوتی)",imgLink:"Games/Mafia.webp",desc:"تفننی",appLink:"#/Games/#mafia"},
    {id:2,appTitle:"شب های مافیا (آنلاین و صوتی)",imgLink:"Games/Mafia.webp",desc:"تفننی",appLink:"#/Games/#mafia"},
    {id:2,appTitle:"شب های مافیا (آنلاین و صوتی)",imgLink:"Games/Mafia.webp",desc:"تفننی",appLink:"#/Games/#mafia"},
  ]},
  {catTitle:"بهترین بازی‌ های آنلاین",
   catLink:"#/Games/#AllOnline",
   catApps:[
    {id:3,appTitle:"Quiz of Kings (بازی آنلاین)",imgLink:"Games/QuizofKings.webp",desc:"رقابت کن و سرگرم شو",appLink:"#/Games/#QOK"},
    {id:3,appTitle:"Quiz of Kings (بازی آنلاین)",imgLink:"Games/QuizofKings.webp",desc:"رقابت کن و سرگرم شو",appLink:"#/Games/#QOK"},
    {id:3,appTitle:"Quiz of Kings (بازی آنلاین)",imgLink:"Games/QuizofKings.webp",desc:"رقابت کن و سرگرم شو",appLink:"#/Games/#QOK"},
    {id:3,appTitle:"Quiz of Kings (بازی آنلاین)",imgLink:"Games/QuizofKings.webp",desc:"رقابت کن و سرگرم شو",appLink:"#/Games/#QOK"},
    {id:3,appTitle:"Quiz of Kings (بازی آنلاین)",imgLink:"Games/QuizofKings.webp",desc:"رقابت کن و سرگرم شو",appLink:"#/Games/#QOK"},
    {id:3,appTitle:"Quiz of Kings (بازی آنلاین)",imgLink:"Games/QuizofKings.webp",desc:"رقابت کن و سرگرم شو",appLink:"#/Games/#QOK"},
    {id:3,appTitle:"Quiz of Kings (بازی آنلاین)",imgLink:"Games/QuizofKings.webp",desc:"رقابت کن و سرگرم شو",appLink:"#/Games/#QOK"},
  ]},
  {catTitle:"بهترین بازی‌ های آفلاین",
   catLink:"#/Games/#AllOffline",
   catApps:[
    {id:4,appTitle:"Subway Surfers",imgLink:"Games/SubwaySurfers.webp",desc:"ساب وی سرف | subway surf",appLink:"#/Games/#SubwaySurfers"},
    {id:4,appTitle:"Subway Surfers",imgLink:"Games/SubwaySurfers.webp",desc:"ساب وی سرف | subway surf",appLink:"#/Games/#SubwaySurfers"},
    {id:4,appTitle:"Subway Surfers",imgLink:"Games/SubwaySurfers.webp",desc:"ساب وی سرف | subway surf",appLink:"#/Games/#SubwaySurfers"},
    {id:4,appTitle:"Subway Surfers",imgLink:"Games/SubwaySurfers.webp",desc:"ساب وی سرف | subway surf",appLink:"#/Games/#SubwaySurfers"},
    {id:4,appTitle:"Subway Surfers",imgLink:"Games/SubwaySurfers.webp",desc:"ساب وی سرف | subway surf",appLink:"#/Games/#SubwaySurfers"},
    {id:4,appTitle:"Subway Surfers",imgLink:"Games/SubwaySurfers.webp",desc:"ساب وی سرف | subway surf",appLink:"#/Games/#SubwaySurfers"},
    {id:4,appTitle:"Subway Surfers",imgLink:"Games/SubwaySurfers.webp",desc:"ساب وی سرف | subway surf",appLink:"#/Games/#SubwaySurfers"},
  ]},
  {catTitle:"بهترین بازی های استراتژیک اندروید",
   catLink:"#/Games/#AllStrategy",
   catApps:[
    {id:5,appTitle:"پسرخوانده - مبارزه آنلاین با مافیا",imgLink:"Games/StepBoy.webp",desc:"نبرد مافیا و شهروند",appLink:"#/Games/#StepBoy"},
    {id:5,appTitle:"پسرخوانده - مبارزه آنلاین با مافیا",imgLink:"Games/StepBoy.webp",desc:"نبرد مافیا و شهروند",appLink:"#/Games/#StepBoy"},
    {id:5,appTitle:"پسرخوانده - مبارزه آنلاین با مافیا",imgLink:"Games/StepBoy.webp",desc:"نبرد مافیا و شهروند",appLink:"#/Games/#StepBoy"},
    {id:5,appTitle:"پسرخوانده - مبارزه آنلاین با مافیا",imgLink:"Games/StepBoy.webp",desc:"نبرد مافیا و شهروند",appLink:"#/Games/#StepBoy"},
    {id:5,appTitle:"پسرخوانده - مبارزه آنلاین با مافیا",imgLink:"Games/StepBoy.webp",desc:"نبرد مافیا و شهروند",appLink:"#/Games/#StepBoy"},
    {id:5,appTitle:"پسرخوانده - مبارزه آنلاین با مافیا",imgLink:"Games/StepBoy.webp",desc:"نبرد مافیا و شهروند",appLink:"#/Games/#StepBoy"},
    {id:5,appTitle:"پسرخوانده - مبارزه آنلاین با مافیا",imgLink:"Games/StepBoy.webp",desc:"نبرد مافیا و شهروند",appLink:"#/Games/#StepBoy"},
  ]},
  {catTitle:"بهترین بازی های فکری اندروید",
   catLink:"#/Games/#AllPuzzle",
   catApps:[
    {id:6,appTitle:"Prison Break: Stick Story",imgLink:"Games/PrisonBreak.webp",desc:"فرار از زندان: ماجراجویی استیکمن",appLink:"#/Games/#PrisonBreak"},
    {id:6,appTitle:"Prison Break: Stick Story",imgLink:"Games/PrisonBreak.webp",desc:"فرار از زندان: ماجراجویی استیکمن",appLink:"#/Games/#PrisonBreak"},
    {id:6,appTitle:"Prison Break: Stick Story",imgLink:"Games/PrisonBreak.webp",desc:"فرار از زندان: ماجراجویی استیکمن",appLink:"#/Games/#PrisonBreak"},
    {id:6,appTitle:"Prison Break: Stick Story",imgLink:"Games/PrisonBreak.webp",desc:"فرار از زندان: ماجراجویی استیکمن",appLink:"#/Games/#PrisonBreak"},
    {id:6,appTitle:"Prison Break: Stick Story",imgLink:"Games/PrisonBreak.webp",desc:"فرار از زندان: ماجراجویی استیکمن",appLink:"#/Games/#PrisonBreak"},
    {id:6,appTitle:"Prison Break: Stick Story",imgLink:"Games/PrisonBreak.webp",desc:"فرار از زندان: ماجراجویی استیکمن",appLink:"#/Games/#PrisonBreak"},
    {id:6,appTitle:"Prison Break: Stick Story",imgLink:"Games/PrisonBreak.webp",desc:"فرار از زندان: ماجراجویی استیکمن",appLink:"#/Games/#PrisonBreak"},
  ]},
  {catTitle:"مبارزهٔ کارتی",
   catLink:"#/Games/#AllCardBattle",
   catApps:[
    {id:7,appTitle:"فروت‌‌کرفت II",imgLink:"Games/FruitCraft.webp",desc:"تفننی",appLink:"#/Games/#FruitCraft"},
    {id:7,appTitle:"فروت‌‌کرفت II",imgLink:"Games/FruitCraft.webp",desc:"تفننی",appLink:"#/Games/#FruitCraft"},
    {id:7,appTitle:"فروت‌‌کرفت II",imgLink:"Games/FruitCraft.webp",desc:"تفننی",appLink:"#/Games/#FruitCraft"},
    {id:7,appTitle:"فروت‌‌کرفت II",imgLink:"Games/FruitCraft.webp",desc:"تفننی",appLink:"#/Games/#FruitCraft"},
    {id:7,appTitle:"فروت‌‌کرفت II",imgLink:"Games/FruitCraft.webp",desc:"تفننی",appLink:"#/Games/#FruitCraft"},
    {id:7,appTitle:"فروت‌‌کرفت II",imgLink:"Games/FruitCraft.webp",desc:"تفننی",appLink:"#/Games/#FruitCraft"},
    {id:7,appTitle:"فروت‌‌کرفت II",imgLink:"Games/FruitCraft.webp",desc:"تفننی",appLink:"#/Games/#FruitCraft"},
  ]},
]

function Categorys() {
  return (
    <>
      {
        cats.map((cat)=>(
          <Category props={cat}/>
        ))
      }
    </>
  );
}

export default Categorys;

