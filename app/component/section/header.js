import React from "react";
import { Menu, Icon } from "antd";
import { Modal, Button } from 'antd';
var axios = require("axios");

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;



var Header = React.createClass({
  getInitialState: function() {
    return {
     current: "Main",
     visible:false,
     check : ""

    };
  },

  handleClick: function(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
      
    });
    },

  handleOk: function(e) {
   this.setState({
      visible: false,
    });  

  },

  handleCancel: function(e) {
   this.setState({
      visible: false,
    });  

  
  },
  handlelog : function(){
      console.log("hi");
  axios.patch("/login/logout").then((response) => {

      window.location.reload();

  });  

  


  },
  componentWillMount: function(){
     axios.patch("/login/getcookie").then((response) => {
        console.log(response.data);
        let val = response.data+"";
        console.log(val);
          if(val == "true"){
              this.setState({
                 check: "login",
              }); 
                      

          }

        
      });   











  },

  
  render: function() {


   if(this.state.check == ""){
    return (
      <div>
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" className="menu">
                               
    

         <SubMenu title={<span><Icon type="setting" key="Main" />Info</span>}>
          
            <Menu.Item key="What"><a href="#/What">What is Matcha</a></Menu.Item>
            <Menu.Item key="Health"><a href="#/Health">Health Benefits</a></Menu.Item>
            <Menu.Item key="Recipes"><a href="#/Recipes">Recipes</a></Menu.Item>
        </SubMenu>
        

         <SubMenu title={<span><Icon type="setting" key="Main" />Products</span>}>
          
            <Menu.Item key="Product"><a href="#/product">View All Products</a></Menu.Item>
            
        </SubMenu>

        <SubMenu title={<span className="log"><Icon type="login" key="Main"/><a href="/login">Register/Login</a></span>}>
              
        </SubMenu>
        <SubMenu title={<span className="log"><Icon type="Contact" key="Main"/><a href="#/Contact">Contact Us</a></span>}>
              
        </SubMenu>
        <SubMenu title={<span className="log"><Icon type="Cart" key="Main"/><a href="#/Carts">Cart</a></span>}>
              
        </SubMenu>
       



      </Menu>
      
      </div>
    

    );

   }else{
       return (
      <div>
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" className="menu">
                               
    

         <SubMenu title={<span><Icon type="setting" key="Main" />Info</span>}>
          
            <Menu.Item key="What"><a href="#/What">What is Matcha</a></Menu.Item>
            <Menu.Item key="Health"><a href="#/Health">Health Benefits</a></Menu.Item>
            <Menu.Item key="Recipes"><a href="#/Recipes">Recipes</a></Menu.Item>
        </SubMenu>
        

         <SubMenu title={<span><Icon type="setting" key="Main" />Products</span>}>
          
            <Menu.Item key="Product"><a href="#/Allproduct">View All Products</a></Menu.Item>
            
        </SubMenu>
        <SubMenu title={<span className="log"><Icon type="login" key="Main"/><a href="/login">Manage</a></span>}>
              
        </SubMenu>

  
        <SubMenu title={<span className="log"><Icon type="Contact" key="Main"/><a href="#/Contact">Contact Us</a></span>}>
              
        </SubMenu>
        <SubMenu title={<span className="log"><Icon type="Cart" key="Main"/><a href="#/Cart">Cart</a></span>}>
              
        </SubMenu>
        <SubMenu title={<span className="log"><Icon type="login" key="Main"/> <button className="btn btn-primary" onClick={() => this.handlelog()}>logout</button></span>}>
              
        </SubMenu>
       




      </Menu>
      
      </div>
    

    );


    }






  }
});

module.exports = Header;