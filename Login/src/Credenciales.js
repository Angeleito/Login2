// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPy68VcuuADh6MFlZoVCFYtR7FFKO0fPk",
  authDomain: "login2-b0c5a.firebaseapp.com",
  projectId: "login2-b0c5a",
  storageBucket: "login2-b0c5a.appspot.com",
  messagingSenderId: "1066526412208",
  appId: "1:1066526412208:web:b3cbb43847e20effdf1a75"
};

// Initialize Firebase
const appFirebas = initializeApp(firebaseConfig);
export default appFirebas;