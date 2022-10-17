import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.init';

export const authContext = createContext();
const auth = getAuth(app)

const UserContext = ({ children }) => {

    const [user, setUser] = useState({})
    const [loader, setloader] = useState(true)

    //sign up
    const signUp = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)
    }

    //login
    const login = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
    }

    //logout
    const logOut = () => {

        return signOut(auth)
    }

    //email varification
    const varification = () => {

        return sendEmailVerification(auth.currentUser)
    }

    //forgot password
    const psdReset = (email) => {

        return sendPasswordResetEmail(auth, email)
    }

    //hold user info
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser);
            console.log('currentUser=', currentUser)
            setloader(false)
        })
        return () => {

            unsubscribe();
        }
    }, [])

    //set display name
    const displayUserName = (name) => {

        return updateProfile(auth.currentUser, {

            displayName: name
        })

    }

    const authInfo = { user, signUp, login, logOut, varification, displayUserName, psdReset, loader };

    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default UserContext;