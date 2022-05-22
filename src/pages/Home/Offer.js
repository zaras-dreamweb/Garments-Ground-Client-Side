import React from 'react';
import img from '../../images/btn.png'


const Offer = () => {
    return (
        <div>
            <h1 className='text-primary text-5xl text-center font-bold my-10 bg-success py-5'>We are giving the best DEALS!!</h1>
            <div class="hero bg-pink-100">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} alt='' class="max-w-sm rounded-lg shadow-2xl pb-5" />
                    <div>
                        <h1 class="text-5xl text-secondary font-bold pb-8">Grab Fast!!</h1>
                        <p class="py-3 text-2xl"> <li className='text-primary'>Free delivery on purchase over $2000</li></p>
                        <p class="py-3 text-2xl"> <li className='text-primary'>Buy 400pcs button and get 50 pcs free!!</li></p>
                        <p class="py-3 text-2xl"> <li className='text-primary'>200 pcs collars for $1000</li></p>
                        <p class="py-3 text-2xl"> <li className='text-primary'>200 pcs zippers for $900</li></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;