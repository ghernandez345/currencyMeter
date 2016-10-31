var request = require('request');
var express = require('express');
var app = express();

app.use(express.static('public'));


var DATA_ENDPOINT = 'https://widgister.herokuapp.com/challenge/frontend';

// Proxy to data endpoint
app.get('/currency', function(req, res) {
  request(DATA_ENDPOINT, function(err, response, body) {
    if (err || response.statusCode !== 200) {
      return res.send({error: 'There was a request error'});
    }

    return res.send(body);
  });
});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});
