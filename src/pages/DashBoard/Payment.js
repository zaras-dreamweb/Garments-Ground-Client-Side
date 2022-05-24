import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L2izEB8LIYYWx18eThoPtYntvPKw1vic4CXejuYDrxdZucaaLu3H6DJh1AWgafI8j7FxQce31whokKIXFvr9Dtk00FzZsYZ3I');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/order/${id}`;
    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url).then(res => res.json()))


    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-primary font-bold text-4xl mt-5 mb-5 ml-2'>Make Your Payment</h2>
            <div className='ml-2'>
                <div class="card w-50 max-w-md bg-success shadow-xl my-14">
                    <div class="card-body">
                        <p className='text-primary text-3xl'>Hello, {order.user}</p>
                        <p>We will ship your order for  <span className='text-primary font-bold'>{order.quantity}</span> pcs  <span className='font-bold text-primary'>{order.name}</span> today if the payment is clear.</p>
                        <p>Please pay: <span className='font-bold text-primary'>$ {order.price}</span> </p>
                    </div>
                </div>
                <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-success">
                    <div class="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm order={order} />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Payment;