import React, {useState} from "react";
import Personalheader from "./personalheader";
import CommentChange from "./commentcahnge";
import Body from "./body";
import Comments from "./comments";
import { set, update } from "lodash";



function PersonalComment (props){

    let [valued, setValued] = useState(0);
    const [toggle, setToggle ] = useState(false);
    const [body, setBody ] = useState(true);
    const [comment, setComment ] = useState(props.comments);
    const [setcomment, setSetcomment ] = useState([props.comments])

    function add(){
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
        setToggle(!toggle);
    }
    function edit(){
        setBody(!body);
    }

    function update(e){
        console.log("updated");
        setSetcomment(()=>{
            return [comment]
        });
        setBody(true);
        e.preventDefault()
    }
    function textchange(event){
        const {value, name } = event.target;
        console.log(value);
        setComment((prev) =>{
            return [value]
        })
    }
    

    return <div className="commenting">
        {body ? 
        <div className="commentsection">
        <div className={props.reply} > 
        <CommentChange 
            add ={add} 
            substract={substract} 
            value={valued} />
        </div>

        <div className="post-position">
        <Personalheader
            hide={hide} 
            avatar ={props.avatar}
            username={props.username}
            date={props.date}
            edit={edit}
            delete={()=>{props.delete(props.id)}}
        />
        <Body 
            comments={setcomment}
        />
        </div>
        </div> : 
        <div className="commentsection">
            <Comments value={comment} 
            butname="UPDATE" cols={35} 
            buttonclick={update}
            textchange={textchange}    
            />
        </div>}
    </div>
}

export default PersonalComment;