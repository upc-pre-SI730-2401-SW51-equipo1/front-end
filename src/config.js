// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDhiERc2YpwRWie1e5egazlFsof9pmTTVs",
    authDomain: "front-end-f65a6.firebaseapp.com",
    projectId: "front-end-f65a6",
    storageBucket: "front-end-f65a6.appspot.com",
    messagingSenderId: "98044527447",
    appId: "1:98044527447:web:07ed8a419cac333661b412",
    measurementId: "G-QXRKV9292P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);