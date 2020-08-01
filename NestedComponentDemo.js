import React from 'react';
import ChildNested from './ChildNested';

class NestedComponentDemo extends React.Component {
    constructor() {
        super();
        const emp1 = {
            "empId": 100,
            "empName": "Jack",
            "age": 30,
            "salary": 50000,
            "img": "MaleEmployee.jpeg",
            "acheivements": "Won 3 Bravos"
        }
        const emp2 = {
            "empId": 101,
            "empName": "Jane",
            "age": 24,
            "salary": 50000,
            "img": "FemaleEmp.png",
            "acheivements": "Won 5 Bravos"
        }
        this.state = {
            empArr: [emp1, emp2]
        };
    }

    render() {
        var emp = this.state.empArr[1];
        return (
            <div>
                <center> <ChildNested employee={emp}></ChildNested> </center>
            </div>
            )
    }
}

export default NestedComponentDemo;
