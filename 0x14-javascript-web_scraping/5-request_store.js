#!/usr/bin/node

const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filepath = process.argv[3];

request(url, function (error, response, body) {
  if (error) {
    console.error(error);
    return;
  }
  fs.writeFile(filepath, body, 'utf-8', function (error) {
    if (error) {
      console.error(error);
      return;
    }
    console.log(`The response body has been saved to ${filepath}`);
  });
});

