import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import useToken from '../../hooks/useToken';


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
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    console.log(error);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [token] = useToken(user || gUser);


    let errorItem;
    if (errors || error || gError) {
        errorItem = <p className='text-red-500'>{errors?.message} {error?.message} {gError?.message}</p>
    };


    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from);
        }
    }, [token, from, navigate]);

    if (loading || gLoading) {
        return <Loading></Loading>
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
            alert("Email Sent");
        }
        else {
            alert('please enter Your email')
        }
    }
    return (
        <div className="hero mt-10">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-lime-200">
                <h1 className='text-center text-3xl text-primary font-bold pt-6'>Login</h1>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
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

                        <label className="label">
                            <Link onClick={handlePasswordReset} to='' className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                        <p>New to Garments Ground? <Link className='text-primary' to="/register">Please Register</Link></p>
                        {errorItem}
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className="form-control mt-6">
                            {/* <GoogleLogin></GoogleLogin> */}
                            <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-primary text-white w-full">Google SignIn</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;