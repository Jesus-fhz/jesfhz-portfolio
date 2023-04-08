import React, { useRef } from "react";
import "../styles/contact.scss";

const Contact: React.FC = () => {
    return (
        <section className='contact main-setting' id='contact'>
            <span>
                <h1 className='title-panels'> Contact</h1>
            </span>
            <div className='panels'>
                <div className='form-info'>
                    <p>
                        You can reach me on my email:{" "}
                        <span>
                            <a href='mailto: dev@jesusflores.io'>
                                {" "}
                                dev@jesusflores.io{" "}
                            </a>
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
