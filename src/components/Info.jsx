import Pdf from '../assets/resume.pdf';

export default function Info(){
    return(
        <section className="about">
            <h2>A little bit about Me</h2>
            <div className="info">
                <p>
                Hi! I'm Boris Mwanga. I have a passion for coding and problem solving, and love building websites and applications. 
                I am also passionate about music, football and universes around what I listen to 
                and I am always curious to learn more when it comes to new technologies and creative coding.
                </p>

                <p>Technologies I've been working with recently:</p>
                <ul>
                    <li>JavaScript (ES6+)</li>
                    <li>React</li>
                    <li>Ruby On Rails</li>
                    <li>TypeScripts</li>
                </ul>
            </div>

            <div className="resume">
                <a href={Pdf} target="_blank" rel="noopener noreferrer" className="btn">My Résumé</a>
                <a href="https://qrco.de/bdgEOR" target="_blank" rel="noopener noreferrer" className="btn">QR-Code</a>
            </div>



        </section>
        )
}