import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDuM8PxotDaNSGyqSpEQdhxkkM3Qzn7y6k",
  authDomain: "hydrogreen-2180.firebaseapp.com",
  projectId: "hydrogreen-2180",
  storageBucket: "hydrogreen-2180.appspot.com",
  messagingSenderId: "1040200838740",
  appId: "1:1040200838740:web:6310764da78aab503007c1"
};

const app = initializeApp(firebaseConfig)

export {app};