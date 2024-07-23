// import React, { useRef, useState } from "react";
// import  './Navbar.css';
// // import logo from '../../assets/Rj.jpg';
// import logo from '../../assets/rj.png';
// import nav_underline from "../../assets/nav_underline.svg";
// import menu_open from '../../assets/menu_open.svg';
// import AnchorLink from 'react-anchor-link-smooth-scroll';
// import menu_close from '../../assets/menu_close.svg';


// const Navbar = ()=>{
//     const [menu , setMenu] = useState("home");
//     const menuRef = useRef();

//     const openMenu = ()=>{
//         menuRef.current.style.right = "0";
//     }
//     const closeMenu = ()=>{
//         menuRef.current.style.right = "-350px";
//     }

//     return(
//         <div id="navbar" className="navbar">
//            <div className="logo"><img src={logo} alt="" /></div>
//            <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
//             <ul ref='menuRef' className="nav-menu">
//                 <img className="nav-mob-close" src={menu_close} onClick={closeMenu} alt="" />
//                 <li><AnchorLink className="anchor-link"  href="#home" ><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="about"?<img src={nav_underline} alt=""/>:<></>}</li>
//                 <li><AnchorLink className="anchor-link" offset={50} href="#about" ><p onClick={()=>setMenu("about")}>About</p></AnchorLink>{menu==="service"?<img src={nav_underline} alt=""/>:<></>}</li>
//                 <li><AnchorLink className="anchor-link" offset={50} href="#services" ><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="portfolio"?<img src={nav_underline} alt=""/>:<></>}</li>
//                 <li><AnchorLink className="anchor-link" offset={50} href="#work" ><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==="contact"?<img src={nav_underline} alt=""/>:<></>}</li>
//                 <li><AnchorLink className="anchor-link" offset={50} href="#contact" ><p onClick={()=>setMenu("contact")}></p>Contact</AnchorLink>{menu==="home"?<img src={nav_underline} alt=""/>:<></>}</li>
//             </ul>
//             <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#contact" >Connect With Me<AnchorLink/></AnchorLink></div>
//         </div>
//     )
// }
// export default Navbar;


// import React, { useRef, useState } from "react";
// import './Navbar.css';
// // import logo from '../../assets/Rj.jpg';
// import logo from '../../assets/rj.png';
// import nav_underline from "../../assets/nav_underline.svg";
// import menu_open from '../../assets/menu_open.svg';
// import AnchorLink from 'react-anchor-link-smooth-scroll';
// import menu_close from '../../assets/menu_close.svg';

// const Navbar = () => {
//     const [menu, setMenu] = useState("home");
//     const menuRef = useRef(null);

//     const openMenu = () => {
//         menuRef.current.style.right = "0";
//     }

//     const closeMenu = () => {
//         menuRef.current.style.right = "-350px";
//     }

//     return (
//         <div id="navbar" className="navbar">
//             <div className="logo"><img src={logo} alt="" /></div>
//             <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
//             <ul ref={menuRef} className="nav-menu">
//                 <img className="nav-mob-close" src={menu_close} onClick={closeMenu} alt="" />
//                 <li><AnchorLink className="anchor-link" href="#home" ><p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu === "about" ? <img src={nav_underline} alt="" /> : null}</li>
//                 <li><AnchorLink className="anchor-link" offset={50} href="#about" ><p onClick={() => setMenu("about")}>About</p></AnchorLink>{menu === "service" ? <img src={nav_underline} alt="" /> : null}</li>
//                 <li><AnchorLink className="anchor-link" offset={50} href="#services" ><p onClick={() => setMenu("services")}>Services</p></AnchorLink>{menu === "portfolio" ? <img src={nav_underline} alt="" /> : null}</li>
//                 <li><AnchorLink className="anchor-link" offset={50} href="#work" ><p onClick={() => setMenu("work")}>Portfolio</p></AnchorLink>{menu === "contact" ? <img src={nav_underline} alt="" /> : null}</li>
//                 <li><AnchorLink className="anchor-link" offset={50} href="#contact" ><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{menu === "home" ? <img src={nav_underline} alt="" /> : null}</li>
//             </ul>
//             <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#contact" >Connect With Me<AnchorLink/></AnchorLink></div>
//         </div>
//     );
// }

// export default Navbar;

// import React, { useRef, useState } from "react";
// import './Navbar.css';
// // import logo from '../../assets/Rj.jpg';
// import logo from '../../assets/rj.png';
// import nav_underline from "../../assets/nav_underline.svg";
// import menu_open from '../../assets/menu_open.svg';
// import AnchorLink from 'react-anchor-link-smooth-scroll';
// import menu_close from '../../assets/menu_close.svg';

