import React from 'react';

class Assignment2 extends React.Component{

    constructor(){
        super();
        const book1 = {
            "author": "Frank Herbert",
            "title": "Dune",
            "summary": "The story of a boy and a great family’s ambitious attempt to realize mankind’s most ancient and unattainable dream."
        }
         
        const book2 = {
            "author": "Mur Lafferty",
            "title": "Six Wakes",
            "summary": "A crew of clones awakens aboard a space ship to find they're being hunted-and any one of them could be the killer."
        }
         
        const book3 = {
            "author": "Yann Martel",
            "title": "Life of Pi",
            "summary": " An inspirational tale of survival, endurance, resilience and faith"
        }
        
        this.state={
            books:[book1,book2,book3],
            showBtn:null
        }
    }

    render(){
        return(
            <div className="container">
                <br/>
                <div className="row">
                    <div className="col">
                    <center><h3 className="text-success">BestSellers 2018</h3></center>
                    </div>
                </div>
                <div className="row">
                    <div className="card-columns">
                    {this.state.books.map( (book) => {
                        if(this.state.showBtn===book.title)
                            var show=book.summary
                        else if(this.state.showBtn===null)
                            var show=null
                        return (
                        <div className="card shadow">
                            <div className="card-body">
                                <center><h4 className="card-title">{book.title}</h4></center>
                                <center><p className="card-text" style={{"fontSize":"large"}}><b>Author:</b> {book.author}</p></center><br/>
                                <center><p className="card-text" style={{"fontSize":"large"}}>{show}</p></center><br/>
                                <center>
                                <button className="btn btn-primary" onClick={ () => {this.setState({showBtn:book.title})}}>Show Details</button><br/><br/>
                                <button className="btn btn-danger" onClick={ () => {this.setState({showBtn:null})}}>Hide Details</button>
                                </center>
                            </div>
                        </div>
                            )
                    })}
                </div>
                </div>
            </div>
        )
    }
}

export default Assignment2;