import React from 'react';

const AddProducts = () => {

    const handleAddProducts = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const image = event.target.image.value;
        const description = event.target.description.value;
        const minimum_order_quantity = event.target.minimum_order_quantity.value;
        const available_quantity = event.target.available_quantity.value;
        const your_purchase = event.target.your_purchase.value;
        const your_price = event.target.your_price.value;
        const price = event.target.price.value;


        const product = {
            name,
            image,
            description,
            minimum_order_quantity,
            available_quantity,
            your_purchase,
            price,
            your_price
        }

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                event.target.reset();
            })

    }
    return (
        <div>
            <h1 className='text-3xl text-primary font-bold text-center mb-6 mt-6'>Add Products</h1>
            <div class="hero">
                <div>
                    <div class="card shadow-2xl bg-success">
                        <form onSubmit={handleAddProducts}>
                            <div class="card-body">
                                <div class="form-control">
                                    <input type="text" name='name' placeholder='Product Name' class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <textarea type="text" name='description' placeholder='Product Description' class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <input type="text" name='minimum_order_quantity' placeholder='Minimum_order_quantity' class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <input type="number" name='available_quantity' placeholder='Available_quantity' class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <input type="number" name='your_purchase' placeholder='Your_purchase' class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <input type="number" name='price' placeholder='Price' class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <input type="number" name='your_price' placeholder='Your_price' class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <input type="text" name='image' placeholder='Photo URL' class="input input-bordered" />
                                </div>
                                <div class="form-control mt-6">
                                    <button type='submit' class="btn btn-primary text-white">Add Product</button>
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