/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var promiseConstructor = require('./promiseConstructor.js');
var promisification = require('./promisification.js');



var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  let profile = new Promise(function(resolve, reject) {
    let username = promiseConstructor.pluckFirstLineFromFileAsync(readFilePath);
    username.then(function(value) {
      return promisification.getGitHubProfileAsync(value);
    }).then(function(value) {
      fs.writeFile(writeFilePath, JSON.stringify(value), (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(value);
        }
      });
    });
  });
  return profile;
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
