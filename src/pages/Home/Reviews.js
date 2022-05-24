import React from 'react';
import useReviews from '../../hooks/useReviews';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <h1 className='text-pink-300 text-5xl text-center font-bold my-10  py-5'>Customer Satisfaction</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-3 gap-y-3'>
                {
                    reviews.map(review => <p>
                        <div className="card w-50 bg-info shadow-xl">
                            <div className='flex justify-center items-center pt-4'>
                                <figure className="w-16 rounded ">
                                    <img src={review.image} alt='' className="mask mask-circle " />
                                </figure>
                            </div>

                            {/* <div className="avatar">
                            <div className="w-16 rounded">
                                <img src="https://api.lorem.space/image/face?hash=77703" alt="Tailwind-CSS-Avatar-component" />
                            </div>
                        </div> */}

                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{review.name}</h2>
                                <p>{review.description}</p>

                                <Rating
                                    initialRating={review.rating}
                                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                                    fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                                    readonly
                                ></Rating>
                            </div>
                        </div>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Reviews;