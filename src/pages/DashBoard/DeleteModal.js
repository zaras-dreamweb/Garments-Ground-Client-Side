import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({ singleOrder, orders, setOrders }) => {
    const { _id, name } = singleOrder;

    const handleDelete = id => {
        fetch(`http://localhost:5000/order/${id}`, {
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
            <input type="checkbox" id="delete-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="delete-modal" class="btn btn-sm btn-circle absolute right-2 top-2 bg-primary text-white">✕</label>
                    <h3 class="font-bold text-lg mt-5 text-secondary">Are you sure you want to delete your order for <span className='text-primary'>{name}?</span></h3>
                    <p class="py-4 text-primary font-bold">Click YES to delete and X to cancel delete.</p>
                    <div class="modal-action">
                        <label for="delete-modal" onClick={() => handleDelete(_id)} class="btn bg-primary text-white">Yes</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteModal;