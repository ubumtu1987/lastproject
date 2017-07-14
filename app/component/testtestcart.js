// Include React as a dependency
var React = require("react");

import Header from "./section/header.js";
import Footer from "./section/footer.js";
import helpers from "./utils/helpers.js";
import { InputNumber } from 'antd';

var Search = React.createClass({
  // Here we set the initial state variables
  // (this allows us to propagate the variables for maniuplation by the children components
  // Also note the "resuls" state. This will be where we hold the data from our results
  getInitialState: function() {
    return {
      list: ""
    };
  },
   handleClick : function(product){
      var socketsMan = io.connect();
      var cartshow=  JSON.parse(this.state.list );
      var rearrange = cartshow.filter(function (task) {
      return task.Name != product.Name ;
      });
     // console.log(rearrange);
      var putcart = JSON.stringify(rearrange);
       this.setState({list : putcart}); 

      socketsMan.emit("deletething", product);
    

  },
 
  // This function will be passed down into child components so they can change the "parent"
  // i.e we will pass this method to the query component that way it can change the main component
  // to perform a new search
  componentWillMount : function(){
     var socketsMan = io.connect();
     //console.log("point") ;
      socketsMan.emit('starter',"hello");
      socketsMan.on('gofinal', this.intialzie); 
      socketsMan.on('reachfinal', this.handleman); 
    

  },
  
   handleman : function(data){
       var cartman;
      if(this.state.list == ""){
              cartman = new Array();
              cartman[0]= data;

            }else{
              cartman = JSON.parse(this.state.list );
               var index = -1;
               for(var i = 0 ; i < cartman.length ; i++){
                console.log(cartman[i].Name);
                console.log(data.Name);
                 if(cartman[i].Name == data.Name)
                  index = i;
                 // console.log(index);

               }
               if(index == -1 ){
                cartman.push(data);
               }else{
                console.log(index);
               }


       }

       //console.log(cartman);
       var putcart = JSON.stringify(cartman);
           
       this.setState( {list: putcart});  
    

   
  }, 
  intialzie : function(data){
      //console.log(data);
      this.setState({list : data});
      //console.log(this.state.results.docs);

  },
  renderCon: function (){
    var realist = JSON.parse(this.state.list);

   return realist.map(function(product, index) {

        return (
        <div className="product-section1-box" key={index}>   

                       <div className="product-section1-card" target="_blank">

                           
                           <div>
                                   <h2>Product Name:{product.Name}</h2>
                                   <div>Desc:{product.Desc}</div>
                                   <div>Price:{product.Price}</div>
                                   

                          <button type="button" className="productb" onClick={() => {this.handleClick(product)}}> delete</button>
                           </div>
                       </div>
                       
        </div>    
      );



   }.bind(this));



  },
  
  // Render the component. Note how we deploy both the Query and the Results Components
  render: function() {
    //console.log("Render Results", this.state.results);
        if(this.state.list == ""){
           return (
          <div className="main-container">
            {/*
            Productshow results={this.state.results}
            */}
            <div> 
            No data
            </div>
           
            
          </div>
        );
        }else{
        
        return (
                 <div className="product-section1">
                          <Header SelectedMenu="Products"/>
                          <h1> Products </h1>

                          <div>
                          {this.renderCon()}
                          </div>  
                               
                           
                         
                        <Footer/>

                     </div>
        );
      }
  }
});


module.exports = Search;

