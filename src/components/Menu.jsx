import { gsap } from "gsap";
import { useState } from "react";
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'


export default function Menu(props){


    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
    const isMid = useMediaQuery({ query: '(max-width: 1126px)' });

    const { handleClick, activeComponent } = props;


    const menuClick = () => {
        // gsap.to(".container",{ scale:0.3, duration:0.5})
        // gsap.to(".container",{x:-450, y:-100, scale:0.5, duration:0.5})
        if (isMobile) {
            gsap.to(".container",{scale:0, duration:0.5,  display:"none"})
            gsap.to("#mini",{autoAlpha:1, duration:0.5})
            gsap.to(".date",{autoAlpha:0, duration:0.5, display:"none"})
        } else if (isMid){
            gsap.to(".container",{x:-300, y:-410, scale:0.4, duration:0.5})
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
                    contacts
                </div>

                <div className={`div2 ${activeComponent === "target2" ? "active" : ""}`}
                    onClick={() => {handleClick("target2"), menuClick()}}> 
                    about
                </div>
                <Link to="/" className="div3">
                    <div > 
                        boris 
                    </div>
                </Link>

                <div className={`div4 ${activeComponent === "target4" ? "active" : ""}`}
                    onClick={() => {handleClick("target4"), menuClick()}}>
                    projects
                </div>
            </div>
        </div>
        
    )
}