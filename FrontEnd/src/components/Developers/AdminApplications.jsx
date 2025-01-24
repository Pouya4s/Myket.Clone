// import '../../App.css';
// import { getJson, postJson, deleteJson } from './fetch';

import { MdEdit } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { useState, useEffect } from "react";
import { TiTick } from "react-icons/ti";
import { getJson, postJson, deleteJson} from '../../fetch'
function AdminApplications() {

  // let apps=[
  //   {
  //     id:1,
  //     name: "فیلیمو",
  //     catchTitle: "دنیایی از فیلم و سریال روی گوشی شما",
  //     downloadsCount: 359,
  //     sizeInMBs: 160,
  //     downloadLink: "https://myket.ir/dl?packageName=com.aparat.filimo",
  //     image: "https://myket.ir/app-icon/c0575261-545e-408d-ba75-3356ecdc1294.png",
  //     galery: [
  //       "https://assets.myket.ir/screenshots/xlarge/com.aparat.filimo/ff4a2d61-22c3-4ffd-9913-e093488bf7c8.png",
  //       "https://assets.myket.ir/screenshots/xlarge/com.aparat.filimo/28cdef32-f44f-4ead-a29f-28abf7008afe.png",
  //       "https://assets.myket.ir/screenshots/xlarge/com.aparat.filimo/89a71c61-f99f-4d08-9bc8-9d873134e575.png",
  //     ],
  //     isGame: false,
  //     description: "به لطف پیشرفت‌های حاصل شده در زمینه تکنولوژی، اکنون دنبال کردن محصولات دنیای سرگرمی از جمله فیلم و سریال از همیشه ساده‌تر شده است. در گذشته برای لذت بردن از تماشای فیلم‌ها باید به سینما می‌رفتیم، اما کم کم پای VHS و سپس CD و DVD به پروسه تماشای فیلم‌ها باز و به کمک آن‌ها امکان تماشای آثار سینمایی در خانه فراهم شد. با این حال، چندین سال است که تب و تاب استریم آنلاین فیلم و سریال به شدت زیاد شده و با توجه به ضریب نفوذ خوب اینترنت پرسرعت، می‌توان بدون دردسر به صورت آنلاین آثار موردعلاقه را تماشا کرد. فیلیمو یک پلتفرم پخش آنلاین فیلم و سریال یا VOD در ایران است که با نقاط قوت فراوانی که در خود جای داده، یک انتخاب بسیار خوب برای سپری کردن اوقات فراغت به شمار می‌آید.",
  //   },
  //   {
  //     id:2,
  //     name: "کلش آف کلنز",
  //     catchTitle: "بازی استراتژی محبوب",
  //     downloadsCount: 4790,
  //     sizeInMBs: 353,
  //     downloadLink: "https://myket.ir/dl?packageName=com.supercell.clashofclans",
  //     image: "https://myket.ir/app-icon/com.supercell.clashofclans_94d5ac80-f345-4a6d-9a46-eaab19de20d0.png",
  //     galery: [
  //       "https://assets.myket.ir/screenshots/xlarge/com.supercell.clashofclans/94ff16cd-f9f2-4f46-967d-d73fe0905211.png",
  //       "https://assets.myket.ir/screenshots/xlarge/com.supercell.clashofclans/d92ef56c-e1e6-446a-9f03-6b605c7b8a2f.png",
  //       "https://assets.myket.ir/screenshots/xlarge/com.supercell.clashofclans/5ecf845b-3882-4478-8948-4f228f21c048.png",
  //     ],
  //     isGame: true,
  //     description: "یک سری از بازی‌های موبایلی هستند که چنان تاریخ‌سازی کرده‌اند که اثر عملکرد خیره‌کننده آن‌ها تا سال‌ها راه‌ را برای دیگر بازی‌های موبایل هموار کرد. یکی از این بازی‌ها، کلش آف کلنز است که نقش مهمی در شکل‌گیری بازی‌های استراتژی آنلاین موبایلی داشت. این روزها تعداد زیادی از بازی‌های این سبک وجود دارند که می‌توانید بر اساس سلیقه خود از بین آن‌ها انتخاب کنید،‌ هنوز هم کلش آف کلنز محصول استودیوی فنلاندی سوپرسل با این که به نوعی یک پیشکسوت به حساب می‌آید، می‌تواند به شما نشان دهد که دود از کنده بلند می‌شود و دلیلی باشد برای این که روزانه ساعاتی از وقت خود را به تجربه این بازی روی گوشی اختصاص دهید.",
  //   },
  // ];

  const [isEdit,changeEdit]=useState(false);
  const [id,setID]=useState("");
  const [name,setName]=useState("");
  const [CTitle,setCTitle]=useState("");
  const [size,setSize]=useState("");
  const [DCount,setDCount]=useState("");
  const [isGame,setIsGame]=useState(false);
  const [DLink,setDLink]=useState("");
  const [image,setImage]=useState("");
  const [galery,setGalery]=useState('');
  const [desc,setDesc]=useState('');

  const [apps, setApps] = useState();
  useEffect(()=>{
    getApps();
  });
  function setEdit(rowE){
    
    changeEdit(true);
    setID(rowE.children[0].innerText);
    setName(rowE.children[1].innerText);
    setCTitle(rowE.children[2].innerText);
    setSize(rowE.children[3].innerText);
    setDCount(rowE.children[4].innerText);
    setIsGame(Number(rowE.children[5].firstElementChild.getAttribute("IG")));
    setDLink(rowE.children[6].innerText);
    setImage(rowE.children[7].innerText);
    let gal='';
    for (let i = 0 ; i < rowE.children[8].children.length ; i++) {
      gal=gal+rowE.children[8].children[i].innerText+"\n";
    }
    setGalery(gal);
    setDesc(rowE.children[9].innerText);
    
  }
  function getFormApp(withId = false)
  {
    let app = {
      name: document.querySelector('input[name=name]').value,
      catchTitle: document.querySelector('input[name=catchTitle]').value,
      downloadsCount: document.querySelector('input[name=downloadsCount]').value,
      sizeInMBs: document.querySelector('input[name=sizeInMBs]').value,
      downloadLink: document.querySelector('input[name=downloadLink]').value,
      image: document.querySelector('input[name=image]').value,
      galery: document.querySelector('textarea[name=galery]').value.split('\n').filter(t => t.trim() !== ''),
      description: document.querySelector('textarea[name=description]').value,
      isGame: document.querySelector('input[name=isGame]').checked,
    };
    if(withId)
      app.id = id;
    return app;
  }
  function notEdit(){
    changeEdit(false);
  }
  function handleAdd()
  {
    let app = getFormApp();
    addApp(app);
  }
  function handleEdit(){
    let app = getFormApp(true);
    editApp(app);
    notEdit();
  }
  function handleDelete(id){
    notEdit();
    deleteApp(id);
  }

  let output = (apps===undefined)? <p>Loading...</p>: <div className="w-full">
  {
    !isEdit?(
      <form className="text-center" onSubmit={(e)=>{e.preventDefault()}}>
        <h1 className="text-2xl pt-2 pb-5">اضافه کردن اپلیکیشن</h1>
        <table className="w-full">
          <tbody>
            <tr className="h-[50px]">
              <td>
                <label className="px-3">نام</label>
              </td>
              <td>
                <input name="name" type="text" required className="rounded px-2 py-1 text-[#222] w-full"/>
              </td>
              <td>
                <label className="px-3">شعار</label>
              </td>
              <td>
                <input name="catchTitle" type="text" required className="rounded px-2 py-1 text-[#222] w-full"/>
              </td>
            </tr>
            <tr className="h-[50px]">
              <td>
                <label className="px-3">تعداد دانلود</label>
              </td>
              <td>
                <input name="downloadsCount" type="text" className="rounded px-2 py-1 text-[#222] w-full"/>
              </td>
              <td>
                <label className="px-3">اندازه (mb)</label>
              </td>
              <td>
                <input name="sizeInMBs" type="number" required className="rounded px-2 py-1 text-[#222] w-full"/>
              </td>
            </tr>
            <tr className="h-[50px]">
              <td>
                <label className="px-3">لینک دانلود</label>
              </td>
              <td colSpan={3}>
                <input style={{direction:"ltr"}} name="downloadLink" type="link" required className="rounded px-2 py-1 text-[#222] w-full"/>
              </td>
            </tr>
            <tr className="h-[50px]">
              <td>
                <label className="px-3">لینک عکس</label>
              </td>
              <td colSpan={3}>
                <input style={{direction:"ltr"}} name="image" type="link" required className="rounded px-2 py-1 text-[#222] w-full"/>
              </td>
            </tr>
            <tr className="h-[135px]">
              <td>
                <label className="px-3">گالری</label>
              </td>
              <td colSpan={3}>
                <textarea style={{direction:"ltr"}} name="galery" required rows={4} className="mygal rounded px-2 py-1 text-[#222] w-full" placeholder=" هر
                  خط
                  یک
                  لینک..."/>
              </td>
            </tr>
            <tr className="h-[50px]">
              <td colSpan={4}>
                توضیحات
              </td>
            </tr>
            <tr className="h-[50px]">
              <td colSpan={4}>
                <textarea name="description" className="rounded px-2 py-1 text-[#222] w-full" rows={3}></textarea>
              </td>
            </tr>
            <tr className="h-[50px]">
              <td>
                <label className="px-3">بازی است؟</label>
              </td>
              <td className="text-right">
                <input name="isGame" type="checkbox" className="rounded px-2 py-1 w-[30px] h-[30px] text-[#222] cursor-pointer"/>
              </td>
              <td colSpan={2}>
              <button type="submit" onClick={()=>{handleAdd()}} className="bg-[#0d36ff] p-1.5 px-5 rounded-md mt-3 mx-2">اضافه کردن</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    ):(
      <form className="text-center" onSubmit={(e)=>{e.preventDefault()}}>
        <input type="hidden" value={id} />
        <h1 className="text-2xl pt-2 pb-5">ویرایش کردن اپلیکیشن</h1>
        <table className="w-full">
          <tbody>
            <tr className="h-[50px]">
              <td>
                <label className="px-3">نام</label>
              </td>
              <td>
                <input name="name" value={name} type="text" required className="rounded px-2 py-1 text-[#222] w-full" onChange={(e)=>{setName(e.target.value)}}/>
              </td>
              <td>
                <label className="px-3">شعار</label>
              </td>
              <td>
                <input name="catchTitle" value={CTitle} type="text" required className="rounded px-2 py-1 text-[#222] w-full" onChange={(e)=>{setCTitle(e.target.value)}}/>
              </td>
            </tr>
            <tr className="h-[50px]">
              <td>
                <label className="px-3">تعداد دانلود</label>
              </td>
              <td>
                <input style={{direction:"ltr"}} name="downloadsCount" value={DCount} type="text" className="rounded px-2 py-1 text-[#222] w-full" onChange={(e)=>{setDCount(e.target.value)}}/>
              </td>
              <td>
                <label className="px-3">اندازه (mb)</label>
              </td>
              <td>
                <input style={{direction:"ltr"}} name="sizeInMBs" value={size} type="number" required className="rounded px-2 py-1 text-[#222] w-full" onChange={(e)=>{setSize(e.target.value)}}/>
              </td>
            </tr>
            <tr className="h-[50px]">
              <td>
                <label className="px-3">لینک دانلود</label>
              </td>
              <td colSpan={3}>
                <input style={{direction:"ltr"}} value={DLink} name="downloadLink" type="link" required className="rounded px-2 py-1 text-[#222] w-full" onChange={(e)=>{setDLink(e.target.value)}}/>
              </td>
            </tr>
            <tr className="h-[50px]">
              <td>
                <label className="px-3">لینک عکس</label>
              </td>
              <td colSpan={3}>
                <input style={{direction:"ltr"}} value={image} name="image" type="link" required className="rounded px-2 py-1 text-[#222] w-full" onChange={(e)=>{setImage(e.target.value)}}/>
              </td>
            </tr>
            <tr className="h-[135px]">
              <td>
                <label className="px-3">گالری</label>
              </td>
              <td colSpan={3}>
                <textarea style={{direction:"ltr"}} value={galery} name="galery" required rows={4} className="mygal rounded px-2 py-1 text-[#222] w-full" placeholder=" هر
                  خط
                  یک
                  لینک..." onChange={(e)=>{setGalery(e.target.value)}}/>
              </td>
            </tr>
            <tr className="h-[50px]">
              <td colSpan={4}>
                توضیحات
              </td>
            </tr>
            <tr className="h-[50px]">
              <td colSpan={4}>
                <textarea name="description" value={desc} className="rounded px-2 py-1 text-[#222] w-full" rows={3} onChange={(e)=>{setDesc(e.target.value)}}></textarea>
              </td>
            </tr>
            <tr className="h-[50px]">
              <td>
                <label className="px-3">بازی است؟</label>
              </td>
              <td className="text-right">
                <input name="isGame" checked={isGame} type="checkbox" className="rounded px-2 py-1 w-[30px] h-[30px] text-[#222] cursor-pointer" onChange={(e)=>{setIsGame(e.target.checked)}}/>
              </td>
              <td>
                <button type="submit" onClick={()=>{handleEdit()}} className="bg-[#ff7800] text-[#181818] hover:text-[#000] font-bold p-1.5 px-3 rounded-md mt-3 mx-2">ویرایش</button>
              </td>
              <td>
              <button onClick={()=>{notEdit()}} className="bg-[#404040] py-1.5 px-5 rounded-md mt-3 mx-2">لغو</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    )
  }
  

  <hr className="my-3 border-[#f0f8ff]" />

  <div style={{direction:"ltr"}} className="overflow-auto rotate-180 h-[500px] relative">
    <table style={{direction:"rtl"}} className="mytbl min-w-max rotate-180 absolute bottom-1">
      <thead>
        <tr>
          <th>شناسه</th>
          <th>نام</th>
          <th>شعار</th>
          <th>اندازه (mb)</th>
          <th>تعداد دانلود</th>
          <th>بازی</th>
          <th>لینک دانلود</th>
          <th>لینک عکس</th>
          <th>گالری</th>
          <th>توضیحات</th>
          <th className="w-[65px]">ویرایش</th>
          <th className="w-[65px]">حذف</th>
        </tr>
      </thead>
      <tbody>
        {
          apps.map((app)=>(
            <tr>
              <td className="text-center">{app.id}</td>
              <td className="text-center">{app.name}</td>
              <td className="text-center">{app.catchTitle}</td>
              <td className="text-center">{app.sizeInMBs}</td>
              <td className="text-center">{app.downloadsCount}</td>
              <td className="text-center">{(app.isGame)?<TiTick IG={1} size={30} />:<ImCross className="m-auto" IG={0}/>}</td>
              <td>{app.downloadLink}</td>
              <td>{app.image}</td>
              <td>{app.galery.map((img)=>(<p>{img}</p>))}</td>
              <td className="text-center">{app.description.substring(0,70)}...</td>
              <td><span style={{padding:"0.25rem"}} className="block w-fit m-auto hover:bg-[#ff7800] hover:text-[#181818] rounded-full cursor-pointer" onClick={(e)=>{setEdit(e.target.parentNode.parentNode)}}><MdEdit className="pointer-events-none" size={25}/>  </span></td>
              <td><span style={{padding:"0.5rem"}} className="block w-fit m-auto hover:bg-[#f00] hover:text-[#181818] rounded-full cursor-pointer" onClick={(e)=>{handleDelete(app.id)}}><ImCross className="pointer-events-none" size={20}/></span></td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>
</div>;
    return output;


    async function getApps(){
      let apps = await getJson("api/Apps");
      setApps(apps);
    }
    async function addApp(obj){
      await postJson("api/Apps", obj);
    }
    async function editApp(obj){
      await postJson("api/Apps/" + obj.id, obj, "PUT");
    }
    async function deleteApp(id){
      await deleteJson("api/Apps/" + id);
    }
}
  
export default AdminApplications; 