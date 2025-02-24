import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCcGbHoN8gF4z9jyxYH-kKguHUikg62q4A",
    authDomain: "unolo-c4588.firebaseapp.com",
    projectId: "unolo-c4588",
    storageBucket: "unolo-c4588.firebasestorage.app",
    messagingSenderId: "69655166280",
    appId: "1:69655166280:web:8f199772b3ef775b91877d",
    measurementId: "G-GFWC8FEYQV"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function Homepage({ user }) {
    const handleLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                localStorage.setItem("user", JSON.stringify(result.user))
            })
            .catch((error) => console.error('Login failed:', error));
    };


    return (
        <div className='flex justify-center items-center h-[100lvh] w-[100lvw]'>
            {user ? (
                <div className="flex items-center space-x-4">
                    <img src={user.photoURL} alt="User" className="w-8 h-8 rounded-full" />
                    <span>{user.displayName}</span>
                    <button onClick={() => { localStorage.clear(); window.location.reload() }}>Logout</button>
                </div>
            ) : (
                <button onClick={handleLogin}>Sign in with Google</button>
            )}
        </div>
    );
}