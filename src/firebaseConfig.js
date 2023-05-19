import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyDuIKxhC8WCBvFyM7I3GOj-0LeOd5jlYxg",
  authDomain: "lagrosa-dc2bc.firebaseapp.com",
  databaseURL: "https://lagrosa-dc2bc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "lagrosa-dc2bc",
  storageBucket: "lagrosa-dc2bc.appspot.com",
  messagingSenderId: "307681799709",
  appId: "1:307681799709:web:fcb78a1390a465f3c7a0f4",
  measurementId: "G-KDY8ND3PZW"
};
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
