import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from 'react';
import initialAuthentication from '../Firebase/firebase.init';

initialAuthentication();

const useFirebase = () => {
    const [user,setUser] = useState({});
    const [error,setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(result.user);
            }).catch(error => {
                setError(error.message);

            })
            


    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});

            })

    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log("inside state change ", user);
                setUser(user);
            }
        })

    }, [])

    return {
        signInWithGoogle,
        user,
        error,
        logOut
    }
};

export default useFirebase;