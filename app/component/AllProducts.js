import React from "react";
import Header from "./section/header.js";
import Footer from "./section/footer.js";
import helpers from "./utils/helpers.js";
import { InputNumber } from 'antd';
import { Row, Col } from 'antd';
import Product from "./product.js"
import axios from "axios";


class AllProducts extends React.Component {

   constructor(props) {
    super(props);

    this.state = {
      products:[],
      user : ""
    };
    

    this.componentDidMount = this.componentDidMount.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }
 
  componentDidMount() {
    // Get the latest history.
    helpers.getProducts().then(function(response) {
      console.log(response);
      if (response !== this.state.products) {
        console.log("products", response.data.length);
        this.setState({ products: response.data});
        console.log(this.state.products);
      }
    }.bind(this));
  }


renderRow(key){
  console.log("alooooooooooooooooooooooo");

 return(
   
    <Product details={this.state.products[key]}
             user = {this.state.user} /> 

  );
}

render(){

  return(

    <div>

        <Header SelectedMenu="Products"/>
        <h1 className="header"><a href="#/main"> A Matcha Made in Heaven</a></h1>
        <div className="container">
            
                 {Object.keys(this.state.products).map(this.renderRow)}
               

        </div>
        
    </div>  
      

    );

   }
}

export default AllProducts;

    