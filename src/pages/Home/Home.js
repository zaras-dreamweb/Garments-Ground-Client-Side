import React from 'react';
import Banner from './Banner';
import BussinessSummery from './BussinessSummery';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BussinessSummery></BussinessSummery>
            <Products></Products>

        </div>
    );
};

export default Home;