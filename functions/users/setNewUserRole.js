const functions = require("firebase-functions");
const firebase = require("firebase-admin");

module.exports = functions.auth.user().onCreate(async (user) => {
  try {
    const { uid } = user;
    await firebase.auth().setCustomUserClaims(uid, { role: "user" });
  } catch (error) {
    console.error(error);
  }
});
