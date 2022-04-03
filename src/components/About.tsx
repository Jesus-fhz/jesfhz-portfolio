import React from "react";

import '../styles/about.scss'

const About: React.FC = () => {

    return( 
        <section className="about" id="about">
            <span>
                <h1> About me</h1>
            </span>
            <div>
                <p>  
                    I'm an <span>IT Engineer</span>  and a recent <span>Software Engineer Graduate from GA</span>   with two years of international commercial experience in web development as a full-stack developer. 
                </p>
                <p>
                I am looking forward to working with an amazing team in a great environment, where I can use my unique skill-set as a web developer and expand my knowledge but also continuously add value to the lives of those around me.
                </p>
            </div>
        </section>
    )

}

export default About