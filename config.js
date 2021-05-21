import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCRb3WagcaDI9aS_IQ2j22a-O537R2C7nU",
    authDomain: "santastage1-62682.firebaseapp.com",
    projectId: "santastage1-62682",
    storageBucket: "santastage1-62682.appspot.com",
    messagingSenderId: "488593646992",
    appId: "1:488593646992:web:372cf074d145c464cfff15"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
