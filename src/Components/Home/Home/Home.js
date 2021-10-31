import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Review from '../Review/Review';
import Services from '../Services/Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Gallery></Gallery>
            <Review></Review>
        </div>
    );
};

export default Home;