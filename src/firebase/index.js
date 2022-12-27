import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; 



const firebaseConfig = {
  apiKey: "AIzaSyCpiYeYeNLyJDbNodd9uujgxsMj4Lz0KO4",
  authDomain: "todos-app-9d4de.firebaseapp.com",
  projectId: "todos-app-9d4de",
  storageBucket: "todos-app-9d4de.appspot.com",
  messagingSenderId: "831773866265",
  appId: "1:831773866265:web:2696272be187ba396fed88"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig)


export default firebase