import React from"react";
import classes from './App.css';
const score=(props)=>{
    return(
        <div>
            <div className={classes.s1}>
         <img src={props.sum} alt="ss"></img>
         </div>
    </div>
    )
}
export default score;