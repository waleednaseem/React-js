import firebase from 'firebase'

const firebaseApp= firebase.initializeApp({
        apiKey: "AIzaSyBaxT8KS0pI-oSe0eTih1gq3kZ7VVG9xq8",
        authDomain: "fir-b194d.firebaseapp.com",
        databaseURL: "https://fir-b194d.firebaseio.com",
        projectId: "fir-b194d",
        storageBucket: "fir-b194d.appspot.com",
        messagingSenderId: "860754503927",
        appId: "1:860754503927:web:b9f40237c38573ea788bf2",
        measurementId: "G-00BZDFQRRR"
    });

const db =firebaseApp.firestore();
const auth= firebase.auth();

export{db, auth}