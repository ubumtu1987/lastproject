// Require mongoose
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Create a Schema for Cart.
var CartSchema = new Schema({
  orders: {
    type: String,
    require: true
  },
  price:
  {
    type:String,
    require:true
  },
  user: {
    type: String,
    require: true
  },
  product: {
    type: String,
    require: true
  }
});

var Carts = mongoose.model("Carts", CartSchema);

module.exports = Carts;
