import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);

    const handleAddReview = event => {
        event.preventDefault();
        const name = user.displayName;
        const email = user.email;
        const description = event.target.description.value;
        const rating = event.target.rating.value;
        const image = event.target.image.value;


        const review = {
            name,
            email,
            description,
            rating,
            image
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                event.target.reset();
            })

    }
    return (
        <div>
            <h1 className='text-3xl text-primary font-bold text-center mb-6 mt-6'>Add Your Review</h1>
            <div className="hero">
                <div>
                    <div className="card shadow-2xl bg-success">
                        <form onSubmit={handleAddReview}>
                            <div className="card-body">
                                <div className="form-control">
                                    <input type="text" value={user.displayName} placeholder='' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <input type="text" value={user.email} placeholder='' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <textarea type="text" name='description' placeholder='Description' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <input type="number" name='rating' placeholder='Rating' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <input type="text" name='image' placeholder='Photo URL' className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary text-white">Add Review</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;