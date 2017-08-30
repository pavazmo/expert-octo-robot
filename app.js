const express = require('express');
const process = require('process');

const app = express();
// create our app w/ express
const port = process.env.PORT || 3002;
// configuration =================
// routes ======================================================================
if (process.pid) {
  console.log(`This process is your pid ${process.pid}`);
}
if (process.execPath) {
  console.log(`This process is running with ${process.execPath}`);
}
if (process.argv) {
  console.log(`This process is running in ${process.argv[1]}`);
}
// listen (start app with node server.js) ======================================
app.listen(port);
console.log(`App listening on port ${port}`);
