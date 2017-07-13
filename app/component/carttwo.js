// Include React as a dependency
import axios from "axios";

var React = require("react");
var Search = React.createClass({
  // Here we set the initial state variables
  // (this allows us to propagate the variables for maniuplation by the children components
  // Also note the "resuls" state. This will be where we hold the data from our results
  getInitialState: function() {
    return {
      results: {cart :""}
    };
  },  
    
  // This function will be passed down into child components so they can change the "parent"
  // i.e we will pass this method to the query component that way it can change the main component
  // to perform a new search
  handleClick : function(product){
      var cartshow=  JSON.parse(this.state.results.cart );
      var rearrange = cartshow.filter(function (task) {
      return task.name != product.name ;
      });
      console.log(rearrange);
      var putcart = JSON.stringify(rearrange);
       this.setState({results : { cart : putcart}}); 
     
    

  },

   logout(){
      axios.patch("/login/logout").then((response) => {
        console.log(response.data);
       

        this.setState({
          test: ""
        })
      });  

        

    },

  componentWillMount : function(){
   
    

    var socketsMan = io.connect(); 
    socketsMan.emit('sendclinet');
    
    socketsMan.on('firstreponse', this.intialzie );
     
    

  },

  intialzie : function(data){
      //console.log(data);
      if(data.length == 0){
      console.log("empty");


      }else{
            console.log("1");
           
            var cartman; 
            if(this.state.results.cart == ""){
              cartman = new Array();
              cartman[0]= data;

            }else{
              cartman = JSON.parse(this.state.results.cart );
              cartman[cartman.length]=data;    

            }

            console.log(cartman);
            var putcart = JSON.stringify(cartman);

            this.setState({results : { cart : putcart}}); 
      }






      //console.log(this.state.results.docs);

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
  rendercon : function(){

   
   var cartshow=  JSON.parse(this.state.results.cart );

   return cartshow.map(function(product, index) {
      // Each article thus reperesents a list group item with a known index
      return (
        <div key={index}>
          <li className="list-group-item">
            <h3>
              <span>
                <em>{product.name}</em>
              </span>
              <span className="btn-group pull-right">
              
                
                <button className="btn btn-primary" onClick={() => this.handleClick(product)}>delete</button>
              </span>
            </h3>
            <p>description : {product.desc}</p>
          </li>
        </div>
      );
    }.bind(this));
  

  },
  
  // Render the component. Note how we deploy both the Query and the Results Components
  render: function() {
    //console.log("Render Results", this.state.results);
            //if(typeof(this.state.results.cart) == 'undefined'){ 
            if(this.state.results.cart == ""){
            return (
              <div className="main-container">
                <button  id="logout"  onClick= {() => {this.logout()}}>logout</button>  
                <div> 
                hello
                </div>
                
                
              </div>
            );



           }else{
              return (

                 <div className="main-container">
                 <div>
                 <button  id="logout"  onClick= {() => {this.logout()}}>logout</button>  
                 </div>
                   <div className="main-container">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="panel panel-primary">
                              <div className="panel-heading">
                                <h1 className="panel-title">
                                  <strong>
                                    <i className="fa fa-list-alt"></i>
                                     show list 
                                  </strong>
                                </h1>
                              </div>
                              <div className="panel-body">
                                <ul className="list-group">
                                 {this.rendercon()}

                                 
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    

                 



                 </div>
              
              );




           }




  }
});


module.exports = Search;

