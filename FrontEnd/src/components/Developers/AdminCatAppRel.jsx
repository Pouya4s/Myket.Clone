// import '../../App.css';
// import { getJson, postJson, deleteJson } from './fetch';

function AdminCatAppRel() {

  let fade=undefined;

  function setRel(){
    let AID=document.getElementsByName("appID")[0].value;
    let CID=document.getElementsByName("catID")[0].value;
    if(AID!=="" && CID!==""){
      
      showMSG("set",true);
    }
    else{
      alert("هر دو شناسه را وارد کنید!");
    }
  }

  function delRel(){
    let AID=document.getElementsByName("appID")[0].value;
    let CID=document.getElementsByName("catID")[0].value;
    if(AID!=="" && CID!==""){
      
      showMSG("del",false);
    }
    else{
      alert("هر دو شناسه را وارد کنید!");
    }
  }

  function showMSG(btn,success){
    let MSG=document.getElementById('MSG')
    MSG.classList.remove("trans")
    MSG.style.opacity=1;
    if(fade!==undefined){
      clearTimeout(fade)
    }
    if(btn==="set"){
      if(success){
        MSG.style.backgroundColor="#10ff00";
        MSG.innerText="ارتباط ایجاد شد.";
      }
      else{
        MSG.style.backgroundColor="#ff1800";
        MSG.innerText="ارتباط ایجاد نشد!";
      }
    }
    else{
      if(success){
        MSG.style.backgroundColor="#10ff00";
        MSG.innerText="ارتباط حذف شد.";
      }
      else{
        MSG.style.backgroundColor="#ff1800";
        MSG.innerText="ارتباط وجود ندارد!";
      }
    }

    fade=setTimeout(()=>{
      MSG.classList.add("trans")
      MSG.style.opacity=0;
    },2000)
  }

    return (
      <div className="w-full">
        <div className="text-center">
          <h1 className="text-2xl pt-2 pb-5">ارتباط اپلیکیشن و دسته بندی</h1>
          <label className="px-3">شناسه اپلیکیشن</label>
          <input name="appID" style={{direction:'ltr'}} required className="rounded px-2 py-1 text-[#222] my-[10px]" type="number" />
          <label className="px-3">شناسه دسته بندی</label>
          <input name="catID" style={{direction:'ltr'}} required className="rounded px-2 py-1 text-[#222] my-[10px]" type="number" />
          <br/>
          <button onClick={(e)=>{setRel()}} className="bg-[#0d36ff] p-1.5 rounded-md mt-3 mx-2">ایجاد ارتباط</button>
          <button onClick={(e)=>{delRel()}} className="bg-[#f00] p-1.5 rounded-md mt-3 mx-2">حذف ارتباط</button>
        </div>
        <div id="MSG" className="h-[50px] mt-3 text-center text-2xl content-center rounded-md pointer-events-none select-none"></div>
      </div>
    );
}
  
export default AdminCatAppRel; 