import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyC_5l2hGQlNX662KYf-hr8_ytCsdEUm6lk",
  authDomain: "realtimethesis.firebaseapp.com",
  databaseURL: "https://realtimethesis.firebaseio.com",
  projectId: "realtimethesis",
  storageBucket: "realtimethesis.appspot.com",
  messagingSenderId: "1097391395895",
  appId: "1:1097391395895:web:00b04d4741965c07329bb2",
  measurementId: "G-MS9W1M17H7"
};

const app = firebase.initializeApp(firebaseConfig);
export default firebaseConfig;



