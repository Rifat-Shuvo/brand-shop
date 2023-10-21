// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB31gv53nLbAMIOX75cph27qQ75UAAaRqU",
  authDomain: "brand-shop-12da9.firebaseapp.com",
  projectId: "brand-shop-12da9",
  storageBucket: "brand-shop-12da9.appspot.com",
  messagingSenderId: "822034872012",
  appId: "1:822034872012:web:80aabd84a3795903cdb469"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app