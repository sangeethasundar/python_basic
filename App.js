import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect, BrowserRouter } from "react-router-dom";

class App extends React.Component {

    constructor() {
        super();
        //this.counter = 0; //added to state now!
        this.state = { // state should be assigned an Object Literal with relevant attributes
            s1: '',
            counter: 1,
            name: 'React'
        };
    }
    incrementCounter = () => {
        //this.state.counter += 1; // trying to increment(or mutate) the state! //not possible!
        if(this.state.counter===0){
        this.setState({counter: this.state.counter+1})
        this.setState({s1:""})
        }
        else if(this.state.counter===1){
          this.setState({counter: this.state.counter-1})
        this.setState({s1: 'Hello react!'})
        }
        //console.log("Button Clicked," , this.state.counter, "times" );
    };

    componentWillMount(){
      this.setState({name:'javascript'})
      console.log("INside CWM: "+this.state.name);
    }

    componentDidMount(){
      this.setState({name:'java'})
      console.log("INside CDM: "+this.state.name);
    }


    render() {
    //     // return (
    //     //     <div>
    //     //         <button className="btn btn-success" onClick={this.incrementCounter}> Show text </button><br/><br/>
    //     //         <h3 className="text-primary"><i>{this.state.s1}</i></h3><br/><br/>
    //     //         <button className="btn btn-danger" onClick={this.incrementCounter}> Hide text </button>
    //     //     </div>
    //     // );

        console.log("inside render: "+this.state.name);
         return (
           <div>
             {this.state.name}
           </div>
         )
     }
}

export default App;
