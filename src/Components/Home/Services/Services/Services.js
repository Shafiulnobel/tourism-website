import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    
    const [services,setServices] =useState([]);
    useEffect(()=>{
      // <Spinner animation="border" />
        fetch('https://eerie-phantom-27491.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
       
    },[])
    
    return (
        <div>
            <Container className="my-4">
             <h2 className="lg-txt">Choose The Package you Want!</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
            {
              services.length===0 ? 
              <div className="d-flex justify-content-center">
                <Spinner animation="border" />
              </div>
              :
              services.map(service=><Service
            service={service}
            key={service._id}
              ></Service>)
                }
</Row>
</Container>
        </div>
    );
};

export default Services;