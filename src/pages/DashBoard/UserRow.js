import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error("Failed to make an Admin")
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Successfully made an admin')
                }
            })
    }
    return (

        <tr>
            <th><FontAwesomeIcon className='text-primary' icon={faCircle}></FontAwesomeIcon></th>
            <td>{email}</td>
            <td>{role !== 'admin'
                &&
                <button onClick={makeAdmin} className="btn btn-xs text-white bg-primary">Make Admin</button>
                ||
                <p><span className='font-bold text-primary'>Admin</span></p>}</td>
        </tr>

    );
};

export default UserRow;