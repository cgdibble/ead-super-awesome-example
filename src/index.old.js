const fetch = require("fetch-everywhere");

module.exports = async function getStarWarsCharFromApiBasedSeconds() {
  const now = new Date();
  const seconds = now.getSeconds();
  const response = await fetch(`https://swapi.co/api/people/${seconds}`);
  const body = await response.json();
  return body.name;
};
