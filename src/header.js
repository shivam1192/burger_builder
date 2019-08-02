import React,{Component} from 'react';
import classes from './App.css';
class header extends Component{
    state={
        ar:[classes.s15],
        sum:0
    }
      slide=()=>{
            let summ=this.state.sum;
            let arr=this.state.ar;
            summ++;
            if(summ%2!==0){
                arr=[classes.s14];
            }
            else{
                arr=[classes.s15]
            }
            this.setState({
                sum:summ,
                ar:arr
            })
      }
    render(){
       return(
           <div>
               <header  className={classes.s9}>
                   <div className={classes.s18} onClick={this.slide}>
                   <div className={classes.s19} ></div>
                   <div className={classes.s19}></div>
                   <div className={classes.s19}></div>
                   </div>    
                   <div className={classes.s10}>
                   <img src="images/logo.png" alt="logo"></img>
                   </div>
                   <nav>
                       <ul  className={classes.s11}>
                           <li className={classes.s12}><a href="/">Burger builder</a></li> 
                           <li className={classes.s12}><a href="/checkout">checkout</a></li> 
                              </ul>
                   </nav>
                   </header> 
                <div className={classes.s13+' '+[this.state.ar]}>
                <button onClick={this.slide} className={classes.s20}>X</button>   
                <div className={classes.s16}>
                <img src="images/logo.png" alt="logo"></img>
            </div>
                <nav>
                <a href="/"><div className={classes.s17}>    Burger builder</div></a>
                <a href="/"><div className={classes.s17}>    Burger builder</div></a>  
                </nav>
                </div>
                </div> 
       )
    }
}
export default header;