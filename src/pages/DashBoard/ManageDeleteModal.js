import React from 'react';
import { toast } from 'react-toastify';

const ManageDeleteModal = ({ singleProduct, products, setProducts }) => {
    const { _id, name } = singleProduct;

    const handleDelete = id => {
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = products.filter(p => p._id !== id);
                setProducts(remaining);
                toast.success('Product deleted successfully');
            })
    }
    return (
        <div>
            <input type="checkbox" id="manage-delete" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="manage-delete" class="btn btn-sm btn-circle absolute right-2 top-2 bg-primary text-white">✕</label>
                    <h3 class="font-bold text-lg mt-5 text-secondary">Are you sure you want to delete <span className='text-primary'>{name}</span> product?</h3>
                    <p class="py-4 text-primary font-bold">Click YES to delete and X to cancel delete.</p>
                    <div class="modal-action">
                        <label onClick={() => handleDelete(_id)} for="manage-delete" class="btn bg-primary text-white">YES</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageDeleteModal;