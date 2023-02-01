import firebase from 'firebase/compat/app' 
import "firebase/compat/auth"

// const app = firebase.initializeApp({
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID
// })
const app = firebase.initializeApp({
    apiKey: "AIzaSyD9mcKRyBRJaCQNpquR6O7rtukb2shMuD0",
    authDomain: "quiz-app-6f811.firebaseapp.com",
    projectId: "quiz-app-6f811",
    storageBucket: "quiz-app-6f811.appspot.com",
    messagingSenderId: "247580224137",
    appId: "1:247580224137:web:d9766429472e899d03f458"
})

export const auth = app.auth()
export default app