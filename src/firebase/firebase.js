//Firebase
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


//Production configuration
var prodConfig = {
    apiKey: "AIzaSyCGJ6PhrPypFsTwUW8ClJk9buN51ud7NYM",
    authDomain: "rcrest-rc1.firebaseapp.com",
    databaseURL: "https://rcrest-rc1.firebaseio.com",
    projectId: "rcrest-rc1",
    storageBucket: "",
    messagingSenderId: "105340835569"
};

//Development configurations
const devConfig = {
    apiKey: "AIzaSyCGJ6PhrPypFsTwUW8ClJk9buN51ud7NYM",
    authDomain: "rcrest-rc1.firebaseapp.com",
    databaseURL: "https://rcrest-rc1.firebaseio.com",
    projectId: "rcrest-rc1",
    storageBucket: "",
    messagingSenderId: "105340835569"
};

const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;

if(!firebase.apps.length){
    firebase.initializeApp(config);
}

const auth = firebase.auth();
const database = firebase.database();

export {
    auth,
    database,
    firebase
};