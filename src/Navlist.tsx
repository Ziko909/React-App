import React from "react";
import "./Navlist.css"



function Navlist() : JSX.Element {
    const navList : string[] = ["Home", "New Blog"];
    return (
        <ul className="navlist">
            {navList.map(link => <li key={link}><a href="">{link}</a></li>)}
        </ul>
    );
}

export default Navlist;