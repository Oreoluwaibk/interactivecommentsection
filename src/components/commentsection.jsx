import React, {useEffect, useState} from "react";
import Header from "./header";
import CommentChange from "./commentcahnge";
import Body from "./body";
import Comments from "./comments";
import PersonalComment from "./personalcomment";



function CommentSection (props){

    let [valued, setValued] = useState(0);
    const [toggle, setToggle ] = useState(false);
    const [commentChange, setCommentChange ] = useState("");
    const [ comment, setComment ] = useState([]);

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

    function hide(){
        console.log("clicked");
        setToggle(!toggle)
    }
    function reply(e){
        console.log("replied")
        setComment((prev)=>{
            return [...prev, commentChange]
        });
        setCommentChange("");
        setToggle(false);
        e.preventDefault();
    }
    function textchange (event){
        const { value } = event.target;
        setCommentChange(()=>{
            return [value]
        })
    }
    function deleted (id){
        setComment((prev)=>{
            return prev.filter((com, index)=>{
                return id != index;
            })
        })
    }

    return <div className="commenting">
        <div className="commentsection">
            <div className={props.reply} > 
                <CommentChange 
                add ={add} 
                substract={substract} 
                value={valued} 
                />
            </div>

            <div className="post-position">
                <Header 
                hide={hide} 
                avatar ={props.avatar}
                username={props.username}
                date={props.date}
                />

                <Body 
                comments={props.comments}
                />
            </div>
           
        </div>
            {comment.map((com, index)=>{
                    return <div className="commenting"><PersonalComment 
                    key={index}
                    comments={com} 
                    date={`${new Date().getDay()} day ago`} 
                    username="julisomo"
                    avatar="/images/avatars/image-juliusomo.png"
                    delete={()=>{deleted(index)}}
                    /></div>
                })}
           
            
            {toggle && 
            <div className = "commentfo" >
                <Comments 
                cols={35} 
                value ={commentChange}
                textchange={textchange}
                butname ={props.butname}
                buttonclick={reply}
                /> 
            </div>}
    </div>
}

export default CommentSection;