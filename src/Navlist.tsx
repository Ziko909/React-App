import React from "react";
import "./Navlist.css"
import { Link } from "react-router-dom";



function Navlist() : JSX.Element {
    const navList : string[] = ["Home", "New Blog"];
    const map = new Map();

    map.set(navList[0], '/');
    map.set(navList[1], '/create');

    return (
        <ul className="navlist">
            {navList.map(link => <li key={link}><Link to={map.get(link)}>{link}</Link></li>)}
        </ul>
    );
}

export default Navlist;