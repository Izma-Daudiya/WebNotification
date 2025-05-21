// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsXsyGaJmO2ui0I_WqFpySXrvp1sjvvTk",
  authDomain: "app-dc275.firebaseapp.com",
  databaseURL: "https://app-dc275-default-rtdb.firebaseio.com",
  projectId: "app-dc275",
  storageBucket: "app-dc275.firebasestorage.app",
  messagingSenderId: "283374229605",
  appId: "1:283374229605:web:671f62d6826d7149b24e8c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app)