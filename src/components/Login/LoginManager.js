import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config"


//exporting all the functions

firebase.initializeApp(firebaseConfig)

// export const initializeLoginFramework = () => {
//     if(!firebase.apps.length) {
//         firebase.initializeApp(firebaseConfig);
//       } else {
//         firebase.app();
//       }
// }


export const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
    .then((result) => {

    const credential = result.credential;
    const token = credential.accessToken;
    const {displayName, email} = result.user;
    const signedInUser = {name: displayName, email};
    return signedInUser;
    }).catch((error) => {
    
    const errorCode = error.code;
    const errorMessage = error.message;
    
    const email = error.email;
    const credential = error.credential;
  });
}