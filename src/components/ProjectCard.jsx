import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

export default function ProjectCard(props){
    return(
        <div className='project-card'>
            <div className="project-head">
                <span className="project-title">
                    {props.item.title}
                </span>
                <span className="projects-links">
                    <a href={props.item.github} target="_blank"> <FontAwesomeIcon icon={faGithub} size="xl" className='btn'/> </a>
                    <a href={props.item.link} target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faGlobe} size="xl" className='btn'/></a>
                </span>
            </div>
                <div className="project-img">
                    <img src={props.item.image} alt="image" />
                </div>
                <div className="project-description">
                    {props.item.description}
                </div>
                
        </div>
    )
}