import React from "react";


function CommentChange (props) {
    return <div className="comment-change">
    <div className="each add" onClick={props.add}>+</div>
    <div className="each value">{props.value}</div>
        <div className="each substract" onClick={props.substract}>-</div>
    </div>
}

export default CommentChange;