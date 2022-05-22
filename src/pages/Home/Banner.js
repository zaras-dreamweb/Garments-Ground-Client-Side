import React from 'react';
import test from '../../images/test.jpg';
import test2 from '../../images/banner22.jpg';
import test3 from '../../images/new.png';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div className="carousel-item relative w-full">
                    <img style={{ height: '600px' }} src={test3} alt="" className="w-full" />
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

        </div >





    );
};

export default Banner;