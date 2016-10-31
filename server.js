var express = require('express');
var app = express();

app.use(express.static('public'));

// Proxy to data endpoint
app.get('/currency', function(req, res) {
  res.send()
});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});
