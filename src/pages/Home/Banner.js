import React from 'react';
import test3 from '../../images/new.png';

const Banner = () => {
    return (
        <div>
            {/* <div className="carousel w-full">
                <div className="carousel-item relative w-full">
                    <img style={{ height: '600px' }} src={test3} alt="" className="w-full" />
                </div> */}
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${test3})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-secondary">Garments Gorund</h1>
                        <p className="mb-5 text-2xl text-secondary">Your Choise! Our Products!!</p>

                    </div>
                </div>
            </div>











            {/* <div className="carousel carousel-center rounded-box">
                <div className="carousel-item">
                    <img src={btn2} alt="" />
                </div>
                <div className="carousel-item">
                    <img src={zip} alt="" />
                </div>
                <div className="carousel-item">
                    <img src={btn2} alt="" />
                </div>
                <div className="carousel-item">
                    <img src={zip} alt="" />
                </div> */}

        </div>






    );
};

export default Banner;