// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1O5okRUJul_eo19SKbKSvVMG9IkDFuXs",
  authDomain: "room-tone.firebaseapp.com",
  projectId: "room-tone",
  storageBucket: "room-tone.appspot.com",
  messagingSenderId: "619504553341",
  appId: "1:619504553341:web:6aa0d4ae4d9a2603871014",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage();

export {app, storage}; 