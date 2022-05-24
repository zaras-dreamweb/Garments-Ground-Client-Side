import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile, } from 'react-firebase-hooks/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import useToken from '../../hooks/useToken'



const Register = () => {
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({
        emailError: '',
        passwordError: '',
        confirmPasswordError: '',
    });

    const [
        createUserWithEmailAndPassword,
        user,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    const [signInWithGoogle, gUser, loading, gError] = useSignInWithGoogle(auth);

    const [updateProfile, updating, uError] = useUpdateProfile(auth);

    const [token] = useToken(user || gUser);

    let errorItem;
    if (errors || error || uError || gError) {
        errorItem = <p className='text-red-500'>{error?.message || gError?.message || errors?.message || uError?.message}</p>
    };

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from);
        }
    }, [token, from, navigate]);




    if (loading || updating) {
        return <Loading></Loading>
    }

    const handleNameChange = event => {
        setUserInfo({ ...userInfo, name: event.target.value })

    }


    const handleEmailChange = event => {
        const emailRegex = /^\S+@\S+\.\S+$/;
        const validEmail = emailRegex.test(event.target.value);
        if (validEmail) {
            setUserInfo({ ...userInfo, email: event.target.value });
            setErrors({ ...errors, emailError: "" })
        } else {
            setErrors({ ...errors, emailError: "Invalid Email" })
            setUserInfo({ ...userInfo, email: "" });
        }
    };

    const handlePasswordChange = event => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(event.target.value);
        if (validPassword) {
            setUserInfo({ ...userInfo, password: event.target.value })
            setErrors({ ...errors, passwordError: '' });
        }
        else {
            setErrors({ ...errors, passwordError: 'Minimum 6 characters' });
            setUserInfo({ ...userInfo, password: '' })
        }
    };

    const handleConfirmPasswordChange = event => {
        if (userInfo.password === event.target.value) {
            setUserInfo({ ...userInfo, confirmPassword: event.target.value });
            setErrors({ ...errors, confirmPasswordError: "" })
        }
        else {
            setErrors({ ...errors, confirmPasswordError: 'Passwords did not match' });
            setUserInfo({ ...userInfo, confirmPassword: "" });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = userInfo.email;
        const password = userInfo.password;
        const name = userInfo.name;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        event.target.reset();
    }
    return (
        <div className="hero mt-10">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-lime-200">
                <h1 className='text-center text-3xl text-primary font-bold pt-6'>Register</h1>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input onChange={handleNameChange} type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onChange={handleEmailChange} type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        {
                            errors?.emailError && <p className='text-red-400'>{errors.emailError}</p>
                        }
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input onChange={handlePasswordChange} type="password" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        {
                            errors?.passwordError && <p className='text-red-400'>{errors.passwordError}</p>
                        }
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input onChange={handleConfirmPasswordChange} type="password" name='confirmPassword' placeholder="confirm password" className="input input-bordered" />
                        </div>
                        {
                            errors?.confirmPasswordError && <p className='text-red-400'>{errors.confirmPasswordError}</p>
                        }
                        <p>Already have an account? <Link className='text-primary' to="/login">Please Login</Link></p>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary text-white">Register</button>
                        </div>
                        <div className="form-control mt-6">
                            {/* <GoogleLogin></GoogleLogin> */}
                            <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-primary w-full">Google SignIn</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;