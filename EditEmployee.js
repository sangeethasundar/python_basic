import React from 'react';

class EditEmployee extends React.Component{

    constructor(){
        super();
        this.state= {
            name:"",
            age:"",
            salary:"",
            achievements:"",
            nameErr:"",
            ageErr:"",
            salaryErr:"",
            achievementsErr:"",
            nameField:false,
            ageField:false,
            formValid:"",
            msg:""
        }
    }

    validName=false
    validAge=false
     
    validation= (event) => {
        var value=event.target.value;
        var name=event.target.name;
        switch(name){
            case "name":{
                this.setState({name:value})
                if(value.length<6){
                    this.setState({nameErr:"Name must be atleast 6 characters"})
                    this.validName=false
                }
                else{
                    this.setState({nameErr:""})
                    this.validName=true
                }
                break;  
            }

            case "age":{
                this.setState({age:value})
                if(parseInt(value)>=18 && parseInt(value)<=60){
                    this.setState({ageErr:""})   
                    this.validAge=true
                }
                else{
                    this.setState({ageErr:"Age must be between 18 and 60"})
                    this.validAge=false
                }
                break;
            }

            case "salary":{
                this.setState({salary:value})
                break;
            }

            case "achievements":{
                this.setState({achievements:value})
                break;
            }
        }
        this.setState({formValid: (this.validName && this.validAge)})
        console.log(this.state.formValid)
    }

    submit= (e) => {
        e.preventDefault();
        var msg={
            EmployeeId: this.props.match.params.empId,
            EmployeeName: this.state.name,
            Age: this.state.age,
            Salary: this.state.salary,
            Achievements: this.state.achievements
        }
        this.setState({msg:JSON.stringify(msg)})
    }

    render() {
        return (
            <div style={{width:500,margin:'0px auto'}}>
           <center><h1>The selected Id is {this.props.match.params.empId}</h1></center>
           <form>
               <div className="form-group">
                   <label>Employee ID:</label>
                   <input className="form-control" value={this.props.match.params.empId} disabled onChange={this.validation}/>
               </div>
               <div className="form-group">
                   <label>Name:</label>
                   <input className="form-control" value={this.state.name} name="name" onChange={this.validation}/>
               </div>
               <span className="text-danger">{this.state.nameErr}</span>
               <div className="form-group">
                   <label>Age:</label>
                   <input className="form-control" value={this.state.age} name="age" onChange={this.validation}/>
               </div>
               <span className="text-danger">{this.state.ageErr}</span>
               <div className="form-group">
                   <label>Salary:</label>
                   <select className="form-control" value={this.state.salary} name="salary" onChange={this.validation}>
                       <option>20000</option>
                       <option>30000</option>
                       <option>40000</option>
                       <option>50000</option>
                   </select>
               </div>
               <div className="form-group">
                   <label>Achievements:</label>
                   <textarea className="form-control" value={this.state.achievements} name="achievements" onChange={this.validation}/> 
               </div>
               <button className="btn btn-success" disabled={!this.state.formValid} onClick={this.submit}>Update</button>
               <p className="text-success">{this.state.msg}</p>
           </form>
           </div>
        )
    }
}

export default EditEmployee;    