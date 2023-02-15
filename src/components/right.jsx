export default function Right(){

    const date = new Date();
    const year = date.getFullYear();

    return(
        <div className="right">
            <p>
                H<span className="half_background">ello there! I'm <span className="circle-sketch-highlight">Boris</span>, a junior web development with a 
                            passion for building unique and interactive websites. </span>
            </p>
            <span className="date">©{year}</span>


        </div>
        )
}