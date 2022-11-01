import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDtWTtzfPtDpkPeoTtpRorpEF8MxDMZ-I8",
    authDomain: "clone-48ee6.firebaseapp.com",
    databaseURL: "https://clone-48ee6.firebaseio.com",
    projectId: "clone-48ee6",
    storageBucket: "clone-48ee6.appspot.com",
    messagingSenderId: "278737983135",
    appId: "1:278737983135:web:ff36875fff619813a774aa",
    measurementId: "G-0X2G9EKD6B"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };