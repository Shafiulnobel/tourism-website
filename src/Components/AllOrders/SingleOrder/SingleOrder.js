import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const SingleOrder = (props) => {
    
    const{_id,email,phone,name,days,price,status}=props.order;
    const{user}=useAuth();
    
    const handleDeleteOrder= id =>{
      const proceed=window.confirm('Are you sure,you want to delete');
      if(proceed){
        const url=`http://localhost:5000/orders/${id}`
        fetch(url,{
            method:'DELETE',
 
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                alert('deleted Successfully!')
                // const remainingOrders=orders.filter(order=>order._id !== id)
                // setOrders(remainingOrders);
            }
        });
      }
    }
    return (
   <div>
       <Col>
      <Card>
        <Card.Body className="text-start">
          <Card.Text>
           <h6>Email: {email}</h6>
          </Card.Text>
          <Card.Text>
           <h6>phone: {phone}</h6>
          </Card.Text>
          <Card.Text>
           <h6>service-name: {name}</h6>
          </Card.Text>
          <Card.Text>
           <h6>Days: {days}</h6>
          </Card.Text>
          <Card.Text>
           <h6>Price: {price}</h6>
          </Card.Text>
          <div className="d-flex align-items-center">
          <Card.Text>
           <h6>status: {status}</h6>
          </Card.Text>
          <div className="mx-4">
          <button className="btn btn-success">click for approve<i className="fas fa-check-circle mx-2 text-warning"></i></button>
          </div>
          </div>
          <button onClick={() => handleDeleteOrder(_id)} className="btn btn-danger">Delete</button>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default SingleOrder;