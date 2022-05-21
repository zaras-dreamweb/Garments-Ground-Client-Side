import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faPeopleGroup, faShippingFast, faFlagCheckered } from '@fortawesome/free-solid-svg-icons';


const BussinessSummery = () => {
    return (
        <div>
            <h1 className='text-primary text-5xl text-center font-bold my-10 bg-success py-5'>Over View</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 ml-8'>
                < div class="card w-96 bg-base-100" >
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-6xl text-blue-400"><FontAwesomeIcon icon={faPeopleGroup}></FontAwesomeIcon></h2>
                        <p className='text-4xl text-primary font-semibold'>500 +</p>
                        <p className='text-3xl text-blue-400'>Regular Clients</p>
                    </div>
                </div >
                < div class="card w-96 bg-base-100" >
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-6xl text-blue-400"><FontAwesomeIcon icon={faShippingFast}></FontAwesomeIcon></h2>
                        <p className='text-4xl text-primary font-semibold'>300 +</p>
                        <p className='text-3xl text-blue-400'>EveryDay Shipping</p>
                    </div>
                </div >
                < div class="card w-96 bg-base-100" >
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-6xl text-blue-400"><FontAwesomeIcon icon={faFlagCheckered}></FontAwesomeIcon></h2>
                        <p className='text-4xl text-primary font-semibold'>100 +</p>
                        <p className='text-3xl text-blue-400'>Countries We Ship</p>
                    </div>
                </div >
            </div >
        </div>
    );
};

export default BussinessSummery;