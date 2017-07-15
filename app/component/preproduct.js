import React from "react";
import Header from "./section/header.js";
import Footer from "./section/footer.js";
import helpers from "./utils/helpers.js";
import { InputNumber } from 'antd';
import { Row, Col } from 'antd';



var Product = React.createClass({

 onChange: function(value) {
  console.log('changed', value);
  }
  ,
  getInitialState: function() {
    return { selectedItem :"" };
  },
  intialzie : function(data){

    if(data.length == 0){
      console.log("empty");
      }else{
      this.setState({lists : data}); 
      //console.log(this.state.lists);
     }

  } 
  , 
  componentDidMount: function() {
    // Get the latest history.
    var socketsMan = io.connect(); 
    socketsMan.emit('getProduct');
    socketsMan.on('takeProduct', this.intialzie );
    socketsMan.on('deliverdata', this.deliver );
    socketsMan.on('getrid', this.delete );
   },
  delete : function(product) {

      var cartshow=  JSON.parse(this.state.selectedItem );
      var rearrange = cartshow.filter(function (task) {
      return task.Name != product.Name ;
      });
      //console.log(rearrange );
      var putcart = JSON.stringify(rearrange);
      this.setState({selectedItem  : putcart}); 


  },  

  deliver : function(data) {
     var socketsMan = io.connect(); 
     var sendp = this.state.selectedItem;
      socketsMan.emit("takedel", sendp);

  },  
  todothis : function(data) {
            var socketsMan = io.connect(); 
            console.log("1");
           
            var cartman; 
            if(this.state.selectedItem == ""){
              cartman = new Array();
              cartman[0]= data;

            }else{
              cartman = JSON.parse(this.state.selectedItem );
               var index = -1;
               for(var i = 0 ; i < cartman.length ; i++){
                //console.log(cartman[i].Name);
                //console.log(data.Name);
                 if(cartman[i].Name == data.Name)
                  index = i;
                  //console.log(index);

               }
               if(index == -1 ){
                cartman.push(data);
               }else{
                console.log(index);
               }


            }

            //console.log(cartman);
            var putcart = JSON.stringify(cartman);
           
            this.setState( {selectedItem: putcart}); 
            socketsMan.emit("changelist", data);


  },

 rendercontainer : function  ()  {
     return this.state.lists.map(function(product, index) {
      // console.log(product);
       var putproduct = {
            Name : product.Name,
            Desc : product.Desc,
            Price : product.Price

       }
      // Each article thus reperesents a list group item with a known index
      return (
        <div key={index}>   

                  <Col span={8}>
                       <div target="_blank">

                           <div>
                             <img src={product.Image} className="productimg" />
                           </div>

                           <div>
                                   <h3>{product.Name}</h3>
                                   <div>{product.Desc}</div>
                                   <h4><b>Price:{product.Price}</b></h4>
                                   <div>Quantity
                                    <InputNumber min={1} max={10} defaultValue={1} onChange={this.onChange} />
                                   </div>

                           <button type="button" className="productb" onClick={() => {this.todothis(putproduct)}}> Add to cart</button>
                           </div>
                       </div>
                   </Col>    
                       
        </div>    
      );
    }.bind(this));





 },

render: function() {

              if(!this.state.lists){
                  return(
                     <div className="product-section1">
                          <Header SelectedMenu="Products"/>
                          <h1> Products </h1>


                          No data
                               
                           
                         
                        <Footer/>

                     </div>






                    );



               }else{   
                  return (

                  <div className="product-section1">
                          <Header SelectedMenu="Products"/>
                          <h1> Products </h1>

                          <div>
                          {this.rendercontainer()}
                          </div>  
                               
                           
                         
                        <Footer/>

                     </div>

                 );
              }  
 
    }

});
module.exports = Product;