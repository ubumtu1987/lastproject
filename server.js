var express = require("express");
var mongoose = require("mongoose");
var bluebird = require("bluebird");
var bodyParser = require("body-parser");
var logger = require("morgan");
var http = require("http");

var carts = require("./models/carts");
var products = require("./models/products");
var users = require("./models/users");

var smodule = require("./socketmodule.js");
var authRoutes = require("./controller/loginControl.js");

//var routes = require("./routes/routes");
//var socket = require("socket.io");
//var smodule = require("./socketmodule"); 

//var ntimes = require("./nytimes.js");

// Set up a default port, configure mongoose, configure our middleware
var PORT = process.env.PORT || 8000;
//mongoose.Promise = bluebird;
var app = express();
var serverMan = http.createServer(app);
serverMan.listen(PORT, function() {
  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:%s", PORT);
});


// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));
app.use("/login", authRoutes);

//app.use("/", routes);
//var apiRoutes = require("./rrouter");
//app.use("/api", apiRoutes);

// MongoDB configuration (Change this URL to your own DB)
//mongoose.connect("mongodb://localhost/e-shop");
mongoose.connect( process.env.MONGODB_URI || "mongodb://heroku_ck9nshsq:jt2ch0qdob8gv879hgboqa08t1@ds157682.mlab.com:57682/heroku_ck9nshsq");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// -------------------------------------------------


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});








app.get("/api/re", function(req, res) {

    res.send("/login/rego");

  
});







var socketio = require('socket.io');
var io = socketio.listen(serverMan);
/*
io.sockets.on('connection', function(socket){ 



	socket.on('message', function(message) {
       
           // logger.log('info',message.value);
            console.log(message);
            socket.emit('returnval', 'Hello World from client');
            //console.log('from console',message.value);
    

     

    });



 });   
 */
// Start the server
io.sockets.on('connection', smodule);






/*addition */ 


app.get("/api", function(req, res) {

  products.find({}, function(error, doc) {

    if (error) {
      console.log(error);
    }

    else {
      res.send(doc);
    }
  });
});
app.get("/cart/:id", function(req, res) {

  console.log("teeeeeeest"+req.params.id);
  carts.find({"user":req.params.id},function(err, doc) {

      if (err) {
        console.log(err);
        res.json(err)
      }

      else {
        res.json(doc);
      }
    });
});

app.get("/cart", function(req, res) {
  carts.find({}, function(error, doc) {
    if (error) {
      console.log(error);
    }
    else {
      res.json(doc);
    }
  });
});

app.post("/cart/:id", function(req, res) {
  var newOrder = req.body.orders;

  console.log(newOrder);
  console.log(req.params.id);

  
  carts.update({ "product":req.params.id }, {$set : { "orders": newOrder }}
  ,function (err) {
  if (err) {
      console.log(err);
    }
    else {
      res.send("Update");
    }
  });
});

app.post("/cart", function(req, res) {
  console.log("check point dfadfsads");
  
  carts.create({
    orders: req.body.orders,
    user: req.body.user,
    product:req.body.product,
    price:req.body.price,
  }, function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send("Saved");
    }
  });
});
