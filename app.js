const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });

app.set('customPort', process.env.PORT || 3000);

app.listen(app.get('customPort'), function () {
  console.log(`Example app listening on port ${app.get('customPort')}`);
});