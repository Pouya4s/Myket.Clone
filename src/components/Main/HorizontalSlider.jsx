import React from "react"


function HorizontalSlider() {
    return (
        <div className="Hslider gap-6 flex flex-col flex-1 hidden">
          <div className="slider slider1">
            <a href="#/#icons-most-used-widgets" className="icons1">
              <img src={require("../../assets/Home/slidermobile-1.webp")} alt="icons"/>
            </a>
            <a href="#/#icons-most-used-widgets" className="icons2">
              <img src={require("../../assets/Home/slidermobile-1.webp")} alt="icons"/>
            </a>
          </div>
          <div className="slider slider2">
            <a href="#/#icons-best-games" className="icons1">
              <img src={require("../../assets/Home/slidermobile-2.webp")} alt="icons"/>
            </a>
            <a href="#/#icons-best-games" className="icons2">
              <img src={require("../../assets/Home/slidermobile-2.webp")} alt="icons"/>
            </a>
          </div>
          <div className="slider slider3">
            <a href="#/#icons-most-used-apps" className="icons1">
              <img src={require("../../assets/Home/mobile-banner-movieV2.webp")} alt="icons"/>
            </a>
            <a href="#/#icons-most-used-apps" className="icons2">
              <img src={require("../../assets/Home/mobile-banner-movieV2.webp")} alt="icons"/>
            </a>
          </div>
        </div>
    );
}
export default HorizontalSlider;