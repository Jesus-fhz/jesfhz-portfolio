import React,{useState} from "react";
import { NavLink,HashRouter } from "react-router-dom"

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
                    <li onClick={()=>scroll("home")} > 
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                            <FontAwesomeIcon icon={faHouseUser}/>
                            <span >Home</span>
                        </NavLink>
                    </li>
                    <li onClick={()=>scroll("about")}>  
                        <NavLink to="about" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                            <FontAwesomeIcon icon={faUserLarge}/>
                            <span>About</span>
                       </NavLink>
                    </li>
                    <li onClick={()=>scroll("skills")} >
                        <NavLink to="skills" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                            <FontAwesomeIcon icon={faCode}/>
                            <span>Skills</span>
                        </NavLink>
                    </li>
                    <li onClick={()=>scroll("projects-section")}>
                        <NavLink to="projects" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                            <FontAwesomeIcon icon={faBriefcase}/>
                            <span>Projects</span>
                        </NavLink>
                    </li>
                    <li onClick={()=>scroll("contact")} > 
                        <NavLink to="contact" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                            <FontAwesomeIcon icon={faEnvelope}/>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </section>
        </HashRouter>
    </>
    )

}

export default Sidebar


            
  