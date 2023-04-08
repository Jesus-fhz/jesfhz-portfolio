import React from "react";

import "../styles/about.scss";

const About: React.FC = () => {
    return (
        <section className='about main-setting' id='about'>
            <span>
                <h1 className='title-panels'> About me</h1>
            </span>
            <div className='panels'>
                <p>
                    I have a bachelor’s degree in <span>Computer Science</span>{" "}
                    and a <span>Software Engineer Graduate from GA</span> with
                    more thant 3 years of international commercial experience in
                    web development as a full-stack developer. With a strong
                    foundation in both front-end and back-end development, I am
                    dedicated to crafting efficient, scalable, and user-focused
                    solutions that deliver real-world impact.
                </p>
            </div>
        </section>
    );
};

export default About;
