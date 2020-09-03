import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAIJViEbq4w1MIJzbFwl9RH2i-S8P6CnGk",
    authDomain: "instagram-clone-react-62acb.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-62acb.firebaseio.com",
    projectId: "instagram-clone-react-62acb",
    storageBucket: "instagram-clone-react-62acb.appspot.com",
    messagingSenderId: "158744753213",
    appId: "1:158744753213:web:6866059e1a9a2b569a2654",
    measurementId: "G-4280P4853V"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

