const functions = require("firebase-functions");
const firebase = require("firebase-admin");

firebase.initializeApp();

// setup genesis admin
firebase
  .auth()
  .setCustomUserClaims("UqZ7YCgd7bVAsdervSnSjmWUeCV2", { role: "admin" });