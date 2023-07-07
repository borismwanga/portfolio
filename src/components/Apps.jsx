import Line from "./Line"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import  deshortsLogo from "../assets/deshort.png"

const imgStyle = {
    width: "100%" ,
    height :"233px"
}


export default function Apps() {
    return(
        <>
            <Line />
            <Tabs>
                <TabList>
                    <Tab>DeShort</Tab>
                    <Tab>Kolibri</Tab>
                </TabList>

                <TabPanel>
                <div className="project-head">
                    <span className="project-title">
                        <h2>DeShorts Extension</h2>
                    </span>
                    <span className="projects-links">
                        <a href="#" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faGlobe} size="xl" className='btn'/></a>
                    </span>
                </div>
                <div className="project-img" >
                    <img  src={deshortsLogo} alt="image" />
                </div>
                <div className="project-description app-project-description">
                    <span> 
                        <h4> What is DeShorts?</h4>
                        <p>
                            DeShorts is a Chrome extension that automatically converts YouTube Shorts URLs into regular YouTube video URLs. 
                            This allows you to view the video on the regular YouTube platform, giving you access to more features like the comments section, 
                            related videos, and more.
                        </p>
                        <h4>How to Use</h4> 
                        <ol>
                            After you've installed DeShorts, you'll notice a new icon on your Chrome toolbar. 
                            <li>
                                Click on the DeShorts icon, and a popup will appear. 
                            </li>
                            <li>
                                You'll see a toggle switch on the popup. When the switch is in the "OFF" position,
                                DeShorts won't make any changes to your YouTube Shorts URLs.
                            </li>
                            <li>
                                To activate the DeShorts functionality, click on the switch to toggle it to the "ON" position.
                            </li>
                        </ol>
                        <p>
                            Now, when you navigate to a YouTube Shorts URL, DeShorts will automatically redirect you to the corresponding regular YouTube video URL. 
                            Remember, you can turn off this functionality at any time by opening the DeShorts popup and toggling the switch back to the "OFF" position.
                            If you need further assistance, please reach out through our support channels.
                        </p>
                    </span>
                </div>
                    
                </TabPanel>
                <TabPanel>
                    <p>Comming Soon...</p>
                </TabPanel>
            </Tabs>
        </>
    )
}