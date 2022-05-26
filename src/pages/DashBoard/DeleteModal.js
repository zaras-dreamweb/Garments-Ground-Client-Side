import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({ singleOrder, orders, setOrders }) => {
    const { _id, name } = singleOrder;

    const handleDelete = id => {
        fetch(`https://whispering-badlands-42201.herokuapp.com/order/${id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = orders.filter(order => order._id !== id);
                setOrders(remaining);
                toast.success('Order deleted successfully');
            })

    }
    return (
        <div>
            <input type="checkbox" id="delete-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="delete-modal" className="btn btn-sm btn-circle absolute right-2 top-2 bg-primary text-white">✕</label>
                    <h3 className="font-bold text-lg mt-5 text-secondary">Are you sure you want to delete your order for <span className='text-primary'>{name}?</span></h3>
                    <p className="py-4 text-primary font-bold">Click YES to delete and X to cancel delete.</p>
                    <div className="modal-action">
                        <label htmlFor="delete-modal" onClick={() => handleDelete(_id)} className="btn bg-primary text-white">Yes</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteModal;