import Line from "./Line"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';




export default function Apps() {
    return(
        <>
            <Line />
            <Tabs>
                <TabList>
                    <Tab>DeShort</Tab>
                    <Tab>Title 2</Tab>
                </TabList>

                <TabPanel>
                    <span> 
                        <h2>DeShorts Extension Help Guide</h2>
                        <a href="#" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faGlobe} size="xl" className='btn'/></a>

                        <h3>Welcome to the DeShorts Help Guide! Here, we will walk you through how to use the DeShorts extension.</h3>
                        <h4> What is DeShorts?</h4>
                        DeShorts is a Chrome extension that automatically converts YouTube Shorts URLs into regular YouTube video URLs. 
                        This allows you to view the video on the regular YouTube platform, giving you access to more features like the comments section, 
                        related videos, and more.

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
                        Now, when you navigate to a YouTube Shorts URL, DeShorts will automatically redirect you to the corresponding regular YouTube video URL. 
                        Remember, you can turn off this functionality at any time by opening the DeShorts popup and toggling the switch back to the "OFF" position.
                        If you need further assistance, please reach out through our support channels.
                    </span>
                </TabPanel>
                <TabPanel>
                    <p>Any content 2</p>
                </TabPanel>
            </Tabs>
        </>
    )
}