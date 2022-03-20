import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBx4i_JsnkIP6XNkwl9hR-0ChEFRH4LKlA",
    authDomain: "team-voting-b5267.firebaseapp.com",
    projectId: "team-voting-b5267",
    storageBucket: "team-voting-b5267.appspot.com",
    messagingSenderId: "67902331180",
    appId: "1:67902331180:web:1924e7e6bd19b306917489"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();