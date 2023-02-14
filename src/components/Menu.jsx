import { gsap } from "gsap";
import { useState } from "react";


export default function Menu(){

    const menuClick = () => {
        gsap.to(".container",{x:-400, y:-100, scale:0.5, duration:1})
      }

    return(
        <div className="container" onClick={menuClick}>
            <div className="grid">
                <div className="div1"> CONTACTS</div>
                <div className="div2"> ABOUT</div>
                <div className="div3"> PROFIL</div>
                <div className="div4"> PROJECT</div>
            </div>
        </div>
        
    )
}