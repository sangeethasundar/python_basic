import React from 'react';

class ChildNested extends React.Component{
    constructor(props){
        super(props);
        this.state={
            empAch:""
        };
    }

    emp=this.props.employee

    render(){
        if(this.emp.age<25)
                var note="-Fresher"
        if(this.state.empAch)
                var acheivements=this.emp.acheivements
        return (
            <div className="card shadow" style={{"width":300,"height":650}}>
                <img className="card-img-top" src={this.emp.img} alt="emp1"/>
                <h4 className="card-title text-center">{this.emp.empName}</h4>
                <p className="card-text text-left" style={{"fontSize":"large"}}>Id: {this.emp.empId}</p>
                <p className="card-text text-left" style={{"fontSize":"large"}}>Age: {this.emp.age}</p>
                <p className="card-text text-left" style={{"fontSize":"large"}}>Salary: {this.emp.salary}<span className="text-primary">{note}</span></p>
                <p className="card-text text-center text-success" style={{"fontSize":"large"}}>{acheivements}</p>
                <center> 
                    <button className="btn btn-primary">Edit Details</button>
                    <button className="btn btn-success" onClick={ () => {this.setState({empAch:true})}}>view Details</button>
                </center>
            </div>
        )
    }
}

export default ChildNested;
