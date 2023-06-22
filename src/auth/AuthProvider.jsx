import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "./FirebaseConfiq";
import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    // sign in with google
    const singInWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    // new user
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // existing user
    const userLogin = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // loggin user state
    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged( auth, currentUser =>{
            setUser(currentUser);
            // jwt token management
            if(currentUser){
                axios.post('https://b7a12-summer-camp-server-side-ashaansojib-ashaansojib.vercel.app/jwt', {email: currentUser.email})
                .then(data => {
                    localStorage.setItem('access-token', data.data)
                })
            }
            else{
                localStorage.removeItem('access-token')
            }
            setLoading(false);
        });
        return()=>{
            unsubscribe();
        }
    },[])
    // logout 
    const logOut = () =>{
        return signOut(auth)
    }
    // update user photo and name
    const updateUserInfo = (name, photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    const authInfo = {
        user,
        loading,
        createUser,
        userLogin,
        singInWithGoogle,
        updateUserInfo,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;