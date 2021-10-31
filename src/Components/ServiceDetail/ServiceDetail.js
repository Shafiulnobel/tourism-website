import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './ServiceDetail.css'
const ServeiceDetail = () => {
    const{serviceId}=useParams();
    const{user}=useAuth();
    const[details,setDetails]=useState([]);
    
    useEffect(()=>{
       fetch(`https://eerie-phantom-27491.herokuapp.com/services/${serviceId}`)
       .then(res=>res.json())
       .then(data=>setDetails(data))
    },[])
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://eerie-phantom-27491.herokuapp.com/orders',data)
        .then(res=>{
          console.log(res)
            if(res.data.insertedId){
                alert('successfully added service! ')
                reset();
            }
        })
    };
    return (
        <div className="style">
 
      <Container className="my-5">
            <Card>
          <Row className="d-flex align-items-center" xs={1} md={2} lg={2}>
              <Col>
              <Card.Img className="img-fluid" variant="top" src={details?.img} />
              </Col>
              <Col className="style">
      <form  onSubmit={handleSubmit(onSubmit)}>
      <div className="d-flex align-items-center">
      <p className="my-2 mx-2">Email</p>
      {user?.email && <input readOnly={true} defaultValue={user?.email} {...register("email")}/>} 
      </div>
        <div className="d-flex align-items-center">
        <p className="my-2 mx-2">Username</p>
        {user?.displayName && <input readOnly={true} defaultValue={user?.displayName} {...register("username", { required: true, maxLength: 20 })} placeholder="username"/>}
        </div>
        <div className="d-flex align-items-center">
        <p className="my-2 mx-2">Place</p>
      {details?.name && <input readOnly={true} defaultValue={details?.name} {...register("name", { required: true, maxLength: 20 })} placeholder="service name"/>}
          </div>  
      <div className="d-flex align-items-center">
      <p className="my-2 mx-2">Details</p>
      {details?.description && <textarea readOnly={true} defaultValue={details?.description} {...register("description")} placeholder="service description"/>}
      </div>
       
      <div className="d-flex align-items-center">
      <p className="my-2 mx-2">Days</p>
      {details?.days && <input readOnly={true} defaultValue={details?.days} type="number" {...register("days")} placeholder="days of package"/>}
      </div>
        <div className="d-flex align-items-center">
        <p className="my-2 mx-2">price</p>
      {details?.price && <input readOnly={true} defaultValue={details?.price} type="number" {...register("price")} placeholder="service price"/>}
        </div>
       <div className="d-flex align-items-center">
       <p className="my-2 mx-2">phone</p>
       <input {...register("phone", { required: true, maxLength: 20 })} placeholder="add your phone number" required/>
       </div>
       
      {'pending' && <input className="d-none" readOnly={true} defaultValue="pending.." {...register("status", { required: true, maxLength: 20 })} placeholder="status"/>}
      <input type="submit" value="order"/>
    </form>
        
              </Col>
          </Row>
      
      </Card>
    
    </Container>
        </div>
    );
};

export default ServeiceDetail;