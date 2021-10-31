import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import img from '../../../images/logo.png'
const Header = () => {
    const{user,logOut}=useAuth();
    return (
        <div >
   <Navbar collapseOnSelect className="py-4" bg="dark" expand="lg">
    <Container>
    <NavLink  to="/home">
        <img className="w-75" src={img} alt="" />
    </NavLink>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto">
        <NavLink className="px-3" activeStyle={{
         fontWeight: "bold",
          color: "salmon"
         }} 
       style={{textDecoration:'none',color:'white'}} to="/home">Home</NavLink>
        { user?.email?
          <NavLink className="px-3" activeStyle={{
         fontWeight: "bold",
          color: "salmon"
         }} 
       style={{textDecoration:'none',color:'white'}} to="/userOrders">My Orders</NavLink>:
      ''
      }
        { user?.email?
          <NavLink className="px-3" activeStyle={{
         fontWeight: "bold",
          color: "salmon"
         }} 
       style={{textDecoration:'none',color:'white'}} to="/allOrders">All Orders</NavLink>:
       ''
      }
        
        {
          user?.email?
          <NavLink className="px-3" activeStyle={{
         fontWeight: "bold",
          color: "salmon"
         }} style={{textDecoration:'none',color:'white'}} to="/addService">Add Service</NavLink>
         :
         ''
        }
        
       
        
      </Nav>
      <div className="ms-auto">
      {/* <NavLink  to="/login">
        <Button variant="warning">Login</Button>
        </NavLink> */}
         {
        user?.email?
        <Button onClick={logOut} variant="warning">Logout</Button>
        :
        <NavLink  to="/login">
        <Button variant="warning">Login</Button>
        </NavLink>
        }
         </div>
         <Navbar.Text className="mx-2 text-light">
        Signed in as: <a href="#login" style={{textDecoration:'none'}} className="text-info">{user?.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;