import React from "react";
import Logo from "../Logo.png"
export default function NavBar(){
    return(
        <>
            <div id="nav">
                <div id="navlogo">
                    <img id="piclogo" src={Logo} alt="Logo"></img>
                </div>
                <div id="navlink">
                    <ul>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    </ul>
                </div>
                <div id="navsearch">
                <input type="text" placeholder="Search"></input><button>Find</button>
                </div>
            </div>
        </>
    )
}