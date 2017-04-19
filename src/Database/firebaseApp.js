import * as firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCSQ9TAbzCulxG1kmzCV4sBA4uG4FgG7bk",
    authDomain: "aheer-inventory-app-in-react.firebaseapp.com",
    databaseURL: "https://aheer-inventory-app-in-react.firebaseio.com",
    projectId: "aheer-inventory-app-in-react",
    storageBucket: "aheer-inventory-app-in-react.appspot.com",
    messagingSenderId: "183775302122"
};
export const firebaseApp = firebase.initializeApp(config);
export const ref = firebase.database().ref();