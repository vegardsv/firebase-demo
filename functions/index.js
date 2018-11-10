const functions = require("firebase-functions");
const cors = require("cors")({ origin: true });

exports.helloWorld = functions.https.onRequest((request, response) => {
  return cors(request, response, () => {
    return response.send("Hello from Firebase!");
  });
});
