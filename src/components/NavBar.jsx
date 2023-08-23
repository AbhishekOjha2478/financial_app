import React from "react";
import Logo from "../Logo.png"
import { Link, Element } from 'react-scroll';

export default function NavBar(){
    return(
        <>
            <div id="nav">
                <div id="navlogo">
                    <img id="piclogo" src={Logo} alt="Logo"></img>
                </div>
                <div id="navlink">
                    <ul>
                    <li><Link to="section1" smooth={true} duration={500}>Section 1</Link></li>
                    <li><Link to="section2" smooth={true} duration={500}>Section 2</Link></li>
                    <li><Link to="section3" smooth={true} duration={500}>Section 3</Link></li>
                    </ul>
                </div>
                <div id="navsearch">
                <input type="text" placeholder="Search"></input><button>Find</button>
                </div>
            </div>
        </>
    )
}