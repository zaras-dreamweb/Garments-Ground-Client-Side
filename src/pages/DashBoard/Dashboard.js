import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {/* <!-- Page content here --> */}
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-success text-primary">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard/'>My Profile</Link></li>
                    {!admin && <li><Link to='/dashboard/order'>My Orders</Link></li>}
                    {!admin && <li><Link to='/dashboard/review'>Add Review</Link></li>}
                    {admin && <li><Link to='/dashboard/admin'>Make Admin</Link></li>}
                    {admin && <li><Link to='/dashboard/product'>Add Product</Link></li>}
                    {admin && <li><Link to='/dashboard/manage'>Manage Products</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;