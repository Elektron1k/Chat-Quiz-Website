// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAKvLp06De52ursMdnIqfKtbN8Me6Rvs24',
  authDomain: 'chat-quiz-website-46753.firebaseapp.com',
  projectId: 'chat-quiz-website-46753',
  storageBucket: 'chat-quiz-website-46753.appspot.com',
  messagingSenderId: '252993316177',
  appId: '1:252993316177:web:5ae811d8026c66e4a99f70',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
