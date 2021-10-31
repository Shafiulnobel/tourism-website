import React from 'react';
import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import img from '../../../images/logo.png'
const Footer = () => {
    const changeColor={color:'white'}
    return (
        <div className="bg-dark py-5">
            <Container>
                <Row>
                    <Col className="text-start">
                       <img src={img} alt="" />
                       <p className="my-4" style={changeColor}>
KodeTravel is a travel service website. Your can't plan your tour with us with a very cheapest rate.</p>
                       <h6  className="d-inline" style={{fontSize:'30px',fontWeight:'bold',color:'white'}}>FOLLOW US</h6>
                       <NavLink to='/'>
                           <i style={{margin:'10px',fontSize:'30px'}} className="fab fa-facebook"></i>
                           </NavLink>
                       <NavLink to='/'>
                          <i style={{margin:'10px',fontSize:'30px'}} className="fab fa-twitter"></i>
                           </NavLink>
                       <NavLink to='/'>
                          <i style={{margin:'10px',fontSize:'30px'}} className="fab fa-instagram"></i>
                           </NavLink>
                       <NavLink to='/'>
                       <i style={{margin:'10px',fontSize:'30px'}} className="fab fa-linkedin-in"></i>
                           </NavLink>
                    </Col>
                    <Col className="text-start ps-5 ms-5">
                    <h3 style={changeColor}>Contact with Us</h3>
                    <h6 style={changeColor}>
                        <i className="fas fa-mobile-alt pe-2"></i>
                        <span>+244567684</span>
                    </h6>
                    <h6 style={changeColor}>
                       <i className="fas fa-envelope pe-2"></i>
                        <span>shafiulislamnobel1@gmail.com</span>
                    </h6>
                    
                    <InputGroup className="mb-3 mt-4 w-75">
                    <FormControl
                  placeholder="Enter your email"/>
               <InputGroup.Text style={{background:'orange',color:'white'}} id="basic-addon2">submit</InputGroup.Text>
                     </InputGroup>
                   
                    </Col>
                </Row>
                <hr className="text-white"/>
                <div className="text-start">
                    <NavLink style={{textDecoration:'none',color:'white'}} to='/'>Tearms and Conditions</NavLink>
                    <span className="text-white"> | </span>
                    <NavLink style={{textDecoration:'none',color:'white'}} to='/'>privacy </NavLink>
                </div>
            </Container>
        </div>
    );
};

export default Footer;