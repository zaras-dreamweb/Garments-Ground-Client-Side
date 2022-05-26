import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import DeleteModal from './DeleteModal';

const MyOrders = () => {
    const [singleOrder, setSingleOrder] = useState(null);
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    console.log(orders);
    useEffect(() => {
        if (user) {
            fetch(`https://whispering-badlands-42201.herokuapp.com/order?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/')
                    }
                    return res.json()
                })
                .then(data => {
                    setOrders(data);
                });
        }
    }, [user])

    return (
        <div>
            <h1 className='text-3xl text-primary text-center font-bold mt-6 mb-6'>My Orders</h1>
            <div>
                {
                    orders.map(order => <p>
                        <div className="overflow-x-auto">
                            <table className="table w-full">

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
                                            (!order.paid) && <label onClick={() => setSingleOrder(order)} htmlFor="delete-modal" className="btn btn-xs bg-primary text-white">Delete</label>
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
                            {singleOrder && <DeleteModal singleOrder={singleOrder} orders={orders} setOrders={setOrders}></DeleteModal>}
                        </div>
                    </p>)
                }
            </div>
        </div >
    );
};

export default MyOrders;