/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath) {
  fs.readFile(filePath, (err, firstLine) => {
    if (firstLine !== undefined) {
      let line = firstLine.toString('utf8').split('\n');
      arguments[1](err, line[0]);
    } else {
      arguments[1](err, firstLine);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url) {
  request(url, (error, response) => {
    if (error) {
      arguments[1](error, response);
    } else {
      arguments[1](error, response.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
