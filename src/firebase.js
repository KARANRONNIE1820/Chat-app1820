import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

import { getauth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjoiQTiccZzaEq_Am6_3_WbnlRGmvWEIY",
  authDomain: "fir-chat-app-2ba1b.firebaseapp.com",
  projectId: "fir-chat-app-2ba1b",
  storageBucket: "fir-chat-app-2ba1b.appspot.com",
  messagingSenderId: "458318228621",
  appId: "1:458318228621:web:95d17c967a358cf70b06c4",
  measurementId: "G-RMPRSNWHE3"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const auth = 'getauth'();

export { db, auth };