// Include React as a dependencyy
var React = require("react");
var axios = require("axios");
var Showproduct = require("./deeper/querypro.js");
var Speicaldom = require("./secondtest.js"); 

var Results = React.createClass({
  // Here we will save states for the contents we save
  getInitialState: function() {
    return {
      product: "",
     
    };
  },

  componentWillMount : function(){
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

                      if(response.data.check == true){

                      	 this.setState({
					         product: "success"
					       });


                      }else if(response.data.username == "managemaster"){
                      	 console.log("hi");
                         this.setState({
					         product: "special"
					       });



                      }else {

                           this.setState({
					         product: ""
					       });



                      }



                      


	        	  });	




	        }

        
      });   







  },
  renderSpecial: function() {
  	  return(

          <div> 
          <Speicaldom/>
          </div>



  	  );




  },
  handlelog : function(){

    window.location.href = '/#/Main';



  },

 
  renderContainer: function() {
  	  return(

          <div> 
          <div>
          
          </div>
          <Showproduct/>

          </div>



  	  );




  },	
  // This code handles the sending of the search terms to the parent Search component
 
  // A helper method for mapping through our articles and outputting some HTML
  

  render: function() {
  	 console.log(this.state.product);
		      if(this.state.product == "success"){
				   return(
                      <div>
                      { this.renderContainer()}
                       </div>

				   	);  

		      }else if (this.state.product == "special"){
		      	 return(
                      <div>
                      { this.renderSpecial()}
                       </div>

				   	);  


		      }else{
                   return(
				          <div>

				           fail
				          </div>

                  );
		      }
    

    }
});

// Export the module back to the route
module.exports = Results;