// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNWgOT0dPbRpfWdSCuwvhBD38rgotkEl0",
  authDomain: "inventory-2cd0d.firebaseapp.com",
  projectId: "inventory-2cd0d",
  storageBucket: "inventory-2cd0d.appspot.com",
  messagingSenderId: "548908648316",
  appId: "1:548908648316:web:085299e732a11168f7c6f9",
  measurementId: "G-FP3V81BPGS"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export{firestore}
