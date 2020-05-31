const firebase = require("firebase-admin");

firebase.initializeApp();

exports.setDefaultRoles = require("./users/setDefaultRoles");
