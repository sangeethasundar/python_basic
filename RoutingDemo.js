import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect, BrowserRouter } from "react-router-dom";

class RoutingDemo extends React.Component {

Home = () => <h2> Home </h2>;

NewsFeed = () => <h2> News Feed </h2>;

render() {
    return (
      <Router>
        <React.Fragment>
            <nav>
                <Link to={'/'}> Home </Link><br />
                <Link to={'/news'}> News feed </Link><br />
                <Link to={'/contact'}> Contact </Link><br />
            </nav>
            <div>
                <Route exact path="/" render={ () => (<Redirect to="/home"/>)}/>
                <Route path="/home" component={this.Home}/>
                <Route path="/news" component={this.NewsFeed}/>
                <Route path="/contact" render={() => <h3>Contact Us</h3>}/>
            </div>
        </React.Fragment>
      </Router>   
    );
}
}

export default RoutingDemo;
