import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import usePurchase from '../../hooks/usePurchase';

const Purchase = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth);
    // console.log(user);
    // const [purchase, setPurchase] = usePurchase(id);
    const [productQuantity, setProductQuantity] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProductQuantity(data));
    }, [productQuantity]);

    const handleIncrease = event => {
        event.preventDefault();
        const oldQuantity = parseInt(productQuantity.minimum_order_quantity);
        console.log(oldQuantity);
        const newQuantity = parseInt(event.target.minimum_order_quantity.value);
        console.log(newQuantity);

        const availableQuantity = parseInt(productQuantity.available_quantity);


        // if (newQuantity > maxQuantity) {
        //     alert('Please order within available quantity')
        //     const minimum_order_quantity = oldQuantity;
        // }
        const minimum_order_quantity = oldQuantity + newQuantity;
        console.log(minimum_order_quantity);

        const product = { minimum_order_quantity };
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

                event.target.reset()
            })
    }


    const handleDecrease = event => {
        event.preventDefault();
        const oldQuantity = parseInt(productQuantity.minimum_order_quantity);
        console.log(oldQuantity);
        const minimum_order_quantity = oldQuantity - parseInt(event.target.minimum_order_quantity.value);
        console.log(minimum_order_quantity);
        const product = { minimum_order_quantity };
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
            })
    }


    const handlePlaceOrder = event => {
        event.preventDefault();
        const name = productQuantity.name;
        const quantity = productQuantity.minimum_order_quantity;
        const phone = event.target.phone.value;
        const address = event.target.address.value;


        const order = {
            name,
            quantity,
            user: user.displayName,
            email: user.email,
            phone,
            address
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
                        <form onSubmit={handleIncrease}>
                            <input type="text" name='minimum_order_quantity' placeholder="Increase Quantity" />
                            <button type="submit" className="btn btn-primary mb-3 m-2">Increase Quantity</button>
                            {/* {
                                newQuantity > maxQuantity
                                    ?
                                    <button type="submit" className="btn btn-primary mb-3 m-2" disabled>Increase Quantity</button>
                                    :
                                    <button type="submit" className="btn btn-primary mb-3 m-2">Increase Quantity</button>
                            } */}
                        </form>
                        <form onSubmit={handleDecrease}>
                            <input type="text" name='minimum_order_quantity' placeholder="Decrease Quantity" />
                            <button type="submit" className="btn btn-primary mb-3 m-2">Decrease Quantity</button>
                        </form>


                    </div>
                </div>

                <div class="hero">
                    <div class="">
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
                                        <input type="text" name='quantity' value={productQuantity.minimum_order_quantity} placeholder='' class="input input-bordered" disabled />
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