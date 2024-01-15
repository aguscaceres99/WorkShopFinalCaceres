import firebase from 'firebase/app';
import 'firebase/firestore';  

const firebaseConfig = {
  apiKey: 'AIzaSyDjauQapJyyjgHO--r49aVCJcxaqnuP72Q',
  authDomain: 'mundo-gaming-44e2a.firebaseapp.com',
  projectId: 'mundo-gaming-44e2a',
  storageBucket: 'mundo-gaming-44e2a.appspot.com',
  messagingSenderId: 'TU_MESSAGING_SENDER_ID',
  appId: '1:637265844574:web:da14de4c92a854e81557cf',
};


firebase.initializeApp(firebaseConfig);


const firestore = firebase.firestore();

export { firebase, firestore };