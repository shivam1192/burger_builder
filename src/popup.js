import React from 'react';
import classes from './App.css';
const popup =(props)=>{
    return(
        
      <div className={classes.s6}>

         <h3>Order Summary</h3>
         <ul>
             <li>Salad:{props.salad}</li>
             <li>Bacon:{props.bacon}</li>
             <li>Cheese:{props.cheese}</li>
             <li>Meat:{props.meat}</li>
             </ul>
             <h4><b>total prize:{props.sum}</b></h4>
             <h4>Are you wish to Continue?</h4>
             <h4 onClick={props.button} className={classes.s8}>Cancel</h4>
             <h4 onClick={props.button} className={classes.s8}>Continue</h4>
      </div>

    )
}

export default popup;