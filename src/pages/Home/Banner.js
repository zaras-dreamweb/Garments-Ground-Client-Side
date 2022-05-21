import React from 'react';
import zip from '../../images/banner.png';
import btn2 from '../../images/btn.png';
import test from '../../images/test.jpg';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div className="carousel-item relative w-full">
                    <img style={{ height: '600px' }} src={test} alt="" className="w-full" />
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