import firebase from 'firebase';

 var firebaseConfig = {
    apiKey: "AIzaSyA3cYF3hqZ8R4yDGFrUuDZcseihneG1aVg",
    authDomain: "schooling-system.firebaseapp.com",
    databaseURL: "https://schooling-system.firebaseio.com",
    projectId: "schooling-system",
    storageBucket: "",
    messagingSenderId: "812716214636",
    appId: "1:812716214636:web:ce157b5b6db1c8d8"
  };

  const config = firebase.initializeApp(firebaseConfig);

  export default config;