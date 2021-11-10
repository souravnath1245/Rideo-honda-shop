import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthorentication = () => {
  initializeApp(firebaseConfig);
};

export default initializeAuthorentication;
