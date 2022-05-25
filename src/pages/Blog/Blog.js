import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Blog = () => {
    return (
        <div className='m-4 text-center mt-4'>
            <h2 className='mt-10 mb-10 font-bold text-5xl text-secondary'>My Blog Page</h2>
            <h2 className='text-primary font-extrabold text-3xl'><FontAwesomeIcon className='text-secondary' icon={faStar}></FontAwesomeIcon>How will you improve the performance of a React Application?</h2>
            <p className='pb-10 text-xl font-bold '>React apps, have an extremely quick user interface. However, when the program expands in size, developers may encounter a
                variety of performance concerns. Learning react components to prevent unnecessary re-renders, Detecting wasted Renders in a React using React performance optimization tools, optimizing image sizes and loading only necessary images, can avoid rendering to improve page load time, keeping component state local where necessary and code-splitting in
                React using dynamic import are some possible ways to improve the performance of React applications.</p>

            <h2 className='text-primary font-extrabold text-3xl'><FontAwesomeIcon className='text-secondary' icon={faStar}></FontAwesomeIcon>What are the different ways to manage a state in a React application? </h2>
            <p className='pb-10 text-xl font-bold '>
                React's built-in method for setting component states uses setState() and adds "local state" to a class.
                Some different ways to manage a state in a React application might be customizing React hooks to include extensive logic into a single accessible hook is quite handy.
                This is useful for forms, toggles, asynchronous behaviour, and anything else that results in a jumble of hooks in your component. Use of useReducer might be another option because The useReducer hook is a strong React hook offered for dealing with sophisticated state management without the need for third-party dependencies. Another option to manage a state is to use modern data fetching frameworks like React Query to effectively fetch, cache, invalidate, and refresh data from external sources.
                They can also be used to deliver data to an external client, completing the entire procedure of connecting with a server.
            </p>

            <h2 className='text-primary font-extrabold text-3xl'><FontAwesomeIcon className='text-secondary' icon={faStar}></FontAwesomeIcon>How does prototypical inheritance work?</h2>
            <p className='text-xl font-bold pb-10'> Prototypal Inheritance is a Javascript feature that allows us to add methods and attributes to objects. It is a technique that allows one object to inherit the attributes and methods of another. We can then instruct our JS code to take properties from a prototype.
                Usually, we use Object, in order to get and set the [[Prototype]] of an object  </p>



            <h2 className='text-primary font-extrabold text-23l'><FontAwesomeIcon className='text-secondary' icon={faStar}></FontAwesomeIcon>What is a unit test? Why should write unit tests??</h2>
            <p className='text-xl font-bold pb-10 '> Unit testing is a form of software testing that examines single units or components of the software. To make sure that each piece of software code runs correctly, is its main purpose.
                This could mean checking that the component renders correctly for the specified props, for React components. During the progress (code) phase of an application, developers perform unit testing. Unit tests should be written because they offer proper documentation, aid in performance estimation, improve code coverage, and lessen code complication.
            </p>



            <h2 className='text-primary font-extrabold text-3xl'><FontAwesomeIcon className='text-secondary' icon={faStar}></FontAwesomeIcon>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]).
                Why you do not set products = [...] instead, you use the setProducts?</h2>
            <p className='text-xl font-bold pb-10 '> We should never set the state directly because of the following reasons:
                If we set the state directly, like products = […] then, calling the setState() afterward may just exchange the update we made. Also, across all components, we will lose control of the state. But, when we update the state, like [products,setProducts]=useState([]), it does not replace the change we made immediately, rather it waits and only returns the value when it is called.
            </p>
        </div >
    );
};

export default Blog;