import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);

    const handleProfile = event => {
        event.preventDefault();
        const address = event.target.address.value;
        const phone = event.target.phone.value;
        const linkedin = event.target.linkedin.value;

        const profile = {
            user: user.displayName,
            email: user.email,
            address,
            phone,
            linkedin
        }

        fetch(`https://whispering-badlands-42201.herokuapp.com/user/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Profile Updated Successfully!!')
                event.target.reset();
            })
    }

    return (
        <div className="hero mt-20 bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl text-primary font-bold mb-4">Hello {user.displayName} !!</h1>
                    <h1 className="text-3xl text-secondary font-bold">You can update your PROFILE here!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-success">
                    <form onSubmit={handleProfile}>
                        <div className="card-body">
                            <div className="form-control">

                                <input type="text" value={user.displayName} placeholder="" className="input input-bordered" />
                            </div>
                            <div className="form-control">

                                <input type="text" value={user.email} placeholder="" className="input input-bordered" />
                            </div>
                            <div className="form-control">

                                <input type="text" name='address' placeholder="Address" className="input input-bordered" />
                            </div>
                            <div className="form-control">

                                <input type="text" name='phone' placeholder="Phone" className="input input-bordered" />
                            </div>
                            <div className="form-control">

                                <input type="text" name='linkedin' placeholder="LinkedIn Profile Link" className="input input-bordered" />
                            </div>

                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary text-white">Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;