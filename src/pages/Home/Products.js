import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

const Products = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useProducts();

    const handleBuyNow = id => {
        navigate(`/purchase/${id}`)
    }


    return (
        <div>
            <h1 className='text-primary text-5xl text-center font-bold my-10 bg-success py-5'>Our Products</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 lg:ml-8'>
                {
                    products.map(product => <p key={product._id}>
                        <div className="card w-96 bg-base-100 shadow-xl image-full">
                            <figure><img src={product.image} alt='' /></figure>
                            <div className="card-body">
                                <div className="avatar mb-6">
                                    <div className="w-24 rounded-full">
                                        <img src={product.image} alt='' />
                                    </div>
                                </div>

                                <h2 className="card-title"><span className='text-secondary'>Name: </span> {product.name}</h2>
                                <h2 className="card-title"><span className='text-secondary'>Available Quantity: </span> {product.available_quantity} pcs</h2>
                                <h2 className="card-title"><span className='text-secondary'>Minimum Purchase: </span>{product.minimum_order_quantity} pcs</h2>
                                <h2 className="card-title"><span className='text-secondary'>Price:</span> $ {product.price}/pc</h2>
                                <p><strong className='text-secondary'>Description</strong>: {product.description}</p>
                                <div className="card-actions justify-end">
                                    <button onClick={() => handleBuyNow(product._id)} className="btn btn-secondary text-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Products;