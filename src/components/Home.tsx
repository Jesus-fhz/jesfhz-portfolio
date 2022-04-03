import React from "react";
import {Link} from "react-router-dom"

import avatar from '../images/avatar-jesus.png'
import '../styles/home.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Home: React.FC = () => {

    return( 
        <section className="home" id="home">
            <div className="avatar">
                <img src={avatar}  className="avatar" alt="Jesus Flores" />                
            </div>
            <div className="intro">
                <h2> Hello there, I am </h2>
                <h1>Jesus Flores</h1>
                <p>
                A <span>Full-Stack Software Engineer</span> with a love for problem-solving and a desire to continuously learn. 
                </p>
                <div className="info">
                    <button className="btn">Resume</button>
                    <ul>
                        <li> <a href="https://www.linkedin.com/in/jesus-fhz/" rel="noreferrer" target="_blank"> <FontAwesomeIcon icon={faLinkedin}/></a> </li>
                        <li> <a href="https://github.com/Jesus-fhz" rel="noreferrer" target="_blank"> <FontAwesomeIcon icon={faGithub}/> </a>  </li>
                        <li> <a href="mailto: abc@example.com" rel="noreferrer" target="_blank"> <FontAwesomeIcon icon={faEnvelope}/></a>  </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Home


            
            
            
            