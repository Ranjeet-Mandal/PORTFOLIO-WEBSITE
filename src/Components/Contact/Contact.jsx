import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import phone_icon from '../../assets/call_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import { useState } from 'react';

const Contact = ()=>{
    const [result, setResult] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "d329399b-66b2-4e74-9d3a-6c91ea2c72dd");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          alert("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
    

    return <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm currently avaliable to take on new projects, so feel<br></br>  free to send me a message about anything that you want me to work on. You  can contact anytime.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" />
                    <p>rjdevdsa@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={phone_icon} alt="" />
                    <p>7500765048</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" />
                    <p>Uttar Pradesh 262302</p>
                </div>
            </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input autoCapitalize='none' autoComplete='off' type="text" placeholder='Enter Your Name' />
                <label htmlFor="">Enter Email</label>
                <input autoCapitalize='none' autoComplete='off' type="email" placeholder='Type Your Email Here' />
                <label htmlFor="">Type Your Message here</label>
                <textarea autoCapitalize='none' autoComplete='off' rows={8}>Type your message </textarea>
                <button type='submit' className='submit-now'>Submit Now</button>
            </form>
        </div>

    </div>
}
export default Contact;