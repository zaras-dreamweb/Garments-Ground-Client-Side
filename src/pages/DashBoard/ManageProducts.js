import React from 'react';
import { toast } from 'react-toastify';
import useProducts from '../../hooks/useProducts';

const ManageProducts = () => {
    const [products, setProducts] = useProducts();


    const handleDelete = id => {
        const proceed = window.confirm('Are You sure you want to delete?');
        if (proceed) {
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
    }

    return (
        <div>
            {
                products.map(p => <p key={p._id}>
                    <div class="overflow-x-auto">
                        <table class="table w-full">

                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <th><button onClick={() => handleDelete(p._id)} class="btn btn-xs text-white bg-primary">Delete</button></th>
                                    <td>{p.name}</td>
                                    <td> {p.available_quantity}</td>
                                    <td>$ {p.price}</td>

                                </tr>

                            </tbody>
                        </table>
                    </div>
                </p>)
            }
        </div>
    );
};

export default ManageProducts;