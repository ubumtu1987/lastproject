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
    
 
  // Render the component. Note how we deploy both the Query and the Results Components
  render: function() {
     if(!this.state.results.doc){     
      return(
        <div>
        No cart 
        </div>



      );
     }else{

           <div className="product-section1">
                          <Header SelectedMenu="Products"/>
                          <h1> Products </h1>

                          <div>
                          {this.renderCon()}
                          </div>  
                               
                           
                         
                        <Footer/>

          </div>





     }
            

  }
});


module.exports = Search;

