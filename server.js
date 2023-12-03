
const { initializeApp } = require("firebase/app")
const { getDatabase, set, ref } = require("firebase-admin");
const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");



const firebaseConfig = {
    apiKey: "AIzaSyAmwns4DotxSo-2a1Kx11vnNQ-Y9uyy-Zo",
    authDomain: "ecowash-c462b.firebaseapp.com",
    projectId: "ecowash-c462b",
    storageBucket: "ecowash-c462b.appspot.com",
    messagingSenderId: "728673754156",
    appId: "1:728673754156:web:b18478e1a3d60e3b040589",
    measurementId: "G-766BF1DKF1"
};

// Initialize Firebase
const App = initializeApp(firebaseConfig);
const auth = getAuth(App);


const express = require('express');
const path = require('path');
const admin = require("firebase-admin");
const serviceAccount = require("./serverAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/signupin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Endpoint para realizar a autenticação
app.post('/signupin', async (req, res) => {
    try {
        const { email, password } = req.body;
        admin.auth().createUser({ email, password });

        res.send('Autenticação realizada com sucesso');
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro na autenticação');
    }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado em http://localhost:${PORT}`);
});