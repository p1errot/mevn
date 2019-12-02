const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// Morgan request logger
// https://github.com/expressjs/morgan#readme
app.use(morgan('tiny'));

// CORS Enable cors
// https://expressjs.com/en/resources/middleware/cors.html
app.use(cors());

// Set response to JSON
// application/x-www-form-urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

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



