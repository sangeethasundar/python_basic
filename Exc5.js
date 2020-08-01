import React from 'react';
import logo from './logo.svg';
import './App.css';
import Childexc4 from './Childexc4';
import { Link, BrowserRouter, Router, Route, Switch, Redirect } from 'react-router-dom';
import Card from './Component/Card';

class Exc5 extends React.Component {

    add= () => <h2 className="text-danger">Sorry! We are still working in this feature</h2>

    home= () => <h2 className="text-success">Keep Checking! New Books added every week!</h2>

    contact= () => {
        return(
            <div>
                <h1 className="text-primary">Get in touch with us</h1><br/>
                <h1>We are open from 9AM to 9PM all 7 days</h1>
                <h1>Or contact US at</h1>
                <ul>
                    <li>Email: xxx@gmail.com</li>
                    <li>Call: +91 9898989898</li>
                </ul>
            </div>
        )
    }

    render() {
        return (
            <BrowserRouter>
            <React.Fragment>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                <Link class="navbar-brand" to="/">Logo</Link>

                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link class="nav-link" to="/all">View All Books</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/addBook">Add a Book</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/contact">Contact US</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route exact path="/" render={ () => (<Redirect to="/home"/>) }/>
                <Route path="/home" component={this.home}/>
                <Route path="/all" render={ () => (<Redirect to="/home"/>) }/>
                <Route path="/addBook" component={this.add}/>
                <Route path="/contact" component={this.contact}/>
            </Switch>
            </React.Fragment>
            </BrowserRouter>
        )
    }
}

export default Exc5;