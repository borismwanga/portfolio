import {useState} from "react"
import Menu from "./Menu"
import About from "./about"
import Contacts from "./Contacts"
import Projects from "./Projects"

export default function Content(){
      const [activeComponent, setActiveComponent] = useState("");

  const handleClick = (component) => {
    setActiveComponent(component);
  };

    return(
    <div className="content">
        <Menu handleClick={handleClick} activeComponent={activeComponent} />
        {activeComponent === "target1" && <Contacts />}
        {activeComponent === "target2" && <About />}
        {activeComponent === "target4" && <Projects />}
    </div>
    )
}