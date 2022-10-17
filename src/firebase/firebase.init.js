// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDbsbSsWEgD6t0COYbWWHCIkgzJXySv3Ig",
    authDomain: "authentication-with-contextapi.firebaseapp.com",
    projectId: "authentication-with-contextapi",
    storageBucket: "authentication-with-contextapi.appspot.com",
    messagingSenderId: "531728703535",
    appId: "1:531728703535:web:3d7c0a88c7c66b498966da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app