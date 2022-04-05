import React, {useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import '../styles/contact.scss';
import Loading from "./Loading";


const Contact: React.FC = () => {
    const form  = useRef() as React.MutableRefObject<HTMLFormElement>;
    const [message,setMessage] = useState<string | false>('');
    const [loading, setLoading] = useState<boolean>(false);
    const sendEmail = (e: React.FormEvent) => {
      setLoading(true);
      e.preventDefault();
      emailjs.sendForm(`${process.env.REACT_APP_EMAIL_SERVICE_ID}`, `${process.env.REACT_APP_EMAIL_TEMPLATE_ID}`, form.current,`${process.env.REACT_APP_EMAIL_USER_ID}`)
        .then((result) => {
            setMessage('Your email has been sent. I will get back to you as soon as posible.')
            setLoading(false);
        }, (error) => {
            console.log(error);
            setMessage('Sorry, something went wrong.')
            setLoading(false);
        });
    }
    return( 
        <section className="contact main-setting" id="contact">
            <span>
                <h1 className="title-panels"> Contact</h1>
            </span>
            <div className="panels">
                <div className="form-info">
                    <p> Get in touch or email me: <span><a href="mailto: dev@jesusflores.io"> dev@jesusflores.io </a></span></p>
                    <form ref={form}  onSubmit={sendEmail}>
                        <input type="text" name="user_name"  placeholder="Name" required={true} />
                        <input type="email" name="user_email"  placeholder="Email" required={true} />
                        <input type="text" name="user_subject" placeholder="Subject" required={true}/>
                        <textarea name="message"  placeholder="Message..." required={true} id="" rows={4}></textarea>
                        <div className="catpcha">
                            <div className="g-recaptcha" data-sitekey={`${process.env.REACT_APP_CAPTCHA}`}></div>
                        </div>
                        <div className="btn-submit"> 
                            <button type="submit" className="btn">
                                Send
                            </button>
                        </div>
                    </form>
                    {
                        message &&  
                        <div className="message">
                            <p>{message}</p>
                        </div>
                    }
                    { loading && <Loading/> }
               </div>
            </div>
        </section>
    )

}

export default Contact