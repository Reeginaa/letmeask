import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

/*const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};*/

const firebaseConfig = {
  apiKey: "AIzaSyAwzeAWARkdoijm3NrWjjmLQr71U8Gl7kk",
  authDomain: "letmeask-aulas-ae5f0.firebaseapp.com",
  databaseURL: "https://letmeask-aulas-ae5f0-default-rtdb.firebaseio.com",
  projectId: "letmeask-aulas-ae5f0",
  storageBucket: "letmeask-aulas-ae5f0.appspot.com",
  messagingSenderId: "481768230775",
  appId: "1:481768230775:web:7c0145f2497824bf18db72"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();