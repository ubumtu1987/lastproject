import React from "react";
import {  Router , Route , hashHistory , IndexRoute} from "react-router";
import Home from "../component/home.js";
import Main from "../component/main.js";
import Contact from "../component/contact.js";
import Productpre from "../component/preproduct.js";
import Cartse from "../component/testtestcart.js";
import What from "../component/whatismatcha.js";
import Recipes from "../component/recipes.js";
import Health from "../component/healthbenefits.js";

import Cart from "../component/cart.js";
import loginr from "../component/loginp/loginr.js";
import divis from "../component/adminster.js";
import user from "../component/productman/deeper/master/usercontrol.js";
import mp from "../component/productman/deeper/master/querysecond.js";
import ts from "../component/inputcart.js";
import Product from "../component/Allproducts.js";



const routes = (
  
     <Router  history = {hashHistory}>

        <Route path = "/" component = {Home} /> 
        <Route path = "/testcart" component = {ts} />     
        <Route path = "/regi" component = {loginr} />
        <Route path = "/Main" component = {Main} />
        <Route path = "/Allproduct" component = {Product} />
         <Route path = "/controlp" component = {mp} />
        <Route path = "/input" component = {divis} /> 
        <Route path = "/controlu" component = {user} />
        <Route path = "/Contact" component = {Contact} />
         <Route path = "/cartcart" component = {Productpre} /> 
        <Route path = "/Product" component = {Productpre} /> 
        <Route path = "/What" component = {What} />
        <Route path = "/Recipes" component = {Recipes} />
        <Route path = "/Health" component = {Health} />
        <Route path = "/Carts" component = {Cartse} />
        <Route path = "/Cart" component = {Cart} />
           
     </Router>
  
);

export default routes;

