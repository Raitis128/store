import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCE0FqESPZAOvI2HbFBUB9qHaVEqOPKP1k",
    authDomain: "izhiks-store-db.firebaseapp.com",
    projectId: "izhiks-store-db",
    storageBucket: "izhiks-store-db.appspot.com",
    messagingSenderId: "77981534521",
    appId: "1:77981534521:web:ffc0de40b7a779c00dc0e8"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);