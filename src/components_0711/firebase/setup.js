// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCgLI_ya7-MW5Sq85-0BQwVSkqCHw3uAfI',
  authDomain: 'reactstudy-71e2c.firebaseapp.com',
  projectId: 'reactstudy-71e2c',
  storageBucket: 'reactstudy-71e2c.appspot.com',
  messagingSenderId: '137803924584',
  appId: '1:137803924584:web:2af25ca787c0ad02bea7dd',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app);
