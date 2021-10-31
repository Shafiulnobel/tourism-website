import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Review.css'
const Review = () => {
    return (
        <div>
        <Container className="my-5">
        <div className="my-5">
            <h5 className="text-warning">Our Traveller Say</h5>
            <h2 className="lg-txt">What Oue Traveller Say About Us</h2>
        </div>
            <Row xs={1} md={2} lg={3} className="g-4">
  {
    <Col>
      <Card className="py-5 rev-1">
          <div className="text-center">
          <Card.Img className="w-25" variant="top" src='https://i.ibb.co/pnM9Cgv/Asset-1-300x.png' />
          </div>
       
        <Card.Body>
          <Card.Title className="fw-bold">Jahid Hassan</Card.Title>
          <Card.Title className="travel-txt">Traveller</Card.Title>
          <Card.Text>
            I'm quite satisfy with their service. They are very friendly and give me super fast service all the time. Good Luch for them!
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
 }
  {
    <Col>
      <Card className="py-5">
          <div className="text-center">
          <Card.Img className="w-25" variant="top" src='https://i.ibb.co/sjmTnKW/Asset-6-300x.png' />
          </div>
        
        <Card.Body>
          <Card.Title className="fw-bold">Shwan Pull</Card.Title>
          <Card.Title className="travel-txt">Traveller</Card.Title>
          <Card.Text>
          I'm quite satisfy with their service. They are very friendly and give me super fast service all the time. Good Luch for them!
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
 }
  {
    <Col>
      <Card className="py-5">
        <div className="text-center">
        <Card.Img className="w-25" variant="top" src='https://i.ibb.co/0hhKcf0/review-1.png' />
        </div>
        <Card.Body>
        <Card.Title className="fw-bold">Dina Jems</Card.Title>
        <Card.Title className="travel-txt">Traveller</Card.Title>
          <Card.Text>
          I'm quite satisfy with their service. They are very friendly and give me super fast service all the time. Good Luch for them!
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
 }
</Row>
            </Container>

        </div>
    );
};

export default Review;