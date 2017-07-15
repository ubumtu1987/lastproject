import React from "react";
import Header from "./section/header.js";
import Footer from "./section/footer.js";


var Contact = React.createClass({

	render: function() {

	     return(
	       <div>

	       	<Header SelectedMenu="Contact"/>

	           <h2> Contact Us </h2>
	           
                   <div class = "fliter-modal-content">
                            <form action="https://formspree.io/heiditochigi@gmail.com" method="POST">
                            <ul>
                                <li>
                                    <label for="name">Name</label>
                                    <input type="text" id="name" name="name" placeholder="George Washington" required="required"></input>
                                </li>
                                 <li>
                                    <label for="email">Email</label>
                                    <input type="email" id="email" name="email" placeholder="example@gmail.com" required="required"></input>
                                </li>
                                <li>
                                    <label for="message">Message</label>
                                    <textarea id="message" name="message" required="required"></textarea>
                                </li>
                             </ul>
                                <input type="submit"></input>
                            </form>
                    </div> 

	           
	       </div>

	     );
	 
	 }



}); 

module.exports =Contact;