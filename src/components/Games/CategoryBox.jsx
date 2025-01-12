// import '../../App.css';
// import { getJson, postJson, deleteJson } from './fetch';

function CategoryBox({props}) {
  //console.log(props);
  return (
    <a className="catBox block w-[49.5%] bg-[#454444] px-4 rounded-lg p-4 h-[273px] relative mb-4" href={props.link}>
      <img className="w-6 h-6 inline ml-2" src={require("../../assets/"+props.iconLink)} alt="clash" />
      <h4 className="inline font-bold text-[15px] text-[#e0e0e0]">{props.title}</h4>
      <p className="text-[#e0e0e0] font-light text-justify text-sm pt-4">{props.desc}</p>
      <div class="BottomCatBox">
        <div class="imgContainer">
          <img src={require("../../assets/"+props.imgLink)} alt="CategoryImage" />
        </div>
      </div>
    </a>
  );
}

export default CategoryBox;

