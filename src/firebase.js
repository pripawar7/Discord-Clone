// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCsLlxEHc9kBeqmoKQuxnep9Gw-4z7Msc4",
    authDomain: "discord-clone-8bc5d.firebaseapp.com",
    databaseURL: "https://discord-clone-8bc5d.firebaseio.com",
    projectId: "discord-clone-8bc5d",
    storageBucket: "discord-clone-8bc5d.appspot.com",
    messagingSenderId: "1070436711706",
    appId: "1:1070436711706:web:7f4471f9b43adb859700a3",
    measurementId: "G-0ZDETG9FN9"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
   