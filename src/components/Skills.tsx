import React from "react";

import html from '../images/svg/html.svg'
import css from '../images/svg/css.svg'
import docker from '../images/svg/docker.svg'
import express from '../images/svg/express.svg'
import graphql from '../images/svg/graphql.svg'
import javascript from '../images/svg/javascript.svg'
import jquery from '../images/svg/jquery.svg'
import mongodb from '../images/svg/mongodb.svg'
import mysql from '../images/svg/mysql.svg'
import postgresql from '../images/svg/postgresql.svg'
import rails from '../images/svg/rails.svg'
import react from '../images/svg/react.svg'
import ruby from '../images/svg/ruby.svg'
import sass from '../images/svg/sass.svg'
import vue from '../images/svg/vue.svg'
import typescript from '../images/svg/typescript.svg'
import git from '../images/svg/git.svg'
import nodejs from '../images/svg/nodejs.svg'


import '../styles/skills.scss'

const Skills: React.FC = () => {

    return( 
        <section className="skills" id="skills">
            <span>
                <h1>Skills</h1>
            </span>
            <div className="skills-svg">
                <ul>
                    <li>
                        <div className="svg-container">
                           <img src={html} alt="html" />
                        </div>  
                        <p>HTML</p>
                    </li>
                    <li>
                        <div className="svg-container">  
                            <img src={css} alt="css" />      
                        </div>
                        <p>CSS</p>
                    </li>
                    <li>
                        <div className="svg-container">
                            <img src={sass} alt="sass" />
                        </div>
                        <p>SASS</p>
                    </li>
                    <li><div className="svg-container">
                            <img src={javascript} alt="javascript" />
                        </div>
                        <p>Javascript</p>
                    </li>
                    <li>
                        <div className="svg-container">
                            <img src={typescript} alt="typescript" />
                        </div>
                        <p>TypeScript</p>
                    </li>
                    <li>
                        <div className="svg-container">
                            <img src={react} alt="react" />
                        </div>
                        <p>React</p>
                    </li>
                    <li>
                        <div className="svg-container">
                            <img src={jquery} alt="jquery" />
                        </div>
                        <p>Jquery</p>
                    </li>
                    <li>
                        <div className="svg-container">
                            <img src={nodejs} alt="nodejs" />
                        </div>
                        <p>NodeJs</p>
                    </li>
                    <li>
                        <div className="svg-container">
                            <img src={express} alt="express" />
                        </div>
                        <p>Express</p>
                    </li>
                    <li>
                        <div className="svg-container">
                            <img src={graphql} alt="graphql" />
                        </div>
                        <p>Graphql</p>
                    </li>
                    <li>
                        <div className="svg-container">
                            <img src={ruby} alt="ruby" />
                        </div>
                        <p>Ruby</p>
                    </li>
                    <li>
                        <div className="svg-container">
                            <img src={rails} alt="rails" />
                        </div>
                        <p>Rails</p>
                    </li>
                    <li>
                        <div className="svg-container">
                            <img src={mysql} alt="mysql" />
                        </div>
                        <p>Mysql</p>

                    </li>
                    <li>
                        <div className="svg-container">
                            <img src={postgresql} alt="postgresql" />
                        </div>
                        <p>Postgresql</p>

                    </li>
                    <li>
                        <div className="svg-container">
                            <img src={html} alt="html" />
                        </div>
                        <p>Html</p>

                    </li>
                    <li>
                        <div className="svg-container">
                            <img src={mongodb} alt="mongodb" />
                        </div>
                        <p>Mongodb</p>

                    </li>
                    <li>
                        <div className="svg-container">
                            <img src={git} alt="git" />
                        </div>
                        <p>Version Control</p>

                    </li>
                    <li>
                        <div className="svg-container">
                            <img src={docker} alt="docker" />
                        </div>
                        <p>Docker</p>
                    </li>
                   
                    
                </ul>
            </div>
        </section>
    )

}

export default Skills