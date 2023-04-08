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
                    I hold a <span>Bachelor's</span> degree in{" "}
                    <span>Computer Science</span> and am a{" "}
                    <span>Software Engineering graduate</span> from General
                    Assembly, boasting over 3 years of commercial experience as
                    a Full-Stack Developer. Possessing a solid foundation in
                    both front-end and back-end development, I am committed to
                    creating efficient, scalable, and user-centric solutions
                    that drive <span>real-world impact</span> and success.
                </p>
            </div>
        </section>
    );
};

export default About;
