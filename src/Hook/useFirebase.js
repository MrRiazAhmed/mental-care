import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,

    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth()
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    const [error, setError] = useState("");

    /* Google Sign in */
    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            setUser(result.user);
            setError("");
            })
            .catch((error) => setError(error.message));
    };


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                const uid = user.uid;
            } else {
                // User is signed out
                // ...
            }
        });
    }, []);


    /* Log in */

    const handleUserLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
            })
            .catch((error) => {
                const errorMessage = error.message;
            });
    };


    /* Log Out */

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((err) => {
                console.log(err);
            });
    };


    /* Sign Up with Email */

    const handleUserRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
          .then((result) => {
            console.log(result.user);
          })
          .catch((error) => {
            const errorMessage = error.message;
          });
      };

    return {
        handleGoogleLogin,
        user,
        handleUserLogin,
        handleUserRegister,
        handleLogout
    }

};

export default useFirebase;
