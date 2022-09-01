import React from "react";


function Button (props){
    return <div>
        <button className="reply-button" onClick={props.buttonclick}>{props.butname}</button>
    </div>
}

export default Button;