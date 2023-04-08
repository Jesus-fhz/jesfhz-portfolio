import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.scss";
import Loading from "./Loading";

const Contact: React.FC = () => {
    const form = useRef() as React.MutableRefObject<HTMLFormElement>;
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
