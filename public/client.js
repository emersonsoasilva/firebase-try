import { initializeApp } from "./firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "./firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAmwns4DotxSo-2a1Kx11vnNQ-Y9uyy-Zo",
    authDomain: "ecowash-c462b.firebaseapp.com",
    projectId: "ecowash-c462b",
    storageBucket: "ecowash-c462b.appspot.com",
    messagingSenderId: "728673754156",
    appId: "1:728673754156:web:b18478e1a3d60e3b040589",
    measurementId: "G-766BF1DKF1"
};

const App = initializeApp(firebaseConfig);
const auth = getAuth(App);

let emailInp = document.getElementById('emailInp');
let pwordInp = document.getElementById('pwordInp');
let regForm = document.getElementById('regForm');

window.signup = function(e){
    e.preventDefault();
    let obj = {
        email: emailInp.value,
        password: pwordInp.value,
    }
    createUserWithEmailAndPassword(auth, obj.email, obj.password).then(function(success){

        alert("Signup successfully");

    })
    .catch(function(err){
        alert("Error" + err)
    })
    console.log(obj);
};