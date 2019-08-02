import React, {Component} from 'react';
import Score from './hello';
import classes from './App.css';
import Popup from './popup';
import Header from './header';
class App extends Component{
state={
  ar:["images/breadtop.png","images/breadbottom.png"],
  sum:[0,0,0,0],
  total:[25],
  condition:false
}
  salad=()=>{
    let arr=[...this.state.ar];
    arr.splice(arr.length-1,0,"images/salad.png");
    let summ=[...this.state.sum];
    summ[0]=summ[0]+1;
    let totall=[...this.state.total];
    totall[0]=totall[0]+3;
   this.setState({
        ar:arr,
        sum:summ,
        total:totall
   })}
    bacon=()=>{
      let arr=[...this.state.ar];
      arr.splice(arr.length-1,0,"images/bacon.png");
      let summ=[...this.state.sum];
      summ[1]=summ[1]+1;
      let totall=[...this.state.total];
    totall[0]=totall[0]+3;
        this.setState({
             ar:arr,
             sum:summ,
             total:totall
        })
    }
    cheese=()=>{
      let arr=[...this.state.ar];
      arr.splice(arr.length-1,0,"images/cheese.png");
      let summ=[...this.state.sum];
      summ[2]=summ[2]+1;
      let totall=[...this.state.total];
    totall[0]=totall[0]+3;
     this.setState({
          ar:arr,
          sum:summ,
          total:totall
     })}
     meat=()=>{
      let arr=[...this.state.ar];
      arr.splice(arr.length-1,0,"images/meat.png");
      let summ=[...this.state.sum];
      summ[3]=summ[3]+1;
      let totall=[...this.state.total];
    totall[0]=totall[0]+3;
     this.setState({
          ar:arr,
          sum:summ,
          total:totall
     })}
    deletesalad=()=>{
      let totall=[...this.state.total];
      let summ=[...this.state.sum];
      let arr=[...this.state.ar];
      let index=arr.findIndex((item)=>{
        return(item==="images/salad.png")
  })
      if(arr.find((item)=>{
            return(item==="images/salad.png")
      })==="images/salad.png"){
        totall[0]=totall[0]-3;
        summ[0]=summ[0]-1;
        arr.splice(index,1);
      }
      else{
        console.log("no element to delete");
      }
      this.setState({
        ar:arr,
        sum:summ,
        total:totall
      })
      console.log(this.state.ar)
    }
    deletebacon=()=>{
      let totall=[...this.state.total];
      let summ=[...this.state.sum];
      let arr=[...this.state.ar];
      let index=arr.findIndex((item)=>{
        return(item==="images/bacon.png")
  })
      if(arr.find((item)=>{
            return(item==="images/bacon.png")
      })==="images/bacon.png"){
        totall[0]=totall[0]-3;
        summ[1]=summ[1]-1;
        arr.splice(index,1);
      }
      else{
        console.log("no element to delete");
      }
      this.setState({
        ar:arr,
        sum:summ,
        total:totall
      })
      console.log(this.state.ar)
    }
    deletecheese=()=>{
      let totall=[...this.state.total];
      let summ=[...this.state.sum];
      let arr=[...this.state.ar];
      let index=arr.findIndex((item)=>{
        return(item==="images/cheese.png")
  })
      if(arr.find((item)=>{
            return(item==="images/cheese.png")
      })==="images/cheese.png"){
        totall[0]=totall[0]-3;
        summ[2]=summ[2]-1;
        arr.splice(index,1);
      }
      else{
        console.log("no element to delete");
      }
      this.setState({
        ar:arr,
        sum:summ,
        total:totall
      })
      console.log(this.state.ar)
    }
    deletemeat=()=>{
      let totall=[...this.state.total];
      let summ=[...this.state.sum];
      let arr=[...this.state.ar];
      let index=arr.findIndex((item)=>{
        return(item==="images/meat.png")
  })
      if(arr.find((item)=>{
            return(item==="images/meat.png")
      })==="images/meat.png"){
        totall[0]=totall[0]-3;
        summ[3]=summ[3]-1;
        arr.splice(index,1);
      }
      else{
        console.log("no element to delete");
      }
      this.setState({
        ar:arr,sum:summ,total:totall
      })
      console.log(this.state.ar)
    }
    showpopup=()=>{
      let conditions=this.state.condition;
      if((this.state.sum[0]+this.state.sum[1]+this.state.sum[2]+this.state.sum[3])>0){
      conditions=!conditions;}
      else{
        alert("please add any item in the cart")
      }
      this.setState({
        condition:conditions
      })
    }
    showpopups=()=>{
      let conditions=this.state.condition;
      conditions=!conditions;
      this.setState({
        condition:conditions
      })
    } 
   
    componentWillUpdate(){
      console.log("will update");
    }
  
  render(){
    return(
      <div>
        <Header/>
      <div className={classes.s3}>
      {this.state.ar.map(list=>{
         return <Score sum={list}/>;
       })}
       </div>
      
      <div className={classes.s2}>
        <table className={classes.s4}>
        <h5>Total Amount: {this.state.total}</h5>
        <tbody>
          <tr>
            <td>Ingredient</td>
            <td>add</td>
            <td>remove</td>
            <td>number</td>

        
            </tr>
          <tr>
            <td>Salad</td>
      <td><button  onClick={this.salad}>+</button></td>
      <td><button onClick={this.deletesalad}>-</button></td>
      <td>{this.state.sum[0]}</td>
      </tr>
<tr>
<td>Bacon</td>
      <td><button onClick={this.bacon}>+</button></td>
      <td><button onClick={this.deletebacon}>-</button></td>
      <td>{this.state.sum[1]}</td>
      </tr>
      <tr>
      <td>cheese</td>
      <td><button onClick={this.cheese}>+</button></td>
      <td><button onClick={this.deletecheese}>-</button></td>
      <td>{this.state.sum[2]}</td>
      </tr>
      <tr>
      <td>Meat</td>
      <td><button onClick={this.meat}>+</button></td>
      <td><button onClick={this.deletemeat}>-</button></td>
      <td>{this.state.sum[3]}</td>
      </tr>
      </tbody>
    
      </table>
     
      </div>
      <button className={classes.s5 } onClick={this.showpopup}>Order Now</button>
      {
        this.state.condition?
        <div>
      <Popup button={this.showpopups} salad={this.state.sum[0]} bacon={this.state.sum[1]} cheese={this.state.sum[2]} meat={this.state.sum[3] }
      sum={this.state.total}/>
      </div>:null
      }
      </div>
    )
  }
}

export default App;