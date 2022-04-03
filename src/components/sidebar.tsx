import React from "react";
import { Link,HashRouter } from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCode, faEnvelope, faHouseUser,  faUserLarge  } from "@fortawesome/free-solid-svg-icons";

import '../styles/sidebar.scss'
const Sidebar: React.FC = () => {

    return( 
    <HashRouter>
        <section className="sidebar">
            <ul>
                <li> 
                    <Link to="#">
                        <FontAwesomeIcon icon={faHouseUser}/>
                        <span>Home</span>
                    </Link>
                </li>
                <li> 
                    <Link to="#">
                        <FontAwesomeIcon icon={faUserLarge}/>
                        <span>About</span>
                    </Link>
                </li>
                <li>
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


            
            
            
            