const functions = require("firebase-functions");
const firebase = require("firebase-admin");

const GENESIS_ADMIN_UID = "UqZ7YCgd7bVAsdervSnSjmWUeCV2";

module.exports = functions.https.onRequest((req, res) => {
  try {
    firebase.auth().setCustomUserClaims(GENESIS_ADMIN_UID, { role: "admin" });
    res.status(200).send("Default roles set successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});
