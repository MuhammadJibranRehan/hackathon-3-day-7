import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
import Swal from 'sweetalert2';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, getIdToken } from "firebase/auth";
import axios from 'axios';

// initialize firebase app
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const auth = getAuth();

    // const googleProvider = new GoogleAuthProvider();

    // Observer user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
                getIdToken(user).then(idToken => {
                    setToken(idToken);
                });

            } else {
                // User is signed out
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe();
    }, [auth])

    // Register user
    const registerUser = (email, password, name, history, redirect_uri) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                updateProfile(auth.currentUser, {
                    displayName: name,
                    // photoURL: photo
                }).then(() => {
                    setUser(res.user);
                    //post to database 
                    axios.post('https://hekto-ecommerce-server-side.vercel.app/users', {
                        displayName: res.user.displayName,
                        email: res.user.email,
                        // photo: res.user.photoURL
                    })
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'User Created successfully!',
                        showConfirmButton: false,
                        timer: 3000
                    });
                    
                    history.push(redirect_uri);
                    window.location.reload();
                }).catch((error) => {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: "User not Created!",
                        showConfirmButton: false,
                        timer: 3000
                    });
                    setError(error.code, error.message);
                });
            }).catch((error) => {
                setError(error.code, error.message);
            }).finally(() => {
                setIsLoading(false);
            })
    }
    

    // Login user
    const loginUser = (email, password, history, redirect_uri) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                setUser(res.user)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Login successfully!',
                    showConfirmButton: false,
                    timer: 3000
                });
                history.push(redirect_uri)
                setError('');
            })
            .catch((error) => {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: "Please try again!",
                    showConfirmButton: false,
                    timer: 3000
                });
                setError(error.code, error.message);
            }).finally(() => setIsLoading(false));
    }

    // Check admin or not
    useEffect(() => {
        fetch(`https://hekto-ecommerce-server-side.vercel.app/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))

    }, [user.email]);


    // Log-out/Sign-out
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            setError(error.code, error.message);
        }).finally(() => setIsLoading(false));
    }


    return {
        user,
        admin,
        token,
        error,
        registerUser,
        loginUser,
        logOut,
        isLoading,
    }
};

export default useFirebase;