import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0ofxci7Nsx0ZWelkfLzvaJt6kec4_LmA",
  authDomain: "miniblog-1a653.firebaseapp.com",
  projectId: "miniblog-1a653",
  storageBucket: "miniblog-1a653.appspot.com",
  messagingSenderId: "1076932937987",
  appId: "1:1076932937987:web:3a9bbc29a32550b9a2c136",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
