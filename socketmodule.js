 product = require("./models/products.js");
 userlist = require("./models/users.js");
 cartlist = require("./models/carts.js"); 

module.exports = function(socket) {
  
        socket.on('testso', function(message) {
           // logger.log('info',message.value);
            //console.log(message);
            socket.emit('returnso', 'Hello World from client');
            //console.log('from console',message.value);
        });




        socket.on('deletecartman', function(item) {
           console.log("end function");
           console.log(item);
            cartlist.remove({"_id" : item._id}, function(err, doc) {
                 
                   if(err){
                       console.log(err);
                   }
                   else{
                     console.log( "success");
                     socket.emit("recartman" , 'end'); 
                           
                     
                       
                   }
                 
             });


          
        });

        socket.on('finducart', function(message) {
             // console.log("last cart");
              //console.log(message);
              cartlist.find({"user" : message}, function(err, doc) {
            // log any errors
                 if (err) {
                   console.log(err);
                  }
                 // or send the doc to the browser as a json object
                 else {
                   
                 //console.log("chekc point")
                 console.log(doc);
                socket.emit('returcartinfo', doc);
                
                }
              });


         }); 
        







         socket.on('deletething', function(message) {
              socket.broadcast.emit('getrid', message);


         }); 
        
         
         socket.on('changelist', function(message) {
            socket.broadcast.emit('reachfinal', message);


         }); 

         socket.on('starter', function(message) {
            console.log(message);
            socket.broadcast.emit('deliverdata');


         }); 
        
         socket.on('takedel', function(message) {
          console.log(message); 
          socket.broadcast.emit("gofinal", message);


         }); 


         socket.on('sendclinet', function(message) {
           // logger.log('info',message.value);
            //console.log(message);
            console.log(message);
            socket.broadcast.emit('firstreponse', message);
            
            //console.log('from console',message.value);
        });
        

        
        socket.on( 'deleteuser', function(user) {
             //console.log(user.userId);
             if(user.userId == "managemaster"){
                socket.emit('finishd'
                 , "impossible");

             }else{
                userlist.remove({"username" : user.userId}, function(err, doc) {
                 
                   if(err){
                       console.log(err);
                   }
                   else{
                     console.log( "success");
                    socket.emit('finishd', 'do change');
                            
                     
                       
                   }
             });




             }
          


            
        });

         socket.on('authorizeuser', function(user) {
            //console.log("check user point"); 
            console.log(user);
            var valus; 
            if(user.userstatus == true ){
                valus= false; 
            }else{
                valus= true ;
            }

             userlist.update({ "username": user.userId}, {$set : {"amdin" : valus }  })
                // execute the above query
                .exec(function(err, doc) {
                    // log any errors
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(doc);
                        console.log("check point");
                        
                        socket.emit('cccheck', 'do change');
                    }
           });
           
              /*
              userlist.find({username: user.userId}, function(err, doc) {
            // log any errors
                 if (err) {
                   console.log(err);
                  }
                 // or send the doc to the browser as a json object
                 else {
                   
                 //console.log("chekc point")
                 //console.log(doc);
                   
                   console.log(doc);

                   socket.emit('cccheck', 'do change');
                
                }
            });

             */


             

           // logger.log('info',message.value);
            //console.log(message);

            
            //console.log('from console',message.value);
        });



         socket.on('getuser', function(message) {
            userlist.find({}, function(err, doc) {
            // log any errors
                 if (err) {
                   console.log(err);
                  }
                 // or send the doc to the browser as a json object
                 else {
                   
                 //console.log("chekc point")
                 //console.log(doc);
                socket.emit('returnuser', doc);
                
                }
            });
           // logger.log('info',message.value);
            //console.log(message);
            
            //console.log('from console',message.value);
        });

        
         socket.on('productDelete', function(message){
             

             console.log(message);
             var check = message+"";

             
             product.remove({"Name" : check}, function(err, doc) {
                 
                   if(err){
                       console.log(err);
                   }
                   else{
                     console.log( "success");
                     socket.emit("reback" , '/#/input'); 
                           
                     
                       
                   }
                 
             });
             









         }); 


         socket.on('productSave', function(message) {

         	//console.log(message);
            var preProduct = 
            {
             Name : message.name,
             Desc : message.desc,
             Price : message.price, 
             Image : message.image
             };
            //console.log(preProduct)
            let insertProduct = new product (preProduct); 
            

             insertProduct.save(function(err, doc) {
                    if (err) {
                      console.log(err);
                    }
                    else {
                     // console.log(doc); 
                      socket.emit('receiveP', 'success save!!');
                       
                    }
             });
             
      
          
            //socket.emit('resultp', 'success');
        
         });	


         socket.on('getProduct', function(message) {
             product.find({}, function(err, doc) {
            // log any errors
                 if (err) {
                   console.log(err);
                  }
                 // or send the doc to the browser as a json object
                 else {
                   
                 //console.log("chekc point")
                 console.log(doc);
                 socket.emit("takeProduct", doc);
                
                }
            });
         	




        
         });

          /*
          socket.on('saveArticle', function(message) {

         	console.log(message);
              
             var putitle = {title : message};
             let newArticle = new ntimes(putitle);

         	 newArticle.save(function(err, doc) {
				    if (err) {
				      console.log(err);
				    }
				    else {
				      console.log(doc); 
				       socket.emit('returncheck', 'success save!!');
				    }
				  });
             



        
         });	
	   */
     

    
};