import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCXT5aU8zOpnp-3zINF5W902X2OLK1NclU",
  authDomain: "react-project-3b5c8.firebaseapp.com",
  databaseURL: "https://react-project-3b5c8-default-rtdb.firebaseio.com",
  projectId: "react-project-3b5c8",
  storageBucket: "react-project-3b5c8.appspot.com",
  messagingSenderId: "97135972140",
  appId: "1:97135972140:web:acccfc99d80b2dfafc6689"
};

export const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();