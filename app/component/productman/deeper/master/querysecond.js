// Include React as a dependency
var React = require("react");
var Productshow = require("../registersa.js");
var Inputlist = require("../registerp.js");
var axios = require("axios");
var Search = React.createClass({
  // Here we set the initial state variables
  // (this allows us to propagate the variables for maniuplation by the children components
  // Also note the "resuls" state. This will be where we hold the data from our results
  getInitialState: function() {
    return {

      results: {}
    };
  },
  modify: function() {
      window.location.href = '/#/controlu'; 
  },
  saveDocument : function(doc) {
     this.setSate({results:  {docs : doc } } ).bind(this); 

  },
  // This function will be passed down into child components so they can change the "parent"
  // i.e we will pass this method to the query component that way it can change the main component
  // to perform a new search
  componentWillMount : function(){
    var socketsMan = io.connect(); 
   
    axios.patch("/login/getcookie").then((response) => {
        console.log(response.data);
        let val = response.data+"";
       // console.log(val);
          if(val == "true"){
              var sent = {
                cookie : document.cookie
              }
              axios.post("/login/ttcookie", sent).then((response) => {
                      console.log(response.data.username);
                      if(response.data.username == "managemaster"){
                      console.log("point 1 ")
                      this.setState({results : { check : "hi"}});  
                      
                      socketsMan.emit('getProduct');

                      
 




                      socketsMan.on('takeProduct', this.intialzie );
 

                     } 
                      


              }); 




          }

        
      });   




    

  },

  intialzie : function(data){
      console.log("check point");
      console.log(data);
      if(data.length == 0){
      console.log("empty");
      }else{
      this.setState({results : { check : "hi",
                                 docs : data}}); 
      //this.setState({results : { check : "hi"}}); 

      
      }
      console.log(this.state.results.docs);

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
  rendercontainer: function() {
    //console.log("Render Results", this.state.results);
    return (
      <div className="main-container">
        {/*
        Productshow results={this.state.results}
        */}
        <button  id="variation"  onClick= {() => {this.modify()}}>user</button>   
        <div> 
        Product List!!!
        </div>
        <Inputlist />
        <Productshow listp={this.state.results} />
        
      </div>
    );
  }, 
   render: function() {
     console.log(this.state.results.check);
    // If we have no articles, render this HTML
    if (!this.state.results.check) {
      return (
        <div>
        No Data
        </div>
      );
    }else{
      return this.rendercontainer()
    }

  }
   





});


module.exports = Search;

