import React from "react";
import "../../src/index.css"
import Reply from "./reply";

function Header (props){
    return <div className="header">
    <div className="details">
    <img src={props.avatar} className="avatar"/>
    <h4>{props.username}</h4>
    <p>{props.date}</p>
    </div>
    <Reply onhide = {props.hide}/>
</div>
}

export default Header;