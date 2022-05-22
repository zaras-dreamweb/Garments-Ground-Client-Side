import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import usePurchase from '../../hooks/usePurchase';

const Purchase = () => {
    const { id } = useParams();
    const [purchase, setPurchase] = usePurchase(id);
    return (
        <div>
            <div>
                <div className="hero min-h-screen bg-success">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={purchase.image} alt='' />
                        <div>
                            <h1 className="text-5xl font-bold pb-7">{purchase.name}</h1>
                            <p className="py-3"><span className='font-bold'>Description:</span> {purchase.description}</p>
                            <p className="py-3"><span className='font-bold'>Available Quantity:</span> {purchase.available_quantity} pcs</p>
                            <p className="py-3"><span className='font-bold'>Minimum Purchase:</span> {purchase.minimum_order_quantity} pcs</p>
                            <p className="py-3"><span className='font-bold'>Description:</span> ${purchase.price} /pc</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;