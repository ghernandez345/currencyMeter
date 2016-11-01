/**
 * Call to get currency data
 */

import 'whatwg-fetch';

function getCurrencyData(cb) {
  fetch('/currency')
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      cb(json);
    })
    .catch(function(err) {
      console.log('parsing failed', err);
    });
}

export { getCurrencyData }