// const Navbar = () => {
//     const [menu, setMenu] = useState("home");
//     const menuRef = useRef(null);

//     const openMenu = () => {
//         menuRef.current.style.right = "0";
//     }

//     const closeMenu = () => {
//         menuRef.current.style.right = "-350px";
//     }

//     return (
//         <div id="navbar" className="navbar">
//             <div className="logo"><img src={logo} alt="Logo" /></div>
//             <img src={menu_open} onClick={openMenu} alt="Open Menu" className="nav-mob-open" />
//             <ul ref={menuRef} className="nav-menu">
//                 <img className="nav-mob-close" src={menu_close} onClick={closeMenu} alt="Close Menu" />
//                 <li>
//                     <AnchorLink className="anchor-link" href="#home">
//                         <p onClick={() => setMenu("home")}>Home</p>
//                     </AnchorLink>
//                     {menu === "home" ? <img src={nav_underline} alt="Underline" /> : null}
//                 </li>
//                 <li>
//                     <AnchorLink className="anchor-link" offset={50} href="#about">
//                         <p onClick={() => setMenu("about")}>About</p>
//                     </AnchorLink>
//                     {menu === "about" ? <img src={nav_underline} alt="Underline" /> : null}
//                 </li>
//                 <li>
//                     <AnchorLink className="anchor-link" offset={50} href="#services">
//                         <p onClick={() => setMenu("services")}>Services</p>
//                     </AnchorLink>
//                     {menu === "services" ? <img src={nav_underline} alt="Underline" /> : null}
//                 </li>
//                 <li>
//                     <AnchorLink className="anchor-link" offset={50} href="#work">
//                         <p onClick={() => setMenu("work")}>Portfolio</p>
//                     </AnchorLink>
//                     {menu === "work" ? <img src={nav_underline} alt="Underline" /> : null}
//                 </li>
//                 <li>
//                     <AnchorLink className="anchor-link" offset={50} href="#contact">
//                         <p onClick={() => setMenu("contact")}>Contact</p>
//                     </AnchorLink>
//                     {menu === "contact" ? <img src={nav_underline} alt="Underline" /> : null}
//                 </li>
//             </ul>
//             <div className="nav-connect">
//                 <AnchorLink className="anchor-link" offset={50} href="#contact">
//                     Connect With Me<AnchorLink />
//                 </AnchorLink>
//             </div>
//         </div>
//     );
// }

// export default Navbar;



import React, { useRef, useState } from "react";
import './Navbar.css';
import logo from '../../assets/rj.png';
import nav_underline from "../../assets/nav_underline.svg";
import menu_open from '../../assets/menu_open.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const menuRef = useRef(null);

    const openMenu = () => {
        menuRef.current.style.right = "0";
    }

    const closeMenu = () => {
        menuRef.current.style.right = "-350px";
    }

    return (
        <div id="navbar" className="navbar">
            <div className="logo"><img src={logo} alt="Logo" /></div>
            <img src={menu_open} onClick={openMenu} alt="Open Menu" className="nav-mob-open" />
            <ul ref={menuRef} className="nav-menu">
                <img className="nav-mob-close" src={menu_close} onClick={closeMenu} alt="Close Menu" />
                <li>
                    <AnchorLink className="anchor-link" href="#home">
                        <p onClick={() => setMenu("home")}>Home</p>
                    </AnchorLink>
                    {menu === "home" && <img src={nav_underline} alt="Underline" />}
                </li>
                <li>
                    <AnchorLink className="anchor-link" offset={50} href="#about">
                        <p onClick={() => setMenu("about")}>About</p>
                    </AnchorLink>
                    {menu === "about" && <img src={nav_underline} alt="Underline" />}
                </li>
                <li>
                    <AnchorLink className="anchor-link" offset={50} href="#services">
                        <p onClick={() => setMenu("services")}>Services</p>
                    </AnchorLink>
                    {menu === "services" && <img src={nav_underline} alt="Underline" />}
                </li>
                <li>
                    <AnchorLink className="anchor-link" offset={50} href="#work">
                        <p onClick={() => setMenu("work")}>Portfolio</p>
                    </AnchorLink>
                    {menu === "work" && <img src={nav_underline} alt="Underline" />}
                </li>
                <li>
                    <AnchorLink className="anchor-link" offset={50} href="#contact">
                        <p onClick={() => setMenu("contact")}>Contact</p>
                    </AnchorLink>
                    {menu === "contact" && <img src={nav_underline} alt="Underline" />}
                </li>
            </ul>
            <div className="nav-connect">
                <AnchorLink className="anchor-link" offset={50} href="#contact">
                    Connect With Me
                </AnchorLink>
            </div>
        </div>
    );
}

export default Navbar;
