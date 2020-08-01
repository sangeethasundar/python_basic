import React from 'react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from '@testing-library/react';

class CreatingComponentDemo extends React.Component{

    constructor(){
        super();
        const emp1= {
            "empId":100,
            "empName":"Jack",
            "age":30,
            "salary":50000,
            "img":"MaleEmployee.jpeg",
            "acheivements":"Won 3 Bravos"
        }
        const emp2= {
            "empId":101,
            "empName":"Jane",
            "age":24,
            "salary":50000,
            "img":"FemaleEmp.png",
            "acheivements":"Won 5 Bravos"
        }

        this.empArr=[emp1,emp2];

        this.state={
            empAch:null
        }
    }

    viewAch = (emp) => {
        this.setState({empAch:emp.acheivements});
    }

    displayEmp = () => {
        return (
            <div className="card-columns"> 
            {this.empArr.map( (emp) => {
            if(emp.age<25)
                var note="-Fresher"
            if(this.state.empAch===emp.empId)
                var acheivements=emp.acheivements
            return (
                <div className="card shadow" style={{"width":300,"height":600}}>
                    <img className="card-img-top" src={emp.img} alt="emp1"/>
                    <h4 className="card-title text-center">{emp.empName}</h4>
                    <p className="card-text text-left" style={{"fontSize":"large"}}>Id: {emp.empId}</p>
                    <p className="card-text text-left" style={{"fontSize":"large"}}>Age: {emp.age}</p>
                    <p className="card-text text-left" style={{"fontSize":"large"}}>Salary: {emp.salary}<span className="text-primary">{note}</span></p>
                    <p className="card-text text-center text-success" style={{"fontSize":"large"}}>{acheivements}</p>
                    <center> 
                        <button className="btn btn-primary">Edit Details</button>
                        <button className="btn btn-success" onClick={ () => {this.setState({empAch:emp.empId})}}>view Details</button>
                    </center>
                </div>
            )
                                            })}
            </div>
        )
    }

    render() {
        return (
            <div className="container">
                <br/>
                <div className="row">
                    <div className="offset-2">
                {this.displayEmp()}
                </div>
                </div>
            </div>
        )
    }
}

export default CreatingComponentDemo;