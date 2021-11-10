import initializeAuthorentication from "../firebase/firebase.init";
import { getAuth, signInWithPopup, createUserWithEmailAndPassword,signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";

// initialize firebase
initializeAuthorentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

    // User Register 
    const userRegister =(email, password)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential =>{
            setUser(userCredential.user)
        })
        .catch(error =>{
            setError(error.message)
        })
    }

  // User LogIn
  const userLogIn =(email, password)=>{
    signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
        setUser(userCredential.user)
    } ).catch((error)=> {
        setError(error.message)
    })
  }

    // Google SignIn
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return {
    user,
    error,
    signInWithGoogle,
    userLogIn,
    userRegister
  };
};

export default useFirebase;
