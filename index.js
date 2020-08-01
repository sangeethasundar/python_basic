import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Exc2 from './Exc2';
import Exc4 from './Exc4';
import { BrowserRouter as Router, Route, Switch, Link, Redirect, BrowserRouter } from "react-router-dom";
import RoutingDemo from './RoutingDemo';
import HelloComp from './HelloComp';
import Lifecysledemo from './Lifecysledemo';
import Exc6 from './Exc6';
import Assignment1 from './Assignment1';
import CreatingComponentDemo from './CreatingComponentDemo';
import Exc3 from './Exc3';
import NestedComponentDemo from './NestedComponentDemo';
import Assignment2 from './Assignment2';
import RoutingDemoExc from './RoutingDemoExc';
import Exc5 from './Exc5';


const ele=<h1 className="display-1">assignment1</h1>

const Hello= (data) => <h1>hello {data.name}, welcome {data.greeting}</h1> 

const tbl=[
  {name:"PHP",Category:"Server Scripting",Author:"Richard James"},
  {name:"Angular 6",Category:"Web Development",Author:"kirk Hamett"},
  {name:"Node.js",Category:"Server side JS",Author:"Ryan Dhal"},
  {name:"Bootstrap",Category:"UI Development",Author:"Mark Hill"},
  {name:"Python",Category:"Programming",Author:"Guido van Rossum"}
];

//Assignment1
function generatediv(){
  const tblbody=tbl.map(
    (row1) => {
      return(
        <tr>
          <td>{row1.name}</td>
          <td>{row1.Category}</td>
          <td>{row1.Author}</td>
        </tr>
      )
    }
  )
  return(
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <center><h4 className="text-primary">Featured courses</h4></center>
          <div className="container">
            <div className="row">
                <div className="card col-md-4 shadow">
                  <center><h4 className="card-text">HTML5</h4></center>
                  <div className="card-body">
                  <p className="card-text">Author: Dan Brown</p>
                  <p className="card-text">Category: Web</p>
                  <p className="card-text">Development</p>
                  <button className="btn btn-success" type="submit">Summary</button>
                </div></div>
                <div className="card col-md-4 shadow">
                  <center><h4 className="card-text">CSS</h4></center>
                  <div className="card-body">
                  <p className="card-text">Author: Robin Cook</p>
                  <p className="card-text">Category: Web</p>
                  <p className="card-text">Development</p>
                  <button className="btn btn-success" type="submit">Summary</button>
                </div></div>
                <div className="card col-md-4 shadow">
                  <center><h4 className="card-text">JavaScript</h4></center>
                  <div className="card-body">
                  <p className="card-text">Author: Dan Brown</p>
                  <p className="card-text">Category: Web</p>
                  <p className="card-text">Development</p>
                  <button className="btn btn-success" type="submit">Summary</button>
                </div></div></div></div>
                </div>
        <div className="col-md-6">
        <center><h4 className="text-dark">Course Catalog</h4></center>
        <table cellspacing="20" cellpadding="12" class="Table table-dark table-striped">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Category</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            {tblbody}
          </tbody>
        </table>
        </div> 
      </div>
    </div>
  )
}

ReactDOM.render(<RoutingDemoExc/>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
