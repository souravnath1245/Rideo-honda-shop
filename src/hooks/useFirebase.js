import initializeAuthorentication from "../firebase/firebase.init";
import { getAuth, signInWithPopup,onAuthStateChanged, createUserWithEmailAndPassword,signOut,signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import { useState , useEffect } from "react";

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

   // Observer user State 
   useEffect (()=>{
    const unsubscribed = onAuthStateChanged(auth, (user) => {
         if (user) {
           // User is signed in, see docs for a list of available properties
           // https://firebase.google.com/docs/reference/js/firebase.User
           setUser(user);
           // ...
         } else {
             setUser({})
           // User is signed out
           // ...
         }

       });
       return () => unsubscribed;
 }, [auth])

  // userLogOut 
  const userLogOut =()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
  }

  return {
    user,
    error,
    signInWithGoogle,
    userLogIn,
    userLogOut,
    userRegister,
  };
};

export default useFirebase;
