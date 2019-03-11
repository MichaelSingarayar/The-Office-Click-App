import React from "react";

function NavBar(props) {
    return (
        <>

        
        <div className="flex-container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <a className="navbar-brand" href="/">Click Game</a>
            
            <ul>
            
        
            <li className="nav-item">Click an image to begin!</li>

            <li className="nav-item">Score: {props.score} | Top Score: 0</li>



        </ul>
        
        </nav>
        </div>
        </>
    );
}

export default NavBar;
