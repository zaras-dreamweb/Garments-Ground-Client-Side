import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
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

        fetch(`http://localhost:5000/user/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                event.target.reset();
            })
    }



    return (
        <div class="hero min-h-screen bg-base-100">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl text-primary font-bold">Update Your Profile Here!</h1>
                    <p class="py-6 text-2xl">Let's keep a track!</p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-success">
                    <form onSubmit={handleProfile}>
                        <div class="card-body">
                            <div class="form-control">

                                <input type="text" value={user.displayName} placeholder="" class="input input-bordered" />
                            </div>
                            <div class="form-control">

                                <input type="text" value={user.email} placeholder="" class="input input-bordered" />
                            </div>
                            <div class="form-control">

                                <input type="text" name='address' placeholder="Address" class="input input-bordered" />
                            </div>
                            <div class="form-control">

                                <input type="text" name='phone' placeholder="Phone" class="input input-bordered" />
                            </div>
                            <div class="form-control">

                                <input type="text" name='linkedin' placeholder="LinkedIn Profile Link" class="input input-bordered" />
                            </div>

                            <div class="form-control mt-6">
                                <button type='submit' class="btn btn-primary text-white">Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;