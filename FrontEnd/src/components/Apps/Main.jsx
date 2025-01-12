// import '../../App.css';
// import { getJson, postJson, deleteJson } from './fetch';

import TopTitle from "./TopTitle";
import Categorys from "./Categorys";
import CategoryBoxes from "./CategoryBoxes";
import Description from "./Description";
import Questions from "./Questions";

function Main() {
  return (
    <article className="pt-[80px] bg-[#212121]">
      <TopTitle/>
      <Categorys/>
      <CategoryBoxes/>
      <Description/>
      <Questions/>
    </article>
  );
}

export default Main;