
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCZF_uue7Hlrz6LX0h0o_-QZ_7dpKd83c4",
  authDomain: "e-commerce-313aa.firebaseapp.com",
  projectId: "e-commerce-313aa",
  storageBucket: "e-commerce-313aa.firebasestorage.app",
  messagingSenderId: "428211057736",
  appId: "1:428211057736:web:c68802c083be2fb68dd47d",
  measurementId: "G-LB1ZJ1673E"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {app,auth}