import * as firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
};
export const firebaseApp = firebase.initializeApp(config);
export const ref = firebase.database().ref();
