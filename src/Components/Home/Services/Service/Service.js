import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Service = (props) => {
    const{_id,name,description,days,price,img}=props.service;
    return (
    <div>
    <Col>
      <Card className="h-100">
        <Card.Img style={{width:'100%',height:'15rem'}} variant="top" src={img} />
        <Card.Body className="text-start">
          <Card.Title>{name}</Card.Title>
          <Card.Text>
           {description}
          </Card.Text>
          <Card.Text>
           price: <span className="text-warning">${price}</span> 
          </Card.Text>
          <Card.Text>
           Days: <span className="text-danger">{days}</span> 
          </Card.Text>
          <NavLink to={`/details/${_id}`}>
          <button className="btn btn-warning">Book Now</button>
          </NavLink>
        
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Service;