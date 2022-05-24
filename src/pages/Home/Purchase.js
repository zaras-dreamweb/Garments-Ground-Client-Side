import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";

const Purchase = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth);
    const [productQuantity, setProductQuantity] = useState({});
    const { register, formState: { errors }, handleSubmit } = useForm();


    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProductQuantity(data));
    }, [productQuantity]);

    const onSubmitIncrease = (data, event) => {
        console.log(data);
        const oldQuantity = parseInt(productQuantity.your_purchase);
        const newQuantity = parseInt(event.target.your_purchase.value);

        const your_purchase = oldQuantity + newQuantity;
        const product = { your_purchase };
        setProductQuantity(product)

        const url = `http://localhost:5000/products/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('Product Increased successfully!!')
                event.target.reset();
            })
    }





    const handleDecrease = event => {
        event.preventDefault();
        const oldQuantity = parseInt(productQuantity.your_purchase);
        const your_purchase = oldQuantity - parseInt(event.target.your_purchase.value);
        const product = { your_purchase };
        setProductQuantity(product)

        const url = `http://localhost:5000/products/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('Product Decreased successfully!!')
                event.target.reset()
                productQuantity.your_purchase.reset()
            })
    }


    const handlePlaceOrder = event => {
        event.preventDefault();
        const name = productQuantity.name;
        const quantity = productQuantity.your_purchase;
        const phone = event.target.phone.value;
        const address = event.target.address.value;
        const price = productQuantity.your_price;


        const order = {
            name,
            quantity,
            user: user.displayName,
            email: user.email,
            phone,
            address,
            price
        }

        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                event.target.reset();
            })

    }



    // const onSubmitDecrease = (data, event) => {
    //     console.log(data);
    //     const oldQuantity = parseInt(productQuantity.your_purchase);
    //     const your_purchase = oldQuantity - parseInt(event.target.your_purchase.value);
    //     const product = { your_purchase };
    //     setProductQuantity(product)

    //     const url = `http://localhost:5000/products/${id}`;
    //     fetch(url, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json',
    //         },
    //         body: JSON.stringify(product)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log('success', data);
    //             alert('Product Decreased successfully!!')
    //             event.target.reset()
    //         })

    // }


    return (
        <div>
            <div className="hero-content flex-col lg:flex-row">
                <div className="card max-w-sm ml-40 bg-success">
                    <div class="pl-5 pt-5">
                        <figure class="w-20 rounded">
                            <img src={productQuantity.image} alt='' class="mask mask-circle " />
                        </figure>
                    </div>
                    <div className='pl-5 '>
                        <h1 className="text-3xl font-bold pt-3">{productQuantity.name}</h1>
                        <p className="py-3"><span className='font-bold'>Description:</span> {productQuantity.description}</p>
                        <p className="py-3"><span className='font-bold'>Available Quantity:</span> {productQuantity.available_quantity} pcs</p>
                        <p className="py-3"><span className='font-bold'>Minimum Purchase:</span> {productQuantity.minimum_order_quantity} pcs</p>
                        <p className="py-3"><span className='font-bold'>Price:</span> ${productQuantity.price} /pc</p>
                        <p className="py-3"><span className='font-bold'>Your Purchase Quantity:</span> {productQuantity.your_purchase} pcs</p>
                        <p className="py-3"><span className='font-bold'>Your Price:</span> ${productQuantity.your_price} /pc</p>
                        {/* increase form */}
                        <form onSubmit={handleSubmit(onSubmitIncrease)}>
                            <input type="text" name='your_purchase' placeholder="Increase Quantity"
                                {...register("your_purchase", {
                                    required: {
                                        value: true,
                                        message: 'Enter a valid quantity'
                                    },
                                    max: {
                                        value: 2000,
                                        message: 'less than available quantity required'
                                    }
                                })} />
                            <p>
                                {errors.your_purchase?.type === 'required' && <span className='text-error'>{errors.your_purchase.message}</span>}
                                {errors.your_purchase?.type === 'max' && <span className='text-error'>{errors.your_purchase.message}</span>}
                            </p>

                            <button type="submit" className="btn btn-primary mb-3 m-2">Increase Quantity</button>
                        </form>
                        {/* decrease form */}
                        <form onSubmit={handleDecrease}>
                            <input type="text" name='your_purchase' placeholder="Decrease Quantity" />
                            <button type="submit" className="btn btn-primary mb-3 m-2">Decrease Quantity</button>
                        </form>
                    </div>
                </div>




                <div class="hero">
                    <div>
                        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-success">
                            <form onSubmit={handlePlaceOrder}>
                                <div class="card-body">
                                    <div class="form-control">
                                        <input type="text" value={user.displayName} placeholder='' class="input input-bordered" disabled />
                                    </div>
                                    <div class="form-control">
                                        <input type="text" value={user.email} placeholder='' class="input input-bordered" disabled />
                                    </div>
                                    <div class="form-control">
                                        <input type="text" name='name' value={productQuantity.name} placeholder='' class="input input-bordered" disabled />
                                    </div>
                                    <div class="form-control">
                                        <input type="text" name='quantity' value={productQuantity.your_purchase} placeholder='' class="input input-bordered" disabled />
                                    </div>
                                    <div class="form-control">
                                        <input type="text" name='price' value={productQuantity.your_price} placeholder='' class="input input-bordered" disabled />
                                    </div>
                                    <div class="form-control">
                                        <input type="text" name='address' placeholder="Address" class="input input-bordered" />
                                    </div>
                                    <div class="form-control">
                                        <input type="text" name='phone' placeholder="Phone" class="input input-bordered" />
                                    </div>
                                    <div class="form-control mt-6">
                                        <button type='submit' class="btn btn-primary">Place Order</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;