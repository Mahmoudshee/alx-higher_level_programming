#!/usr/bin/node
const request = require('request');

const movieId = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${movieId}`;

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const characters = JSON.parse(body).characters;
    printCharactersInOrder(characters, 0);
  }
});

function printCharactersInOrder(characters, i) {
  if (i === characters.length) {
    return;
  }
  request(characters[i], (error, response, body) => {
    if (error) {
      console.error(error);
    } else {
      console.log(JSON.parse(body).name);
      printCharactersInOrder(characters, i + 1);
    }
  });
}

