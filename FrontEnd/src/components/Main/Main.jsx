// import '../../App.css';
// import { getJson, postJson, deleteJson } from './fetch';
import Categorys from './Categorys';
import Download from './Download';
import Header from './Header';
import Status from './Status';
import "./LogoDisapear.js";
import "./LinkDisapear.js";

function Main() {
  return (
    <>
      <Header/>
      <Download/>
      <Status/>
      <Categorys/>
    </>
  );
}

export default Main;

