import React,{useState} from "react";
import { Link,HashRouter } from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCode, faEnvelope, faHouseUser,  faUserLarge, faBars,  faClose  } from "@fortawesome/free-solid-svg-icons";

import '../styles/sidebar.scss'
const Sidebar: React.FC = () => {

    const [showHide, setShowHide] = useState<string | false>(false);

    const scroll = (target: string) => {
        let element = document.getElementById(target);
        element && element.scrollIntoView({ behavior: "smooth", block: "start"})
    }

    const showHideSidebar = () =>{
        !showHide ? setShowHide('active') : setShowHide(false);
    }

    return( 
        <>
        <FontAwesomeIcon className="bars-menu" icon={!showHide ? faBars : faClose} onClick={showHideSidebar}/>
        <HashRouter>
            <section className={`sidebar  ${showHide}`}>
                <ul>
                    <li onClick={()=>scroll("home")}> 
                        <Link to="#">
                            <FontAwesomeIcon icon={faHouseUser}/>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li onClick={()=>scroll("about")}>  
                        <Link to="#"  >
                            <FontAwesomeIcon icon={faUserLarge}/>
                            <span>About</span>
                        </Link>
                    </li>
                    <li onClick={()=>scroll("skills")}>
                        <Link to="#">
                            <FontAwesomeIcon icon={faCode}/>
                            <span>Skills</span>
                        </Link>
                    </li>
                    <li onClick={()=>scroll("projects-section")}>
                        <Link to="#">
                            <FontAwesomeIcon icon={faBriefcase}/>
                            <span>Projects</span>
                        </Link>
                    </li>
                    <li onClick={()=>scroll("contact")}> 
                        <Link to="#">
                            <FontAwesomeIcon icon={faEnvelope}/>
                            <span>Contact</span>
                        </Link>
                    </li>
                </ul>
            </section>
        </HashRouter>
    </>
    )

}

export default Sidebar


            
            
            
            