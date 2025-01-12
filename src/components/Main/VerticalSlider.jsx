import React from "react"


function VerticalSlider() {
    return (
        <div className="Vslider justify-end gap-6 flex flex-1 h-[110%]">
          <div className="slider slider1">
            <a href="#/#icons-most-used-widgets" className="icons1">
              <img src={require("../../assets/Home/sliderdesctop-1.webp")} alt="icons"/>
            </a>
            <a href="#/#icons-most-used-widgets" className="icons2">
              <img src={require("../../assets/Home/sliderdesctop-1.webp")} alt="icons"/>
            </a>
          </div>
          <div className="slider slider2">
            <a href="#/#icons-best-games" className="icons1">
              <img src={require("../../assets/Home/sliderdesctop-2.webp")} alt="icons"/>
            </a>
            <a href="#/#icons-best-games" className="icons2">
              <img src={require("../../assets/Home/sliderdesctop-2.webp")} alt="icons"/>
            </a>
          </div>
          <div className="slider slider3">
            <a href="#/#icons-most-used-apps" className="icons1">
              <img src={require("../../assets/Home/sliderdesctop-3.webp")} alt="icons"/>
            </a>
            <a href="#/#icons-most-used-apps" className="icons2">
              <img src={require("../../assets/Home/sliderdesctop-3.webp")} alt="icons"/>
            </a>
          </div>
          <div className="slider slider4">
            <a href="#/#icons-iranian-games" className="icons1">
              <img src={require("../../assets/Home/sliderdesctop-4.webp")} alt="icons"/>
            </a>
            <a href="#/#icons-iranian-games" className="icons2">
              <img src={require("../../assets/Home/sliderdesctop-4.webp")} alt="icons"/>
            </a>
          </div>
        </div>
    );
}
export default VerticalSlider;