// import '../../App.css';
// import { getJson, postJson, deleteJson } from './fetch';

import { MdEdit } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { useState, useEffect } from "react";
import { deleteJson, getJson, postJson } from "../../fetch"

function AdminCategorys() {
  const [categories, setCategories] = useState();
  useEffect(()=>{
    getCategories();
  });

  const [isEdit,changeEdit]=useState(false);
  const [Eparams,fillEForm]=useState({id:"",name:""});

  


  function setEdit(rowE){

    changeEdit(true);
    fillEForm({
      id: rowE.children[0].innerText,
      name: rowE.children[1].innerText,
    });
    let input = document.querySelector('#category-name-input');
    input.value = rowE.children[1].innerText;
  }

  function notEdit(){
    changeEdit(false);
    
    let input = document.querySelector('#category-name-input');
    input.value = "";
  }
  function handleSubmit(inputId){
    let input = document.querySelector('#'+ inputId);
    if(input.value.trim() !== '' && input.value.trim() !== " ")
      {
        let obj = {
          name : input.value.trim()
        };
        if(isEdit)
          {
            obj.id = Eparams.id;
            editCategory(obj)
          }
          else
          {
            addCategory(obj);
          }
      }
  }

  function handleDelete(id){
    notEdit();
    deleteCategory(id);
  }

  let formText = isEdit? "ویرایش": "اضافه کردن";
  let color = isEdit? "bg-[#ff7800] text-[#181818]": "bg-[#0d36ff] text-[#111111]";
  let output = <div className="w-full flex flex-col">
  {
    <form onSubmit={(e)=>{e.preventDefault();}} className="text-center">
      <h1 className="text-2xl pt-2 pb-5">{formText} دسته بندی</h1>
      <label className="px-3">نام</label>
      <input id="category-name-input" name="name" required className="rounded px-2 py-1 text-[#222]" type="text" />
      <br/>
      <button onClick={()=>{handleSubmit("category-name-input")}} type="submit" className={"p-1.5 rounded-md mt-3 mx-2 " + color}>{formText}</button>
      {(isEdit)?<button onClick={()=>{notEdit()}} className="bg-[#404040] py-1.5 px-3.5 rounded-md mt-3 mx-2">لغو
      </button>:<></>}
    </form>
    
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
        {(categories===undefined)? <tr><td><p>Loading</p></td></tr>: categories.map((cat)=>(
          <tr className="text-center">
            <td>{cat.id}</td>
            <td className="text-right">{cat.name}</td>
            <td><span style={{padding:"0.25rem"}} className="block w-fit m-auto hover:bg-[#ff7800] hover:text-[#181818] rounded-full cursor-pointer" onClick={(e)=>{setEdit(e.target.parentNode.parentNode)}}><MdEdit className="pointer-events-none" size={25}/>  </span></td>
            <td><span style={{padding:"0.5rem"}} className="block w-fit m-auto hover:bg-[#f00] hover:text-[#181818] rounded-full cursor-pointer" onClick={(e)=>{handleDelete(cat.id)}}><ImCross className="pointer-events-none" size={20}/></span></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>;
    return output;

    async function getCategories(){
      let cats = await  getJson("api/Categories");
      setCategories(cats);
    }
    async function addCategory(obj){
      await postJson("api/Categories", obj);
    }
    async function editCategory(obj){
      await postJson("api/Categories/" + obj.id, obj, "PUT");
    }
    async function deleteCategory(id){
      await deleteJson("api/Categories/" + id);
    }
}
  
export default AdminCategorys; 