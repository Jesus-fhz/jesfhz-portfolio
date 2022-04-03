import React from "react";
import { Link,HashRouter } from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCode, faEnvelope, faHouseUser,  faUserLarge  } from "@fortawesome/free-solid-svg-icons";

import '../styles/sidebar.scss'
const Sidebar: React.FC = () => {


    const scroll = (target: string) => {
        let element = document.getElementById(target);
        element && element.scrollIntoView({ behavior: "smooth", block: "center"})
    }

    return( 
    <HashRouter>
        <section className="sidebar">
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
                <li>
                    <Link to="#">
                        <FontAwesomeIcon icon={faBriefcase}/>
                        <span>Projects</span>
                    </Link>
                </li>
                <li> 
                    <Link to="#">
                        <FontAwesomeIcon icon={faEnvelope}/>
                        <span>Contact</span>
                    </Link>
                </li>
            </ul>
        </section>
    </HashRouter>
    )

}

export default Sidebar


            
            
            
            