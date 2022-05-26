import React, { useState } from 'react';
import useProducts from '../../hooks/useProducts';
import ManageDeleteModal from './ManageDeleteModal';

const ManageProducts = () => {
    const [products, setProducts] = useProducts();
    const [singleProduct, setSingleProduct] = useState(null);

    return (
        <div>
            {
                products.map(p => <p key={p._id}>
                    <div className="overflow-x-auto">
                        <table className="table w-full">

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
                                    <th>
                                        <label onClick={() => setSingleProduct(p)} htmlFor="manage-delete" className="btn btn-xs text-white bg-primary">Delete</label>
                                    </th>
                                    <td>{p.name}</td>
                                    <td> {p.available_quantity}</td>
                                    <td>$ {p.price}</td>

                                </tr>

                            </tbody>
                        </table>
                        {singleProduct && <ManageDeleteModal singleProduct={singleProduct} products={products} setProducts={setProducts}></ManageDeleteModal>}
                    </div>
                </p>)
            }
        </div>
    );
};

export default ManageProducts;