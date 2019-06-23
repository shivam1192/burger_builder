import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
state={
  person:[
  {key:"A",name:"pugians", hobby:"react"},
  {key:"B",name:"shivam", hobby:"nodejs"}
  ],
  toggle:false
};

setname=(event,key)=>{
  var personsindex = this.state.person.findIndex(p=>{
    return p.key===key;
  });
var personn={...this.state.person[personsindex]};
personn.name=event.target.value;
var persons=[...this.state.person];
persons[personsindex]=personn;
this.setState({person:persons});
};
togglestate=()=>{
    const too=this.state.toggle;
    this.setState({toggle:!too});
};
delete=(index)=>{
  var person=this.state.person;
  person.splice(index,1);
  this.setState({person:person});
};
  render(){
    const style ={
      border: "6px black double",
      backgroundColor: "green",
    color:"white",
    cursor: "pointer"
    }
    let person=null;
    if(this.state.toggle){
     person= <div>{
       this.state.person.map((person,index)=>{
        return <Person 
        name={person.name} 
        hobby={person.hobby}
        click={()=>this.delete(index)} 
        key={person.key} 
        change={(event)=>this.setname(event,person.key)} 
        />
       })
     } 
</div>
style.backgroundColor="red";
    }
  return (
    <div className="App">
    <h1>Welcome to react</h1>
    <p>hello in this world</p>
    <button onClick={this.togglestate} style={style}><b>click me</b></button>
     {person}
    </div>
  )
  };
}

export default App;
