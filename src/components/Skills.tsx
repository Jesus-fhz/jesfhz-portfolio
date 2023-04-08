import React from "react";

import html from "../images/svg/html.svg";
import css from "../images/svg/css.svg";
import docker from "../images/svg/docker.svg";
import tailwindcss from "../images/svg/tailwindcss.svg";
import graphql from "../images/svg/graphql.svg";
import javascript from "../images/svg/javascript.svg";
import remixIcon from "../images/svg/remixIcon.svg";
import mongodb from "../images/svg/mongodb.svg";
import mysql from "../images/svg/mysql.svg";
import firebase from "../images/svg/firebase.svg";
import flask from "../images/svg/flask.svg";
import react from "../images/svg/react.svg";
import python from "../images/svg/python.svg";
import sass from "../images/svg/sass.svg";
import googleCloud from "../images/svg/googleCloud.svg";
import typescript from "../images/svg/typescript.svg";
import git from "../images/svg/git.svg";
import nodejs from "../images/svg/nodejs.svg";

import "../styles/skills.scss";

const Skills: React.FC = () => {
    return (
        <section className='skills main-setting' id='skills'>
            <span>
                <h1 className='title-panels'>Skills</h1>
            </span>
            <div className='skills-svg panels'>
                <ul>
                    <li>
                        <div className='svg-container'>
                            <img src={html} alt='html' />
                        </div>
                        <p>HTML</p>
                    </li>
                    <li>
                        <div className='svg-container'>
                            <img src={css} alt='css' />
                        </div>
                        <p>CSS</p>
                    </li>
                    <li>
                        <div className='svg-container'>
                            <img src={sass} alt='sass' />
                        </div>
                        <p>SASS</p>
                    </li>
                    <li>
                        <div className='svg-container'>
                            <img src={tailwindcss} alt='tailwindcss' />
                        </div>
                        <p>Tailwind</p>
                    </li>
                    <li>
                        <div className='svg-container'>
                            <img src={javascript} alt='javascript' />
                        </div>
                        <p>Javascript</p>
                    </li>
                    <li>
                        <div className='svg-container'>
                            <img src={typescript} alt='typescript' />
                        </div>
                        <p>TypeScript</p>
                    </li>
                    <li>
                        <div className='svg-container'>
                            <img src={react} alt='react' />
                        </div>
                        <p>React</p>
                    </li>
                    <li>
                        <div className='svg-container'>
                            <img src={remixIcon} alt='remix' />
                        </div>
                        <p>Remix-run</p>
                    </li>

                    <li>
                        <div className='svg-container'>
                            <img src={nodejs} alt='nodejs' />
                        </div>
                        <p>NodeJs</p>
                    </li>

                    <li>
                        <div className='svg-container'>
                            <img src={graphql} alt='graphql' />
                        </div>
                        <p>Graphql</p>
                    </li>
                    <li>
                        <div className='svg-container'>
                            <img src={python} alt='python' />
                        </div>
                        <p>Python</p>
                    </li>
                    <li>
                        <div className='svg-container'>
                            <img src={flask} alt='flask' />
                        </div>
                        <p>Flask</p>
                    </li>
                    <li>
                        <div className='svg-container'>
                            <img src={mysql} alt='mysql' />
                        </div>
                        <p>Mysql</p>
                    </li>
                    <li>
                        <div className='svg-container'>
                            <img src={firebase} alt='firestore' />
                        </div>
                        <p>Firestore</p>
                    </li>
                    <li>
                        <div className='svg-container'>
                            <img src={mongodb} alt='mongodb' />
                        </div>
                        <p>Mongodb</p>
                    </li>
                    <li>
                        <div className='svg-container'>
                            <img src={googleCloud} alt='googleCloud' />
                        </div>
                        <p>Google Cloud</p>
                    </li>
                    <li>
                        <div className='svg-container'>
                            <img src={git} alt='git' />
                        </div>
                        <p>Version Control</p>
                    </li>
                    <li>
                        <div className='svg-container'>
                            <img src={docker} alt='docker' />
                        </div>
                        <p>Docker</p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Skills;
