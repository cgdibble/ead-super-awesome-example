const cmd = require("../commands");

module.exports = function* getStarWarsCharFromApiBasedSeconds() {
  const now = yield cmd.now();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const [mBody, sBody] = yield [
    cmd.httpGet(`https://swapi.co/api/people/${minutes}`),
    cmd.httpGet(`https://swapi.co/api/people/${seconds}`)
  ];
  return mBody.name + sBody.name;
};
