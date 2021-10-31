import React from 'react';
import { Button } from 'react-bootstrap';
import './Banner.css'
const Banner = () => {
    return (
 <div>
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active one py-5">
     <div className="py-5 my-5">
     <h2 className="lg-font-style">Amazing Tour In <span className="stroke">Indonesia</span> </h2>
     <h5 className="sm-font-style">7 Days, 8 Night Tour</h5>
     <Button className="mt-4" variant="outline-warning">Book Now</Button>
    </div>
    
    </div>
    <div className="carousel-item two py-5">
        <div className="py-5 my-5">
        <h2 className="lg-font-style">Amazing Tour In <span className="stroke">Madagascar</span> </h2>
      <h5 className="sm-font-style">7 Days, 8 Night Tour</h5>
      <Button className="mt-4" variant="outline-warning">Book Now</Button>
        </div>
      
    </div>
    <div className="carousel-item three py-5">
        <div className="py-5 my-5">
        <h2 className="lg-font-style">Amazing Tour In <span className="stroke">Hampshire</span></h2>
      <h5 className="sm-font-style">7 Days, 8 Night Tour</h5>
      <Button className="mt-4" variant="outline-warning">Book Now</Button>
        </div>
  
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    );
};

export default Banner;