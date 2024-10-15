// Modules
const admin = require("firebase-admin");

// Files/Helpers
const serviceAccount = require("../serviceAccountKey.json");
const config = require("./config");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: config.firebase.DATABASE_URL,
  storageBucket: config.firebase.STORAGE_BUCKET
});

const db = admin.firestore();
const bucket = admin.storage().bucket();
const auth = admin.auth();


module.exports = { db, admin, bucket, auth };