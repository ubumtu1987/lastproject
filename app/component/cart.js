// Include React as a dependency
import axios from "axios";

var React = require("react");
var Search = React.createClass({
  // Here we set the initial state variables
  // (this allows us to propagate the variables for maniuplation by the children components
  // Also note the "resuls" state. This will be where we hold the data from our results
  getInitialState: function() {
    return {
      results: ""
    };
  },  
    
 
  // Render the component. Note how we deploy both the Query and the Results Components
  render: function() {
     return(
        <div>
        do it!
        </div>



      );
    //console.log("Render Results", this.state.results);
            //if(typeof(this.state.results.cart) == 'undefined'){ 
            

  }
});


module.exports = Search;

