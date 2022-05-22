// import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
// import { useNavigate } from 'react-router-dom';
// import auth from '../../firebase.init';
// import React, { useEffect } from 'react';
// import Loading from '../Shared/Loading';


// const GoogleLogin = () => {
//     const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
//     const navigate = useNavigate();


//     useEffect(() => {
//         if (error) {
//             alert(error?.message)
//         }
//     }, [error]);

//     if (user) {
//         navigate('/');
//     }

//     if (loading) {
//         return <Loading></Loading>
//     }



//     return (
//         <div>
//             <button onClick={() => signInWithGoogle()} class="btn btn-outline btn-primary w-full">Google SignIn</button>
//         </div>
//     );
// };


// export default GoogleLogin;