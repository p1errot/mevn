const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const history = require('connect-history-api-fallback');

const app = express();

// Middlewares
app.use(morgan('tiny')); // Morgan request logger
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(history()); // Enables history for Vue.js router
app.use(express.static(path.join(__dirname, 'public'))); // To use current directory

// Set a route
app.get('/', function (req, res) {
  res.send({ resp: 'Hello World!' });
});

// Simple server listening on port 3000
// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });

// Listening from a custom port
const customPort = process.env.PORT || 3000;
app.set('customPort', customPort);

app.listen(customPort, function () {
  console.log(`Example app listening on port ${customPort}`);
});
