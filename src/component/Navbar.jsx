import React, {useEffect, useState} from 'react';
import { Link} from "react-router-dom";
import "../component/navbar.css"

const Navbar = () => {

    const [toggle, setToggle] = useState("")
    const ul = document.querySelector("ul")
    const bar = document.querySelector("#bar")

    const toggleNav = () =>{
        setToggle(bar)
    }

    
    return (
        <div className ="navbar-box">
            <nav  className="header" id="nav">
                <div className="logo">
              <Link to="/" >  <h1> EmmaxImg</h1></Link>
                </div>
                    <ul className="navlink" >
                        <Link to="/" ><li className="active">Home</li></Link>
                        <Link to="/about" > <li>About</li> </Link>
                        <Link to="/contact" ><li>Contact</li></Link>
                        <Link to="/upload" ><li>upload</li></Link>
                    </ul>
                    <div className="bar" id={toggle ? ul.classList.toggle("showToggle") : ""} onClick={toggleNav}>
                        <div className="bar1"></div> 
                        <div className="bar1"></div>
                        <div className="bar1"></div>
                    </div>
            </nav>
              
            
        </div>
    );
}

export default Navbar;
