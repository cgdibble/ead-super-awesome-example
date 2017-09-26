const nowCmd = require("./commands/now");
const httpGetCmd = require("./commands/httpGet");

module.exports = function*() {
  const currentTime = yield nowCmd();
  const minId = currentTime.getMinutes();
  const hourId = currentTime.getHours();
  const [r1, r2] = yield [
    httpGetCmd(`https://swapi.co/api/people/${minId}`),
    httpGetCmd(`https://swapi.co/api/people/${hourId}`)
  ];
  return `${r1.name} + ${r2.name}`;
};
