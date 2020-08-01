import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect, BrowserRouter } from "react-router-dom";

class Exc6 extends React.Component {

    constructor() {
        super();
        this.state = { 
            formValues: {
                title:'',
                author:'',
                genre:''
            },
            formErrors: {
                titleError:'',
                authorError:'',
                genreError:''
            },
            fieldValidity: {
                title:false,
                author:false,
                genre:false
            },
            formValid:false,
            successMessage:''
        };
    }

    titlevalidation =(e) => {
        var title=e.target.value;
        var formErrors=this.state.formErrors;
        var fieldValidity=this.state.fieldValidity;
        var formValid=this.state.formValid;
        this.setState({formValues:title});
        if(title.length<4){
            formErrors.titleError="Title must contain atleast 4 characters";
            fieldValidity.title=false;
        }
        else{
            formErrors.titleError="";
            fieldValidity.title=true;
        }

        this.setState({formErrors:formErrors});
        this.setState({formValid:(fieldValidity.title && fieldValidity.author && fieldValidity.genre)});
    }

     authorvalidation =(e) => {
        var author=e.target.value;
        var formErrors=this.state.formErrors;
        var fieldValidity=this.state.fieldValidity;
        var formValid=this.state.formValid;
        this.setState({formValues:author});
        if(author.length<3){
            formErrors.authorError="Author must contain atleast 3 characters";
            fieldValidity.author=false;
        }
        else{
            formErrors.authorError="";
            fieldValidity.author=true;
        }

        this.setState({formErrors:formErrors});
        this.setState({formValid:(fieldValidity.title && fieldValidity.author && fieldValidity.genre)});
    }

    genrevalidation =(e) => {
        var genre=e.target.value;
        var formErrors=this.state.formErrors;
        var fieldValidity=this.state.fieldValidity;
        var formValid=this.state.formValid;
        this.setState({formValues:genre});
        if(genre=="select"){
            formErrors.genreError="Please select a genre";
            fieldValidity.genre=false;
        }
        else{
            formErrors.genreError="";
            fieldValidity.genre=true;
        }

        this.setState({formErrors:formErrors});
        this.setState({formValid:(fieldValidity.title && fieldValidity.author && fieldValidity.genre)});
    }

    render() {
        return (
        <div style={{width:500, margin:'0px auto'}}>
            <h3 className="text-center">Add A Book</h3>
            <form>
                <div className="form-group">
                    <label>Title:</label>
                    <input className="form-control" value={this.state.formValues.title} 
                    onChange={this.titlevalidation}/>
                </div>
                <span className="text-danger">{this.state.formErrors.titleError}</span>
                <div className="form-group">
                    <label>Author:</label>
                    <input className="form-control" value={this.state.formValues.author}
                    onChange={this.authorvalidation}/>
                </div>
                <span className="text-danger">{this.state.formErrors.authorError}</span>
                <div className="form-group">
                    <label>Genre:</label>
                    <select className="form-control" value={this.state.formValues.genre}
                    onChange={this.genrevalidation}>
                        <option value="select">--Select--</option>
                        <option value="Mystery thriller">Mystery thriller</option>
                        <option value="Non-Fiction">Non-Fiction</option>
                        <option value="Fiction">Fiction</option>
                    </select>
                </div>
                <span className="text-danger">{this.state.formErrors.genreError}</span>
                <button type="button" className="btn btn-primary" disabled={!this.state.formValid}>Add Book</button>
            </form>
        </div>
        );
     }
}

export default Exc6;