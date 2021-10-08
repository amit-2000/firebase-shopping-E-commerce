import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  firebase from 'firebase'
import 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDnDLzkLgiGD3k25faW8VmsGlAsEqkczes",
  authDomain: "cart-683da.firebaseapp.com",
  projectId: "cart-683da",
  storageBucket: "cart-683da.appspot.com",
  messagingSenderId: "899558110677",
  appId: "1:899558110677:web:717e95194fafa28e46b95c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


