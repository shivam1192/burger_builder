import React from "react";
const  person =(props)=>{
return (
    <div className="s1">
<p onClick={props.click}>my name is <div className="s4">{props.name} </div>and my hobby is {props.hobby}</p>
<p onClick={props.click}>{props.children}</p>
<input type="text" onChange={props.change} className="s3" ></input>
</div>
    );
};

export default person;
