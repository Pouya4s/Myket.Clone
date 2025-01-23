
import { useEffect, useState } from "react";
import { getJson } from '../../fetch';

// import { Link } from "react-router-dom";
import Category from "./Category";


function Categorys() {
  
const [categories, setCategories] = useState();
useEffect(() => {
  getCategories();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);


  return (
    <>
      {
        categories===undefined?<h2>در حال بارگذاری</h2>
        :categories.map((cat)=>{
          console.log(cat);
          return (
          cat.apps.filter(a => !a.isGame).length===0?<></>:<Category category={cat} key={cat.id}/>
        )})
      }
    </>
  );

  
  async function getCategories()
  {
    let cats = await getJson('api/Categories');
    setCategories(cats);
  }
}

export default Categorys;
