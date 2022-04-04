import React, {useRef} from "react";
import emailjs from '@emailjs/browser';
import '../styles/contact.scss';


const Contact: React.FC = () => {
    const form: any = useRef();
    const sendEmail = (e: any) => {
      e.preventDefault();
      emailjs.sendForm(`${process.env.REACT_APP_EMAIL_SERVICE_ID}`, `${process.env.REACT_APP_EMAIL_TEMPLATE_ID}`, form.current,`${process.env.REACT_APP_EMAIL_USER_ID}`)
        .then((result) => {
            console.log(result);
        }, (error) => {
            console.log(error);
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
                        <textarea name="message"  placeholder="Message..." required={true} id="" cols={30} rows={10}></textarea>
                        <div className="btn-submit"> 
                            <div className="g-recaptcha" data-sitekey={`${process.env.REACT_APP_EMAIL_CAPTCHA}`}></div>
                            <button type="submit" className="btn">
                                Send
                            </button>
                        </div>
                    </form>
               </div>
            </div>
        </section>
    )

}

export default Contact