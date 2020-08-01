import React from 'react';
import logo from './logo.svg';
import './App.css';

class Exc2 extends React.Component {

    constructor() {
        super();
        this.state = {
            products: [
                { Title: "Angels and Demons", Publisher: "Penguin random House", Author: "Dan Brown", Price: 409, ProdId: 2012 },
                { Title: "Norse Mythology", Publisher: "Bloomsbury publishing", Author: "Neil Gaiman", Price: 300, ProdId: 2019 }
            ]
        };
    }

    fn = () => {
        return (
            <div className="card-columns">
                {this.state.products.map((product) => {
                    if (product.Price < 400) {
                        var note = "-BestSeller!"
                    }
                    return (
                        <div className="card shadow">
                            <div className="card-body">
                                <center><h5 class="card-text">{product.Title}</h5></center><br />
                                <p class="card-text text-left">Author: <b>{product.Author}</b><span className="text-success">{note}</span></p>
                                <p class="card-text text-left">Publisher: <b>{product.Publisher}</b></p>
                                <p class="card-text text-left">Price: <b>{product.Price}</b></p><br />
                                <p class="card-text text-left">ProdId: {product.ProdId}</p>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        )
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                    <center><h4 className="text-primary text-center">Featured Titles</h4></center>
                    </div>
                    <div className="col-md-9 offset-md-3">
                        {this.fn()}
                    </div>
                    </div>
                    </div>
        )
    }
}

export default Exc2;