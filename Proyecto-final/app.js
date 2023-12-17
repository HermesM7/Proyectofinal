const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(
    "Hola, mi nombre es Hermes y este es mi proyecto final."
  );
});

const server = app.listen(57675, () => {
  console.log(`Servidor online --> http://localhost:57675`);
});

app.close = (callback) => {
  server.close(callback);
};

module.exports = app;
