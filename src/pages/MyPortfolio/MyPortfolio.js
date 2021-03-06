import React from 'react';

const MyPortfolio = () => {
    return (
        <div>
            <h1 className='text-3xl text-center text-primary mb-5 mt-5 font-bold'>My Portfolio</h1>
            <div className="hero min-h-screen bg-lime-100">
                <div>
                    <h1 className="text-3xl font-bold pb-4 text-yellow-300"> <span className='text-primary font-bold text-2xl'>Name:</span> Sadia Tuz Johora</h1>
                    <h1 className="text-xl text-yellow-300 font-bold pb-2"> <span className='text-primary font-bold text-2xl'>Email:</span> sadiatuzjohora11@gmail.com</h1>
                    <h1 className="text-xl font-bold text-yellow-300 pb-2"><span className='text-primary font-bold text-2xl'>Educational Background:</span>
                        <li>O'Levels</li>
                        <li>A'levels</li>
                        <li>3rd year dropout from English Department(University of Liberal Arts Bangladesh)</li>
                    </h1>
                    <h1 className="text-xl text-yellow-300 font-bold pb-2"> <span className='text-primary font-bold text-2xl'> Skills Acquired As A Web Developer:</span>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>Tailwind</li>
                        <li>Java Script</li>
                        <li>React Js</li>
                        <li>Node Js</li>
                        <li>User Authentication</li>
                        <li>MongoDB as Database</li>
                    </h1>

                    <h1 className="text-xl text-yellow-300 font-bold pb-2"> <span className='text-primary font-bold text-2xl'>Link of some of My Projects:</span>
                        <li><a href='https://perfumes-11.web.app/' target='_blank'>Your Fragrance</a></li>
                        <li><a href='https://next-level-nutrition-2028a.web.app/' target='_blank'> Next Level Nutrition</a></li>
                        <li><a href='https://book-block-bluster.netlify.app/' target='_blank'> Book Block Bluster</a></li>

                    </h1>

                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;