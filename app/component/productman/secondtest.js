// Include React as a dependency
var React = require("react");

var Search = React.createClass({
  // Here we set the initial state variables
  // (this allows us to propagate the variables for maniuplation by the children components
  // Also note the "resuls" state. This will be where we hold the data from our results
  getInitialState: function() {
    return {
      check: ""
    };
  },

  // This function will be passed down into child components so they can change the "parent"
  // i.e we will pass this method to the query component that way it can change the main component
  // to perform a new search
  componentWillMount : function(){
   
    

  },
  modify: function() {
      window.location.href = '/#/controlu'; 
  },
  change: function() {
      window.location.href = '/#/controlp'; 
  },


  /*
  componentDidMount : function  {
      socket.on('takeProduct', this._initialize);
      socket.on('send:message', this._messageRecieve);
      socket.on('user:join', this._userJoined);
      socket.on('user:left', this._userLeft);
      socket.on('change:name', this._userChangedName);
  },
  */
  
  // Render the component. Note how we deploy both the Query and the Results Components
  render: function() {
    //console.log("Render Results", this.state.results);
    return (
      <div className="main-container">
        {/*
        Productshow results={this.state.results}
        */}
        <div> 
        MasterSesscion!!!
        </div>
        
        <button  id="variation"  onClick= {() => {this.modify()}}>user</button>   
        <button  id="variation"  onClick= {() => {this.change()}}>product</button>   
        
      </div>
    );
  }
});


module.exports = Search;



































































/*
// Include React as a dependencyy
var React = require("react");
var axios = require("axios");
var Speicaldom = require("./deeper/querypro.js");
var Userdom = require("./deeper/usercontrol.js") ;

var Results = React.createClass({
  // Here we will save states for the contents we save
  getInitialState: function() {
    return {
      speration : "",
     
    };
  },
  children: function(input) {
    var output = input +"";
    this.setState({
                   speration: output
                 });
  },
  change: function() {
    this.setState({
                   speration: "product"
                 });
  },
  modify: function() {
  this.setState({
                   speration: "user"
                 });
  },

  renderProduct: function() {
      return(

          <div>
           <button  id="variation"  onClick= {() => {this.change()}}>product</button>  
           <button  id="variation"  onClick= {() => {this.modify()}}>user</button>   
          <Speicaldom/>
          </div>



      );




  }, 

  renderUser: function() {
      return(

          <div> 
          <button  id="variation"  onClick= {() => {this.change()}}>product</button>  
          <button  id="variation"  onClick= {() => {this.modify()}}>user</button>   
          <Userdom deliver = {this.children}/>
          </div>



      );




  },  
 
 
 

 
 
  // This code handles the sending of the search terms to the parent Search component
 
  // A helper method for mapping through our articles and outputting some HTML
  

  render: function() {
    //console.log(this.state.product);
    if(this.state. speration == "user"){
        
        return(
        <div>            
        { this.renderUser()}
        </div>
        );


    }else if(this.state. speration == "product"){

        return(
        <div>            
        { this.renderProduct()}
        </div>
        );

    }else{
         return(

          <div>
          <button  id="variation"  onClick= {() => {this.change()}}>product</button>  
          <button  id="variation"  onClick= {() => {this.modify()}}>user</button>     
          </div>

        );



    }




  	
  }
});

// Export the module back to the route
module.exports = Results;

*/