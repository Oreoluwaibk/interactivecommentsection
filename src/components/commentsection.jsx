import React, {useState} from "react";
import Header from "./header";
import CommentChange from "./commentcahnge";
import Body from "./body";



function CommentSection (props){

    let [valued, setValued] = useState(0);

    function add(){
        // setValued()
        console.log("clicked");
        setValued(valued + 1)
    }
    function substract(){
        setValued (()=>{
            if(valued < 1){
            return valued = 0
        }else{
            return valued - 1
        }
            
        });
    }

    return <div className="commentsection">
        <div className={props.reply} > 
        <CommentChange 
        add ={add} 
        substract={substract} 
        value={valued} />
        </div>

        <div className="post-position">
        <Header 
        // hide={hide} 
        avatar ={props.avatar}
        username={props.username}
        date={props.date}
        />
        <Body 
        comments={props.comments}
        />
        </div>
    </div>
}

export default CommentSection;