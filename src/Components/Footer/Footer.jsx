import './Footer.css';
import footer_logo from "../../assets/rj.png";
import user_icon from "../../assets/user_icon.svg";


const Footer = ()=>{
    return <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>I am a passionate React developer with a solid foundation in web development.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your Email' />
                </div>
                <div className="footer-subscribe">
                    Subscribe
                </div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <div className="footer-bottom-left">
            <p>© 2024 Rj. All rights reserved.</p>
            </div>
            <div className="footer-bottom-right">
                <p>Terms of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with Me</p>
            </div>
        </div>
    </div>
}
export default Footer;