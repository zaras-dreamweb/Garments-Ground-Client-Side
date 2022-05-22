import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import GoogleLogin from './GoogleLogin';


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
        signInWithEmailAndPassword,
        user,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);


    let errorItem;
    if (errors || error) {
        errorItem = <p className='text-red-500'>{error?.message} {errors?.message}</p>
    };

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

    const handleSubmit = event => {
        event.preventDefault();
        const email = userInfo.email;
        const password = userInfo.password;
        signInWithEmailAndPassword(email, password);
        event.target.reset();
    }


    const handlePasswordReset = async () => {
        if (userInfo.email) {
            await sendPasswordResetEmail(userInfo.email);
            alert.success("Email Sent");
        }
    }
    return (
        <div class="hero mt-10">
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-lime-200">
                <h1 className='text-center text-3xl text-primary font-bold pt-6'>Login</h1>
                <div class="card-body">
                    <form onSubmit={handleSubmit}>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input onChange={handleEmailChange} type="text" name='email' placeholder="email" class="input input-bordered" />
                        </div>
                        {
                            errors?.emailError && <p className='text-red-400'>{errors.emailError}</p>
                        }
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input onChange={handlePasswordChange} type="password" name='password' placeholder="password" class="input input-bordered" />
                        </div>
                        {
                            errors?.passwordError && <p className='text-red-400'>{errors.passwordError}</p>
                        }
                        <p>New to Garments Ground? <Link className='text-primary' to="/register">Please Register</Link></p>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Login</button>
                        </div>
                        <div class="form-control mt-6">
                            <GoogleLogin></GoogleLogin>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;