import React, {useEffect, useState} from 'react';
import { Link} from "react-router-dom";
import "../component/navbar.css"

const Navbar = () => {

    const [toggle, setToggle] = useState(false)
    const toggleNav = () => setToggle(!toggle)
    const closeNav = () => setToggle(false)
    // fixed navbar
    
    
    const [header, setHeader] = useState(false)
    const handleHeader = () => {
    
            if(window.pageYOffset >  100){
                setHeader(true)
                
            }else{
                setHeader(false)
            }
    
    }
 
      window.addEventListener("scroll", handleHeader)
   


    
    return (
        <div className ={header ? "navbar-box header-nav" : "navbar-box"}>
            <nav  className="header" id="nav"  >
                <div className="logo">
              <Link to="/" >  <h1> EmmaxImg</h1></Link>


                </div>
                    <ul className={toggle ? "navlink showToggle" :  "navlink"}>
                        <Link to="/" ><li className="active" onClick="closeNav()">Home</li></Link>
                             <li onClick="closeNav()">
                        <Link to="/about" >
                                 About
                         </Link>
                                 
                                 </li>
                        <Link to="/contact" ><li onClick="closeNav()">Contact</li></Link>
                        <Link to="/upload" ><li onClick="closeNav()">upload</li></Link>
                    </ul>
                    <div className="bar"  onClick={toggleNav}>
                        <div className="bar1"></div> 
                        <div className="bar1"></div>
                        <div className="bar1"></div>
                    </div>
            </nav>
              
            
        </div>
    );
}

export default Navbar;
