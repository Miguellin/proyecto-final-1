// este archivo me permite hacer el puente de conexion con mi base de datos y mi app
require('dotenv').config();

const admin = require('firebase-admin');

const app = admin.initializeApp({
    credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
    })
});

module.exports = app;