import React from 'react';
import logo from './logo.svg';
import './App.css';
import Childexc4 from './Childexc4';

class Exc4 extends React.Component{

    constructor(){
        super();
        this.state={
            products:[
                {Model:"Google pixel 2XL",Price:62000,RAM:"4 GB",Camera:"12.2 MP",OS:"Android Pie",Processor:"Snapdragon 835 Octa Core"},
                {Model:"Apple iPhone X",Price:98000,RAM:"3 GB",Camera:"12 MP",OS:"ios v11.1.1",Processor:"A11 Bionic hexa-core"}
            ]
        };
    }



        show1= () => {
            var ele = "<div>";
                  ele+="<p>"+this.products[0].RAM+"</p>";
                  ele+="<p>"+this.products[0].Camera+"</p>";
                  ele+="<p>"+this.products[0].OS+"</p>";
                  ele+="<p>"+this.products[0].Processor+"</p>";
                  ele+="</div>";
                  console.log(ele);
                  document.getElementById("cardid1").innerHTML =ele;
        }

        show2= () => {
            var ele = "<div>";
                  ele+="<p>"+this.products[1].RAM+"</p>";
                  ele+="<p>"+this.products[1].Camera+"</p>";
                  ele+="<p>"+this.products[1].OS+"</p>";
                  ele+="<p>"+this.products[1].Processor+"</p>";
                  ele+="</div>";
                  console.log(ele);
                  document.getElementById("cardid2").innerHTML =ele;
        }

        render() {
            var product=this.state.products[1]
        return (
            <div>
                <Childexc4 prod={product}></Childexc4>
            </div>
        )
    }
}

export default Exc4;