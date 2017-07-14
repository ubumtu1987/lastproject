var axios = require("axios");

module.exports = {
  getProducts: function() {
    return axios.get("/api");
  },
  
  //saveClicks: function(clickData) {
    //return axios.post("/api", clickData);
  //}

   saveCart: function(cartData) {
     return axios.post("/cart", cartData);
   },

   updateCart: function(productId,cartData)
   {
   	 return axios.post("/cart/" + productId, cartData);
   }
   , 
   getCart: function(userName){
    return axios.get("/cart/" + userName);
   }
};