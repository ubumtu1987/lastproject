// Include React as a dependency
import axios from "axios";

import Header from "./section/header.js";
import Footer from "./section/footer.js";

var React = require("react");
var Search = React.createClass({
  // Here we set the initial state variables
  // (this allows us to propagate the variables for maniuplation by the children components
  // Also note the "resuls" state. This will be where we hold the data from our results
  getInitialState: function() {
    return {
      results: {}
    };
  },  
  componentWillMount: function() {
      var socketsMan = io.connect(); 
      axios.patch("/login/getcookie").then((response) => {
        console.log(response.data);
        let val = response.data+"";
        console.log(val);
          if(val == "true"){
              var sent = {
                cookie : document.cookie
              }
              axios.post("/login/ttcookie", sent).then((response) => {
                      console.log(response.data.username);
                      socketsMan.emit("finducart", response.data.username);
                      socketsMan.on('returcartinfo', this.intialzie );
                             

                      


              }); 




          }

        
      });   


   
     
  
   
    
  },
  intialzie : function(docs){
     console.log(docs);
     this.setState({results : { doc : docs}}); 
   


  },
  handleremove : function(item){
     //console.log(item);
     var socketsMan = io.connect();  
     socketsMan.emit("deletecartman", item);
     socketsMan.on('recartman', this.deleteitem );

  },
  deleteitem : function(){
     window.location.reload();


  },

  renderCon(){
    return this.state.results.doc.map(function(item, index) {

        return (
        <div className="product-section1-box" key={index}>   

                       <div className="product-section1-card" target="_blank">

                           
                           <div>
                                   <h2>Product Name:{item.product}</h2>
                                   <div>Quantity:{item.orders}</div>
                                   <div>Price:{item.price}</div>
                                   
                          <button type="button" className="productb" onClick={() => {this.handleremove(item)}}> delete</button>
                           </div>
                       </div>
                       
        </div>    
      );



   }.bind(this));



  }, 
 
  // Render the component. Note how we deploy both the Query and the Results Components
  render: function() {
     //console.log(this.state.results.doc);
     if(!this.state.results.doc){     
      return(
        <div>
        No cart 
        </div>



      );
     }else{
           return(
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

