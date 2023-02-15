import { gsap } from "gsap";
import { useState } from "react";
import { useMediaQuery } from 'react-responsive'



export default function Menu(props){


    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

    const { handleClick, activeComponent } = props;


    const menuClick = () => {
        // gsap.to(".container",{ scale:0.3, duration:0.5})
        // gsap.to(".container",{x:-450, y:-100, scale:0.5, duration:0.5})
        if (isMobile) {
            gsap.to(".container",{scale:0, duration:0.5,  display:"none"})
            gsap.to("#mini",{autoAlpha:1, duration:0.5})
        }else{
            gsap.to(".container",{x:-450, y:-100, scale:0.5, duration:0.5})
        }
        
        // gsap.to(".container",{top:'50%', left:"50%", duration:0.5})
    }
    

    return(
        <div className="container" >
            <div className="grid">
                <div className={`div1 ${activeComponent === "target1" ? "active" : ""}`}
                    onClick={() => {handleClick("target1"), menuClick()}}> 
                    CONTACTS
                </div>

                <div className={`div2 ${activeComponent === "target2" ? "active" : ""}`}
                    onClick={() => {handleClick("target2"), menuClick()}}> 
                    ABOUT
                </div>
                <div className="div3"> 
                    BORIS 
                </div>

                <div className={`div4 ${activeComponent === "target4" ? "active" : ""}`}
                    onClick={() => {handleClick("target4"), menuClick()}}>
                    PROJECT
                </div>
            </div>
        </div>
        
    )
}