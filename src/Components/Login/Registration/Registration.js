import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import img from '../../../images/Traveller 1.png'
import google from '../../../images/google.png'
import useAuth from '../../../hooks/useAuth';
const Registration = () => {
  const{handleEmailChange,handlePasswordChange,handleRegistration,handleNameChange,error,signInUsingGoogle}=useAuth();
    return (
        <div style={{backgroundColor:'#f8f2eb'}}>
        <Container className="py-5">
         <Row className="d-flex align-items-center" xs={1} md={2} lg={2}>
        <Col>
        
        <Form onSubmit={handleRegistration} className="text-start">
        <h2 className="fw-bold">Welcome Back!</h2>
        <h6>Please Register your account</h6>
        <Form.Group className="mb-3" controlId="formGridAddress1">
       
      <Form.Control onBlur={handleNameChange} placeholder="Enter your name" required/>
      </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        
          <Form.Group className="mb-3" controlId="formBasicPassword">
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
            <Form.Text className="text-danger">
          {error}
           </Form.Text>
          </Form.Group>
          <Button variant="success" type="submit">
            Register
          </Button>
          {/* <Button className="mx-3" variant="outline-success">Create Account</Button>{' '} */}
          <h6 className="py-4">Already have an account? <NavLink to="/login">login</NavLink></h6>
          
        </Form>
        <div className="text-start">
<button onClick={signInUsingGoogle} className="btn btn-light shadow rounded-pill">
<div className="text-start d-flex align-items-center">
    
    <img style={{width:'2rem'}} src={google} alt="" />
    
    <h6 className="mx-4">Login with google</h6>
    
    </div>
  
</button>
</div>
        
                          </Col>
                          <Col>
                          <img className="img-fluid" src={img} alt="" />
                          </Col>
                      </Row>
                    </Container>
                </div>
    );
};

export default Registration;