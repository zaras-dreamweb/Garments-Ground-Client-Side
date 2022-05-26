import React from 'react';
import { toast } from 'react-toastify';

const AddProducts = () => {
    const handleAddProducts = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const image = event.target.image.value;
        const description = event.target.description.value;
        const minimum_order_quantity = event.target.minimum_order_quantity.value;
        const available_quantity = event.target.available_quantity.value;
        const ordered_quantity = event.target.ordered_quantity.value;
        const your_price = event.target.your_price.value;
        const price = event.target.price.value;


        const product = {
            name,
            image,
            description,
            minimum_order_quantity,
            available_quantity,
            ordered_quantity,
            price,
            your_price
        }

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Product Added Successfully!!')
                event.target.reset();
            })

    }
    return (
        <div>
            <h1 className='text-3xl text-primary font-bold text-center mb-6 mt-6'>Add a New Product</h1>
            <div className="hero">
                <div>
                    <div className="card shadow-2xl bg-success">
                        <form onSubmit={handleAddProducts}>
                            <div className="card-body">
                                <div className="form-control">
                                    <input type="text" name='name' placeholder='Product Name' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <textarea type="text" name='description' placeholder='Product Description' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <input type="text" name='minimum_order_quantity' placeholder='Minimum_order_quantity' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <input type="number" name='available_quantity' placeholder='Available_quantity' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <input type="number" name='ordered_quantity' defaultValue='0' placeholder='Order_quantity' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <input type="number" name='price' placeholder='Price' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <input type="number" name='your_price' placeholder='Your_price' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <input type="text" name='image' placeholder='Photo URL' className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary text-white">Add Product</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;