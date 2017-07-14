import React from "react";
import helpers from "./utils/helpers.js";
import { InputNumber } from 'antd';
import { Row, Col } from 'antd';
import axios from "axios";


class Product extends React.Component {
  
 constructor(props) {
    super(props);
    this.state = {
      orders:"3",
      user:"user1",
      checkout:"pending",
      indexes : []
    };
    this.onChange = this.onChange.bind(this);
    this.AddToCart = this.AddToCart.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
  }

onChange(value) {
  console.log('changed', value);
  var newState = value;
  this.setState({orders: newState});

  }
   componentWillMount() {
       axios.patch("/login/getcookie").then((response) => {
        console.log(response.data);
        let val = response.data+"";
        console.log("hit point");
        console.log(val);

          if(val == "true"){
              var sent = {
                cookie : document.cookie
              }
               axios.post("/login/ttcookie", sent).then((response) => {
                 // console.log(response.data.username);

                     this.setState({ orders:"3",
                                    user:response.data.username ,
                                    checkout:"pending",
                                    indexes : []});
                     console.log(this.state.user);


               }); 



          }

        
      });   


 
 
  } 
AddToCart()
  {
    var newIndexes = this.state.indexes;
    console.log("teeeessssssssst");

    if(this.state.indexes.indexOf(this.props.details._id)== -1)
     {
         var indesOfproduct = this.props.details._id;
         helpers.saveCart({ 
         orders: this.state.orders,
         user: this.state.user,
         price: this.props.details.Price,
         product: (this.props.details.Name),
          })

           .then(function() {
              console.log("Posted to MongoDB");
              
              
                           });
          newIndexes.push(this.props.details._id);
          this.setState({indexes:newIndexes}); 
      }

      else
      {
        helpers.updateCart(this.props.details.Name,{
          orders: this.state.orders,
        }).then(function() {
              console.log("Edited to MongoDB");
            });
      }

}


render()
{
  console.log("Hellooooooooooo" + this.state.orders);

  let details = this.props.details;
  return(

      <div>

            
          <Col span={8}>
                      <div className="produt-container">
                           <div>
                             <img src={details.Image} className="productimg" />
                           </div>

                           <div>
                                   <h3><b>Product Name:{details.Name}</b></h3>
                                   <div>Desc:{details.Desc}</div>
                                   <div><b>Price:${details.Price}</b></div>
                                   <div>Quantity

                                    <InputNumber min={1} max={50} defaultValue={3} onChange={this.onChange} />
                                    <button type="button" className="productButton" onClick={this.AddToCart} >Add to cart</button>

                                   </div>
                                   
                           </div>
                       </div>   

        </Col>     

          </div>
              



  );
  } 
}

export default Product;
