var express = require('express');
var router = express.Router();

var time_stamp = " ";
router.get('/last.txt', function(req, res) {
  res.send(time_stamp);
  time_stamp = new Date().toLocaleString();
});

var counter = 0;
router.get('/color.html', function (req, res) {
  var color = "red";
  counter++;
  switch (counter) {
    case 1:
      color = "red";
      break;
    case 2:
      color = "yellow";
      break;
    case 3:
      color = "green";
      break;
    case 4:
      color = "blue"
      counter = 0;
      break;
  }
  res.send(`
  <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="/stylesheets/style.css">
        <title>
            color
        </title>
    </head>
    <body>
        <h1 class = "${color}">${color}</h1>
    </body>
</html>`);
});

module.exports = router;