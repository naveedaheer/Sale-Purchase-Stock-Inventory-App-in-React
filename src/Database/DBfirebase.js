import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCSQ9TAbzCulxG1kmzCV4sBA4uG4FgG7bk",
    authDomain: "aheer-inventory-app-in-react.firebaseapp.com",
    databaseURL: "https://aheer-inventory-app-in-react.firebaseio.com",
    storageBucket: "aheer-inventory-app-in-react.appspot.com",
    messagingSenderId: "183775302122"
};
firebase.initializeApp(config);
export class DBfirebase {

    static ref = firebase.database().ref();
    static storage = firebase.storage().ref();
    static auth = firebase.auth();
     static refAddProduct = firebase.database().ref('AddedProducts');

    static saveMultipath(multipath) {
        return this.ref.update(multipath);
    } // saveMultipath

    static customAuth(user) {
        return this.auth.createUserWithEmailAndPassword(user.email, user.password);
    } //AuthNewUser

    static customLogin(user) {
        return this.auth.signInWithEmailAndPassword(user.email, user.password);
    } //loginUser

    static addNewUser(user) {
        return this.ref.child(user).set();
    } //AuthNewUser

    static getPushRef(path) {
        return this.ref.child(path).push();
    }

// static Logout(){
//     return this.auth.signOut()
//         console.log("Signed out");
// }


}