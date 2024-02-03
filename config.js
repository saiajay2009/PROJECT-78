import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBDzGvghKk2LGIhvQRfPshuTKkD8j7ujhQ",
    authDomain: "e-ride-c6728.firebaseapp.com",
    projectId: "e-ride-c6728",
    storageBucket: "e-ride-c6728.appspot.com",
    messagingSenderId: "975853480387",
    appId: "1:975853480387:web:c6753e6802b75f2082b576"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
