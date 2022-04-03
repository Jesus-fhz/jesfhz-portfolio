import React from "react";

import mfc from '../images/mfc.png'
import unleashed from '../images/unleashed.png'
import trading from '../images/trading.png'

import '../styles/projects.scss'

const Projects: React.FC = () => {

    return( 
        <section className="projects-section main-setting" id="projects-section">
            <span>
                <h1 className="title-panels"> Projects </h1>
            </span>
            <div className="panels">
                <div className="projects">
                        <div className="project-img">
                            <img src={mfc} alt="" />
                        </div>
                        <div className="project-info">
                            <h1> Metaverse Fighting Championship </h1>
                            <p><span>Utility-driven, MMA-inspired NFT game.</span> The Metaverse Fighting Championship (MFC) is a blockchain game that allows participation through ownership of NFTs.</p>
                            <div className="tech-stack"> 
                                <p>
                                    <span>Tech Stack: </span>
                                    Html, Sass, TypeScript, React, GraphQL, XState, NodeJs, Apollo-server, Mongoose, MongoDB
                                 </p>
                            </div>
                            <div className="actions"> 
                                <a href="https://metaverse-fc.netlify.app/" rel="noreferrer"  target="_blank" > DEMO </a>
                                <a href="https://github.com/thelorddoyle/mfc-front-end"  rel="noreferrer"   target="_blank"> REPO </a>
                            </div>
                        </div>
                        
                </div>
                <div className="projects">
                <div className="project-img">
                            <img src={unleashed} alt="" />
                        </div>
                        <div className="project-info">
                            <h1> Unleashed </h1>
                            <p>A dog walking Application that allows users to set up walks for their dogs, and <span> track the movement </span>  of their walker and Pet.</p>
                            <div className="tech-stack"> 
                                <p>
                                    <span>Tech Stack: </span>
                                    Html, Sass, VanillaJS,  React, API-Rest, Google Maps API,  Ruby on Rails, Postgresql
                                 </p>
                            </div>
                            <div className="actions"> 
                                <a href="https://unleashed-client.netlify.app/" rel="noreferrer"  target="_blank" > DEMO </a>
                                <a href="https://github.com/Jesus-fhz/unleashed-client"  rel="noreferrer"   target="_blank"> REPO </a>
                            </div>
                        </div>
                </div>
                <div className="projects">
                <div className="project-img">
                            <img src={trading} alt="" />
                        </div>
                        <div className="project-info">
                            <h1> Trading Journal </h1>
                            <p>
                               Keep track of your trading transactions, see your PNL and add personalized notes.
                               A simple trading tracker that also allows you to  <span> create personalized notes </span>  to each transaction to learn and improve your trading skills.</p>
                            <div className="tech-stack"> 
                                <p>
                                    <span>Tech Stack: </span>
                                    Html, Css, Bootstrap, VanillaJS, Ruby on Rails, Postgresql
                                 </p>
                            </div>
                            <div className="actions"> 
                                <a href="https://trading-journal-ga.herokuapp.com/" rel="noreferrer"  target="_blank" > DEMO </a>
                                <a href="https://github.com/Jesus-fhz/trading-journal"  rel="noreferrer"   target="_blank"> REPO </a>
                            </div>
                        </div>
                </div>
                <div className="projects">
                <div className="project-img">
                            <img src={mfc} alt="" />
                        </div>
                        <div className="project-info">
                            <h1> Tic Tac Toe </h1>
                            <p><span>Utility-driven, MMA-inspired NFT game.</span> The Metaverse Fighting Championship (MFC) is a blockchain game that allows participation through ownership of NFTs.</p>
                            <div className="tech-stack"> 
                                <p>
                                    <span>Tech Stack: </span>
                                    Html, Sass, VanillaJS, TypeScript, React, GraphQL, XState, NodeJs, Apollo-server, Mongoose, MongoDB
                                 </p>
                            </div>
                            <div className="actions"> 
                                <a href="https://metaverse-fc.netlify.app/" rel="noreferrer"  target="_blank" > DEMO </a>
                                <a href="https://github.com/thelorddoyle/mfc-front-end"  rel="noreferrer"   target="_blank"> REPO </a>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )

}

export default Projects