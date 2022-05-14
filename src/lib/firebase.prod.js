import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../utils/seed";

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyBlKlnfYbE05tL8HJplZ-zAXwAeyXHNH54",
  authDomain: "netflix-clone-1-ce1af.firebaseapp.com",
  projectId: "netflix-clone-1-ce1af",
  storageBucket: "netflix-clone-1-ce1af.appspot.com",
  messagingSenderId: "557410909130",
  appId: "1:557410909130:web:c81ca9f53b46ec71862d33",
  measurementId: "G-BF7ENN8ZFG",
};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export { firebase };
