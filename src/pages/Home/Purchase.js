import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const Purchase = () => {

    const { id } = useParams();
    const [user] = useAuthState(auth);
    const [productQuantity, setProductQuantity] = useState({});
    const [buttonStatus, setbuttonStatus] = useState(true);
    const { register, formState: { errors }, handleSubmit } = useForm();


    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProductQuantity(data));
    }, [productQuantity]);



    // ----------------Handle Increase in Quantity

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
                toast.success('Product Increased successfully!!')
                event.target.reset();
            })
    }




    // ----------------Handle Decrease in Quantity

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
                toast.success('Product Decreased successfully!!')
                event.target.reset()
                productQuantity.your_purchase.reset()
            })
    }

    // ------------------- Handle Place Order

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
                toast.success('Order Placed Successfully!!')
                event.target.reset();
            })
    }

    return (
        <div>
            <div className="hero-content flex-col lg:flex-row">
                <div className=" ml-40 bg-success">
                    <div className="pl-5 pt-5">
                        <figure className="w-20 rounded">
                            <img src={productQuantity.image} alt='' className="mask mask-circle " />
                        </figure>
                    </div>
                    <div className='pl-5 '>
                        {/*----------------- Product details-------------- */}

                        <h1 className="text-3xl font-bold pt-3">{productQuantity.name}</h1>
                        <p className="py-3"><span className='font-bold'>Description:</span> {productQuantity.description}</p>
                        <p className="py-3"><span className='font-bold'>Available Quantity:</span> {productQuantity.available_quantity} pcs</p>
                        <p className="py-3"><span className='font-bold'>Minimum Purchase:</span> {productQuantity.minimum_order_quantity} pcs</p>
                        <p className="py-3"><span className='font-bold'>Price:</span> ${productQuantity.price} /pc</p>
                        <p className="py-3"><span className='font-bold'>Your Purchase Quantity:</span> {productQuantity.your_purchase} pcs</p>
                        <p className="py-3"><span className='font-bold'>Your Price:</span> ${productQuantity.your_price} /pc</p>


                        {/*------------- Increase Quantity Form -------------------- */}

                        <form onSubmit={handleSubmit(onSubmitIncrease)}>
                            <input type="number" name='your_purchase' placeholder="Increase Quantity"
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


                        {/*------------ Decrease Quantity Form -------------------------*/}


                        <form onSubmit={handleDecrease}>
                            <input type="number" name='your_purchase' placeholder="Decrease Quantity" />
                            <button type="submit" className="btn btn-primary mb-3 m-2">Decrease Quantity</button>
                        </form>
                    </div>
                </div>



                {/* ---------------------- Place Order Form --------------------------- */}
                <div className="hero">
                    <div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-success">
                            <form onSubmit={handlePlaceOrder}>
                                <div className="card-body">
                                    <div className="form-control">
                                        <input type="text" value={user.displayName} placeholder='' className="input input-bordered" disabled />
                                    </div>
                                    <div className="form-control">
                                        <input type="text" value={user.email} placeholder='' className="input input-bordered" disabled />
                                    </div>
                                    <div className="form-control">
                                        <input type="text" name='name' value={productQuantity.name} placeholder='' className="input input-bordered" disabled />
                                    </div>
                                    <div className="form-control">
                                        <input type="text" name='quantity' value={productQuantity.your_purchase} placeholder='' className="input input-bordered" disabled />
                                    </div>
                                    <div className="form-control">
                                        <input type="text" name='price' value={productQuantity.your_price} placeholder='' className="input input-bordered" disabled />
                                    </div>
                                    <div className="form-control">
                                        <input type="text" name='address' placeholder="Address" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <input type="text" name='phone' placeholder="Phone" className="input input-bordered" />
                                    </div>
                                    <div className="form-control mt-6">
                                        <button type='submit' className="btn btn-primary">Place Order</button>
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