import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import img2 from '../../images/22222.png'
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Discount = () => {
    return (
        <div>
            <h1 className='text-blue-400 text-5xl text-center font-bold my-10 py-5'>Enjoy Our Free Samples!</h1>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img2} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold text-primary">Free Sample </h1>
                        <p className="py-6">Get registered as our customer to get free samples</p>
                        <p className="py-6"><FontAwesomeIcon className='text-primary' icon={faStar}></FontAwesomeIcon><FontAwesomeIcon className='text-primary' icon={faStar}></FontAwesomeIcon> 1 time applicable only!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discount;