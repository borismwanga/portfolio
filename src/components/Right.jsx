import { useMediaQuery } from 'react-responsive'
import { gsap } from "gsap";

export default function Right(){

    const date = new Date();
    const year = date.getFullYear();

    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

    const miniClick = () => {
        if (isMobile) {
            gsap.to(".container",{scale:0.7, duration:0.5,  display:"block", zIndex:"10"})
            gsap.to("#mini",{autoAlpha:0, duration:0.5})
        }
        
    }

    return(
        <div className="right">
            {isMobile ? (
                <div id="mini" onClick={miniClick}>
                    <div class="div1"></div>
                    <div class="div2"></div>
                    <div class="div3"></div>
                    <div class="div4"></div>
                </div>
            ):(
                <p>
                H<span className="half_background">ello there! I'm <span className="circle-sketch-highlight">Boris</span>, a junior web development with a 
                            passion for building unique and interactive websites.ee</span>
                </p>
            )}
            
            <span className="date">©{year}</span>


        </div>
        )
}