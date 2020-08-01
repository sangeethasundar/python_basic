import React from 'react';
import logo from './logo.svg';
import './App.css';

class Exc3 extends React.Component {

    constructor() {
        super();
        this.state = {
            temp:2
        };
    }

    fn1 = () => {
        this.setState({msg:"Hello React!"})
    }

    fn2 = () => {
        this.setState({msg:null})
    }

    render() {
        if(this.state.temp===1)
            var msg="Hello React!"
        else if(msg===2)
            var msg=null
        return (
            <div className="container">
                <br/>
                <div className="row">
                <button className="btn btn-success btn-lg" onClick={ () => {this.setState ({temp:1})} }>Show text</button> 
                </div>
                <div className="row">
                <h2 className="text-primary">{msg}</h2>
                </div>
                <div className="row">
                <button className="btn btn-danger btn-lg" onClick={ () => {this.setState ({temp:2})} }>Hide text</button>
                </div>
             </div>
        )
    }
}

export default Exc3;