// Include React as a dependency
var React = require("react");
var Productshow = require("./productman/testdom.js");
//var Inputlist = require("./productman/testdom.js");
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
    //console.log("Render Results", this.state.results);
    return (
      <div className="main-container">
        {/*
        Productshow results={this.state.results}
        */}
        <div> 
        check
        </div>
        <Productshow />
        
      </div>
    );
  }
});


module.exports = Search;

