import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAI2Fg8pfid_FFohHqjBjBjED769Hlftrs',
  authDomain: 'react-whats-app-clone.firebaseapp.com',
  databaseURL: 'https://react-whats-app-clone.firebaseio.com',
  projectId: 'react-whats-app-clone',
  storageBucket: 'react-whats-app-clone.appspot.com',
  messagingSenderId: '313629974526',
  appId: '1:313629974526:web:4e813f903fdcbe6079eaaf',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
