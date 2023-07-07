import {useState} from "react"
import Menu from "./Menu"
import Contacts from "./Contacts"
import Projects from "./Projects"
import Info from "./Info"
// import App from "./App"


export default function Content(){
  
  const [activeComponent, setActiveComponent] = useState("");

  const handleClick = (component) => {
    setActiveComponent(component);
  }

    return(
    <div className="content">
        <Menu handleClick={handleClick} activeComponent={activeComponent} />
        {activeComponent === "target1" && <Contacts />}
        {activeComponent === "target2" && <Info />}
        {activeComponent === "target4" && <Projects />}
    </div>
    )
}