import React from 'react';
import { Link } from 'react-router-dom';
import test3 from '../../images/buttonbb.png'

const NotFound = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${test3})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-success">Page Not Found!!</h1>
                    <p className="mb-5 text-2xl text-success">Please go back to home page!!</p>
                    <button className="btn gap-2 bg-success text-primary font-bold">
                        <Link to='/'> Home</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>

                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;