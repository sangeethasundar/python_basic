import React from 'react';
import logo from './logo.svg';

export default class HelloComp extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        };
    }
   
    incrementCounter = () => {
        //this.setState({counter : this.state.counter + 1 });
        this.setState( (prevState) => {
            return {counter:prevState.counter+2}
        });

        this.setState((prevState) => {
            return {counter: prevState.counter + 2}
        });

        this.setState((prevState) => {
            return {counter: prevState.counter + 1}
        });
        console.log("Button Clicked," , this.state.counter);
};

    
    render() {
        return (
            <div>
                <button onClick={this.incrementCounter}> Click </button>
                <p>{this.state.counter}</p>
            </div>
        );
    }
}
