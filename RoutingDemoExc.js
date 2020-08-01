import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch, Link, Redirect, BrowserRouter } from "react-router-dom";
import Card from './Component/Card';
import EditEmployee from './Component/EditEmployee';

class RoutingDemoExc extends React.Component {

render() {
    return (
      <Router>
            <switch>
                <Route exact path="/" render={ () => (<Redirect to="/card"/>)}/>
                <Route path="/card" component={Card}/>
                <Route path="/edit/:empId" component={EditEmployee}/>
            </switch>
      </Router>   
    );
}
}

export default RoutingDemoExc;
