import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    console.log(orders);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data))
        }
    }, [user])

    const handleDelete = id => {
        const proceed = window.confirm('Are Yyu sure you want to delete?');
        if (proceed) {
            fetch(`http://localhost:5000/order/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                })
        }
    }
    return (
        <div>
            <div>
                {
                    orders.map(order => <p>
                        <div class="overflow-x-auto">
                            <table class="table w-full">

                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Email</th>
                                        <th>Name</th>
                                        <th>Quantity</th>
                                        <th>Payment</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <th>{
                                            (!order.paid) && <button onClick={() => handleDelete(order._id)} className='btn btn-xs bg-primary text-white'>Delete</button>
                                        }</th>
                                        <td>{order.email}</td>
                                        <td>{order.name}</td>
                                        <td>{order.quantity}</td>
                                        <td>
                                            {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs bg-primary text-white'>PAY</button></Link>}
                                            {(order.price && order.paid) && <div>
                                                <p><span className='font-bold text-primary'>PAID</span></p>
                                                <p>Transaction Id: <span className='text-primary font-bold'>{order.transactionId}</span></p>
                                            </div>}
                                        </td>

                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </p>)
                }
            </div>
        </div >
    );
};

export default MyOrders;