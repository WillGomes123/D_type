import firebase from 'firebase/compat/app';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCR47IlYhMUS4wCjLLsRvo6-V5803IFSM4",
  authDomain: "fir-c01d4.firebaseapp.com",
  databaseURL: "https://fir-c01d4-default-rtdb.firebaseio.com",
  projectId: "fir-c01d4", 
  storageBucket: "fir-c01d4.appspot.com",
  messagingSenderId: "38477829133",
  appId: "1:38477829133:web:a6f6bce31ca1a77bbcf144"
}

if (firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig)
    console.log('conectado')
}

const db = getDatabase();
export {db}