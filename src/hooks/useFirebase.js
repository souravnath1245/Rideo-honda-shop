import initializeAuthorentication from "../firebase/firebase.init";
import { getAuth, signInWithPopup,onAuthStateChanged, createUserWithEmailAndPassword,signOut,signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import { useState , useEffect } from "react";
import { useHistory } from 'react-router-dom';

// initialize firebase
initializeAuthorentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

 

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();


   


    // User Register 
    const userRegister =(email, password)=>{
      setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential =>{
            setUser(userCredential.user)
        })
        .catch(error =>{
            setError(error.message)
        })
        .finally(()=> setIsLoading(false))
    }

  // User LogIn
  const userLogIn =(email, password, location, history)=>{
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const destination = location?.state?.from || "/home"
      history.replace(destination);
        // setUser(userCredential.user)
        setError("")
    } ).catch((error)=> {
        setError(error.message)
    })
    .finally(()=> setIsLoading(false))
  }

    // Google SignIn
  const signInWithGoogle = (location,history) => {
    setIsLoading(true)
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const destination = location?.state?.from || "/home"
        history.replace(destination);
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(()=> setIsLoading(false))

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
         setIsLoading(false)

       });
       return () => unsubscribed;
 }, [auth])

  // userLogOut 
  const userLogOut =()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      }).finally(()=> setIsLoading(false))
  }

  return {
    user,
    error,
    signInWithGoogle,
    isLoading,
    userLogIn,
    userLogOut,
    userRegister,
  };
};

export default useFirebase;
