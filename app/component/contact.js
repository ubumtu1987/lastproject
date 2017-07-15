import React from "react";
import Header from "./section/header.js";
import Footer from "./section/footer.js";


var Contact = React.createClass({

    render: function() {

         return(
           <div>
                <h1 className="header"><a href="#/main"> A Matcha Made in Heaven</a></h1>
                <Header SelectedMenu="Contact"/>

                   <h2> Contact Us </h2>
                       <div id="content">
                            <div className="background_info">
                                <div className="page_info">
                                    <div className="container cf">
                                        <div className="article_left">
                                             <div>
                                                <img className= "contact-img" src="../images/contact.jpg" style={{height: 280, width: 350}} alt="Contact Us"></img>
                                            </div>
                                        </div>
                                        <div className="article_right">
                                            <p style={{padding: "0px"}}></p>
                                            <p><span>We are pleased to welcome you into the fascinating&nbsp;world of artisanal&nbsp;matcha. Please drop us a line&nbsp;below if you have any&nbsp;questions or&nbsp;would like to share any feedback with us. Please get in touch!</span></p>
                                            <p></p>
                                            <p></p>
                                              <p style={{padding: "0px"}}></p>
                                            <div id="template">
                                                <div id="template_info">
                                                <form method="post" id="contact_form" action="https://formspree.io/amatchamadeinheaven@gmail.com">
                                                    <div className="above_form">
                                                        <form className="contact-form">
                                                            <input type="hidden" value="contact" name="form_type"></input>
                                                            <input type="hidden" name="utf8" value="✓"></input>
                                                        </form>
                                                    </div>
                                                    <div className="large_form">
                                                        <label for="contact_name" style={{display: "none"}}>Name</label>
                                                        <input type="text" class="required" id="contact_name" name="contact[name]" placeholder="Name"style={{height: 40, width: 450}}></input>
                                                    </div>
                                                    <div className="large_form">
                                                        <label for="contact_email" style={{display: "none"}}>Email</label>
                                                        <input type="email" class="required" id="contact_email" name="contact[email]" placeholder="Email"style={{height: 40, width: 450}}></input>
                                                    </div>
                                                    <div className="large_form">
                                                        <label for="message" style={{display: "none"}}>Message</label>
                                                        <textarea id="message" class="required" name="contact[body]" style={{maxHeight: "118px"}} placeholder="Message"style={{height: 200, width: 450}}></textarea>
                                                    </div>
                                                    <div className="action_bottom">
                                                        <input type="submit" value="Send"style={{height: 20, width: 40}}></input>
                                                    </div>
                                                </form>   
                                                </div>
                                            </div>
                                        </div>
                                     </div>
                                </div>
                            </div>   
                        </div>             
                    <Footer/>

           </div>

         );
     
     }



}); 

module.exports = Contact;