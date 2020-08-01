import React from 'react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

class Assignment1 extends React.Component {

    courseCatalog = [
        { name: "PHP", category: "Server Scripting", author: "Richard James" },
        { name: "Angular 6", category: "Web Development", author: "Kirk Hamett" },
        { name: "Node.js", category: "Server side JS", author: "Ryan Dahl" },
        { name: "Bootstrap", category: "UI Development", author: "Mark Hill" },
        { name: "Python", category: "Programming", author: "Guido Van Rossom" }
    ];

    featuredCourses = [
        { name: "HTML5", category: "Web Development", author: "Dan Brown" },
        { name: "CSS", category: "Web Development", author: "Robin Cook" },
        { name: "JavaScript", category: "Programming", author: "Dan Brown" }
    ];

    fn = () => {
        return (
            <div className="card-columns">
                {this.featuredCourses.map((course) => {
                    return (
                        <div className="card shadow">
                            <div className="card-body">
                                <h5 className="card-title">{course.name}</h5>
                                <p className="card-text text-left">Author: {course.author}</p>
                                <p className="card-text text-left">Category: {course.category}</p>
                                <button className="btn btn-success ">Summary</button>
                            </div>
                        </div>
                    )
                }
                )}
            </div>
        )
    }

    fn1 = () => {
        return (
            <table className="table table-striped table-dark table-bordered">
                <thead>
                    <tr>
                        <th>Course Name</th>
                        <th>Category</th>
                        <th>Author</th>
                    </tr>
                </thead>
                <tbody>
                    {this.courseCatalog.map((course) =>
                        <tr>
                            <td>{course.name}</td>
                            <td>{course.category}</td>
                            <td>{course.author}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }

    render() {
        return (
            <div className="container-fluid">
                <br />
                <div className="row">
                    <div className="col-md-8 text-center">
                        <h5 className="text-primary">Featured Courses</h5>
                        {this.fn()}
                    </div>
                    <div className="col-md-4 text-center">
                        <h4>Course Catalog</h4>
                        {this.fn1()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Assignment1;