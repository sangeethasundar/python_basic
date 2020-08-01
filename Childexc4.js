import React from 'react';
import logo from './logo.svg';
import './App.css';

class Childexc4 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            btnClicked: ""
        }
    }

    prod = this.props.prod

    render() {
        if (this.state.btnClicked) {
            var details = <div className="card">
                <div className="card-body card-text">
                    <p style={{ fontSize: "large" }}>RAM: {this.prod.RAM}</p>
                    <p style={{ fontSize: "large" }}>Camera: {this.prod.Camera}</p>
                    <p style={{ fontSize: "large" }}>OS: {this.prod.OS}</p>
                    <p style={{ fontSize: "large" }}>Processor: {this.prod.Processor}</p>
                </div>
            </div>
        }
        return (
            <div className="container">
                <br/>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card shadow">
                            <div className="card-body card-text">
                                <h3 className="card-title">Model: <span className="text-success">{this.prod.Model}</span></h3>
                                <p style={{ fontSize: "large" }}>Price: <b><span className="text-primary">{this.prod.Price}</span></b></p>
                                {details}<br />
                                <button className="btn btn-danger" onClick={() => { this.setState({ btnClicked: true }) }}>Show Details</button>
                            </div>
                        </div>
                    </div></div></div>
        )
    }
}

export default Childexc4;