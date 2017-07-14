// Include React as a dependencyy
var React = require("react");
var axios = require("axios");


var Results = React.createClass({
  // Here we will save states for the contents we save
  getInitialState: function() {
    return {
    
      doc : {}
    };
  },

  modify: function() {
      window.location.href = '/#/controlp'; 
  },
  componentWillMount : function(){
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
                      console.log(response.data.check);
                      if(response.data.username == "managemaster"){


                      socketsMan.emit('getuser');
    
                      socketsMan.on('returnuser', this.initialzie );



                       } 
                      


              }); 




          }

        
      });   


  






    
     
    

  },
  initialzie : function(user){
    console.log(user);
    this.setState({doc: {data : user}}); 


  },
  // This code handles the sending of the search terms to the parent Search component
  

 handleClick: function(user) {
    console.log(user.username);
    var socketsMan = io.connect();
    var user = {
       userId : user.username, 
       userstatus : user.amdin
    }
    socketsMan.emit( 'authorizeuser',  user ); 
    
    socketsMan.on('cccheck', function(message) {
       console.log(message);
       window.location.reload();
      
    }); 
   
    
  },
  handledelete: function(user) {
    console.log(user.username);
    var socketsMan = io.connect();
    var user = {
       userId : user.username, 
       userstatus : user.amdin
    }
   
    socketsMan.emit( 'deleteuser',  user ); 
    
    socketsMan.on('finishd', function(message) {
       console.log(message);
       window.location.reload();
      
    }); 
   
    
  },
  handlelogout : function (){
    window.location.href = '/#/Main'


  },

  // A helper method for mapping through our articles and outputting some HTML
  renderArticles: function() {
    return this.state.doc.data.map(function(user, index) {
      // Each article thus reperesents a list group item with a known index
      return (
        <div key={index}>
          <li className="list-group-item">
            <h3>
              <span>
                <em>{user.username}</em>
              </span>
              <span className="btn-group pull-right">
               
                <button className="btn btn-primary" onClick={() => this.handledelete(user)}>delete</button> 
                <button className="btn btn-primary" onClick={() => this.handleClick(user)}>authorize</button>
                
              </span>
            </h3>
            <p>product price: {user.amdin+""}</p>
          </li>
        </div>
      );
    }.bind(this));
  },
  // A helper method for rendering a container to hold all of our articles
  
  renderContainer: function() {
    return (
     <div className="main-container">
        <div className="row">
          <div className="col-lg-12">
            <button className="btn btn-primary" onClick={() => this.handlelogout()}>Main</button>
            <button  id="variation"  onClick= {() => {this.modify()}}>product</button>   
            <div className="panel panel-primary">
              <div className="panel-heading">
               
                <h1 className="panel-title">
                  <strong>
                    <i className="fa fa-list-alt"></i>
                    Results
                  </strong>
                </h1>
              </div>
              <div className="panel-body">
                <ul className="list-group">
                 {this.renderArticles()}
                 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    

    );
  },

  render: function() {
    
    // If we have no articles, render this HTML
    if (!this.state.doc.data) {
      return (
        <div>
        No Data
        </div>
      );
    }else{
      return this.renderContainer()
    }

  }
   
});

// Export the module back to the route
module.exports = Results;