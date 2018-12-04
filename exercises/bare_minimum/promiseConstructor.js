/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  let filePromise = new Promise(function(resolve, reject) {
    fs.readFile(filePath, (err, firstLine) => {
      if (!err) {
        let line = firstLine.toString('utf8').split('\n');
        resolve(line[0]);
      } else {
        reject(err);
      }
    });
  });
  return filePromise;
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  var status = new Promise (function(resolve, reject) {
    request (url, (error, response) => {
      if (!error) {
        resolve(response.statusCode);
      } else {
        reject(error);
      }
    });
  });
  return status;
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
