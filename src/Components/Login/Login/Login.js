import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import img from '../../../images/Traveller 1.png'
import google from '../../../images/google.png'
import useAuth from '../../../hooks/useAuth';
const Login = () => {
  const{signInUsingGoogle}=useAuth();
  
    return (
<div style={{backgroundColor:'#f8f2eb'}}>
<Container className="py-5">
 <Row className="d-flex align-items-center" xs={1} md={2} lg={2}>
<Col className="text-start">
<h2 className="fw-bold">Welcome Back!</h2>
<h6>Please Login into your account</h6>

<div className="text-start my-4">

<button onClick={signInUsingGoogle} className="btn btn-light shadow rounded-pill">
<div className="text-start d-flex align-items-center">
    
    <img style={{width:'2rem'}} src={google} alt="" />
    
    <h6 className="mx-4">Login with google</h6>
    
    </div>
  
</button>
{/* <h6 className="py-4">Don't have an account? <NavLink to="/registration">Sign up</NavLink></h6> */}
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

export default Login;