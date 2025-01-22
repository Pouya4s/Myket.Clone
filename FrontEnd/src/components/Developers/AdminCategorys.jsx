// import '../../App.css';
// import { getJson, postJson, deleteJson } from './fetch';

import { MdEdit } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { useState } from "react";

function AdminCategorys() {
  let cats=[
    {
      id:1,
      title:"استراتژی",
    },
    {
      id:2,
      title:"اکشن",
    },
    {
      id:3,
      title:"فکری",
    },
    {
      id:4,
      title:"پربازدید ترین ها",
    },
    {
      id:5,
      title:"کودکان",
    },
  ];

  const [isEdit,changeEdit]=useState(false);
  const [Eparams,fillEForm]=useState({id:"",title:""});

  function setEdit(rowE){

    changeEdit(true);
    fillEForm({
      id: rowE.children[0].innerText,
      title: rowE.children[1].innerText,
    })
  }

  function notEdit(){
    changeEdit(false);
  }

  function handleDelete(rowD){
    
    cats=cats.filter((cat)=>{return cat.id!==Number(rowD.children[0].innerText)})
    if(Number(rowD.children[0].innerText) === Number(Eparams.id)){
      notEdit();
    }
    rowD.remove();
  }
    return (
      <div className="w-full flex flex-col">
        {
          !isEdit?(
            <form action="#" className="text-center" method="post">
              <h1 className="text-2xl pt-2 pb-5">اضافه کردن دسته بندی</h1>
              <label className="px-3">نام</label>
              <input name="title" required className="rounded px-2 py-1 text-[#222]" type="text" />
              <br/>
              <button type="submit" className="bg-[#0d36ff] p-1.5 rounded-md mt-3 mx-2">اضافه کردن</button>
            </form>
          ):(
            <form action="#" className="text-center" method="post">
              <h1 className="text-2xl pt-2 pb-5">ویرایش دسته بندی</h1>
              <input type="hidden" value={Eparams.id} />
              <label className="px-3">نام</label>
              <input name="title" value={Eparams.title} onChange={(e)=>{fillEForm({id:Eparams.id,title:e.target.value})}} required className="rounded px-2 py-1 text-[#222]" type="text" />
              <br/>
              <button type="submit" className="bg-[#ff7800] text-[#181818] hover:text-[#000] font-bold p-1.5 rounded-md mt-3 mx-2">ویرایش</button>
              <button onClick={()=>{notEdit()}} className="bg-[#404040] py-1.5 px-3.5 rounded-md mt-3 mx-2">لغو</button>
            </form>
          )
        }
        
        <hr className="my-3 border-[#f0f8ff]" />
        
        <div style={{direction:'ltr'}} className="max-h-[500px] overflow-auto">
          <table style={{direction:'rtl'}} className="mytbl w-full">
            <thead>
              <tr>
                <th>شناسه</th><th>نام</th><th className="w-[65px]">ویرایش</th><th className="w-[65px]">حذف</th>
              </tr>
            </thead>
            <tbody>
              {cats.map((cat)=>(
                <tr className="text-center">
                  <td>{cat.id}</td>
                  <td className="text-right">{cat.title}</td>
                  <td><span style={{padding:"0.25rem"}} className="block w-fit m-auto hover:bg-[#ff7800] hover:text-[#181818] rounded-full cursor-pointer" onClick={(e)=>{setEdit(e.target.parentNode.parentNode)}}><MdEdit className="pointer-events-none" size={25}/>  </span></td>
                  <td><span style={{padding:"0.5rem"}} className="block w-fit m-auto hover:bg-[#f00] hover:text-[#181818] rounded-full cursor-pointer" onClick={(e)=>{handleDelete(e.target.parentNode.parentNode)}}><ImCross className="pointer-events-none" size={20}/></span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
}
  
export default AdminCategorys; 