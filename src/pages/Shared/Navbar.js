import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <div className="navbar bg-success text-lime-600">

            <div className="navbar-start">
                <label for="my-drawer-2" tabindex="1" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>

            <div className="navbar-start">
                <a className="normal-case font-bold text-2xl">Garments Ground</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    {user && <li><Link to='/dashboard'>Dashboard</Link></li>}
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
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary text-white rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        {user && <li><Link to='/dashboard'>Dashboard</Link></li>}
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