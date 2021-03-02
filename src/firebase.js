import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAwcTuxmYCmuBH8rUhjy-qdMJYtEefxfgo",
    authDomain: "slack-clone-challenge-2b356.firebaseapp.com",
    projectId: "slack-clone-challenge-2b356",
    storageBucket: "slack-clone-challenge-2b356.appspot.com",
    messagingSenderId: "60957690597",
    appId: "1:60957690597:web:35521aa3244ec1884d620c",
    measurementId: "G-2HZKNW8JCF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
//Initilize Database
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()


export { auth, provider }
export default db;
