// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMUGjNt2VepBf8Uh1HvI2RuK8k-ifvp3I",
    authDomain: "garments-ground.firebaseapp.com",
    projectId: "garments-ground",
    storageBucket: "garments-ground.appspot.com",
    messagingSenderId: "331177314456",
    appId: "1:331177314456:web:a8c8eef89abb4514afa8ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;