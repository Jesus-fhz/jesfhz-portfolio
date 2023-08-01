import React from "react";

import avatar from "../images/avatar-jesus.png";
import jesus from "../files/JesusFloresResume.pdf";
import "../styles/home.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Home: React.FC = () => {
    return (
        <section className='home' id='home'>
            <div className='avatar'>
                <img src={avatar} className='avatar' alt='Jesus Flores' />
            </div>
            <div className='intro'>
                <h2> Hello there, I am </h2>
                <h1>Jesus Flores</h1>
                <p>
                    A <span>Full-Stack Software Engineer</span> who is
                    passionate about solving complex problems and continuously
                    expanding my knowledge in the ever-evolving world of
                    technology.
                </p>
                <p>P.S: Currently building something cool with my friends 😃</p>
                <div className='info'>
                    {/* <a
                        href={jesus}
                        target='_blank'
                        rel='noreferrer'
                        className='btn'>
                        Resume
                    </a> */}
                    <ul>
                        <li>
                            {" "}
                            <a
                                href='https://www.linkedin.com/in/jesus-fhz/'
                                rel='noreferrer'
                                target='_blank'>
                                {" "}
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>{" "}
                        </li>
                        <li>
                            {" "}
                            <a
                                href='https://github.com/Jesus-fhz'
                                rel='noreferrer'
                                target='_blank'>
                                {" "}
                                <FontAwesomeIcon icon={faGithub} />{" "}
                            </a>{" "}
                        </li>
                        <li>
                            {" "}
                            <a
                                href='mailto: dev@jesusflores.io'
                                rel='noreferrer'
                                target='_blank'>
                                {" "}
                                <FontAwesomeIcon icon={faEnvelope} />
                            </a>{" "}
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Home;
