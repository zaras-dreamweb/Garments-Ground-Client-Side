import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }

    return (
        <div className="navbar bg-success text-lime-600">

            <div className="navbar-start">
                <label htmlFor="my-drawer-2" tabIndex="1" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>

            <div className="navbar-start">
                <a className="normal-case font-bold text-2xl"><FontAwesomeIcon className='text-red-500' icon={faCircleDot}></FontAwesomeIcon> G & G</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    {user && <li><Link to='/dashboard'>Dashboard</Link></li>}
                    <li><Link to='/port'>My Portfolio</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/register'>Register</Link></li>
                    <li> {
                        user
                            ?
                            <div>
                                <button onClick={handleSignOut} className='text-bold pb-2 text-white pt-2'>SignOut</button>
                                <span>{user.displayName}</span>
                            </div>
                            :
                            <Link to="/login">Login</Link>
                    }</li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary text-white rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        {user && <li><Link to='/dashboard'>Dashboard</Link></li>}
                        <li><Link to='/port'>My Portfolio</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/register'>Register</Link></li>
                        <li> {
                            user
                                ?
                                <div>
                                    <button onClick={handleSignOut} className='text-bold pb-2 text-white pt-2'>SignOut</button>
                                    <span>{user.displayName}</span>
                                </div>
                                :
                                <Link to="/login">Login</Link>
                        }</li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;