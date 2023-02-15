import { gsap } from "gsap";
import { useState } from "react";


export default function Menu(props){

    const { handleClick, activeComponent } = props;

    const menuClick = () => {
        gsap.to(".container",{x:-450, y:-100, scale:0.5, duration:0.5})
      }

    return(
        <div className="container" onClick={menuClick}>
            <div className="grid">
                <div className={`div1 ${activeComponent === "target1" ? "active" : ""}`}
                    onClick={() => handleClick("target1")}> 
                    CONTACTS
                </div>

                <div className={`div2 ${activeComponent === "target2" ? "active" : ""}`}
                    onClick={() => handleClick("target2")}> 
                    ABOUT
                </div>
                <div className="div3"> PROFIL</div>

                <div className={`div4 ${activeComponent === "target4" ? "active" : ""}`}
                    onClick={() => handleClick("target4")}>
                    PROJECT
                </div>
            </div>
        </div>
        
    )
}