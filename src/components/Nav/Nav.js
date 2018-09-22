import React from "react";
import "./Nav.css";

const Nav = props => (
    <nav> 
        
        <div className="d-flex justify-content-between">
        <div className="style"> 
        <a href="/">{props.title}</a>
        </div>

        <div id="wl">{props.winLose} </div>

        <div id="score"> Your Score: {props.score}</div>

        <div id="high-scor">High Score: {props.highScore} </div>
        </div>
    </nav>

)

export default Nav;