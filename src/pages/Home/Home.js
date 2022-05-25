import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BussinessSummery from './BussinessSummery';
import Discount from './Discount';
import Offer from './Offer';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BussinessSummery></BussinessSummery>
            <Products></Products>
            <Discount></Discount>
            <Reviews></Reviews>
            <Offer></Offer>
        </div>
    );
};

export default Home;