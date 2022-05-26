import React from 'react';
import { toast } from 'react-toastify';

const ManageDeleteModal = ({ singleProduct, products, setProducts }) => {
    const { _id, name } = singleProduct;

    const handleDelete = id => {
        fetch(`https://whispering-badlands-42201.herokuapp.com/products/${id}`, {
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
            <input type="checkbox" id="manage-delete" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="manage-delete" className="btn btn-sm btn-circle absolute right-2 top-2 bg-primary text-white">✕</label>
                    <h3 className="font-bold text-lg mt-5 text-secondary">Are you sure you want to delete <span className='text-primary'>{name}</span> product?</h3>
                    <p className="py-4 text-primary font-bold">Click YES to delete and X to cancel delete.</p>
                    <div className="modal-action">
                        <label onClick={() => handleDelete(_id)} htmlFor="manage-delete" className="btn bg-primary text-white">YES</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageDeleteModal;