import React from "react";
import Navlist from "./Navlist"
import "./Navbar.css"

function Navbar() : JSX.Element {
    return (
        <nav className="Navbar">
            <h1>Micro Blog</h1>
            <Navlist />
        </nav>
     );
}

export default Navbar;