const { testFn, args } = require("effects-as-data/test");
const fn = require("./");
const cmdNow = require("../commands/now");
const cmdHttpGet = require("../commands/httpGet");

// prettier-ignore
test("thigns", testFn(fn)(() => {
  const now = new Date(1507653160577)
  const seconds = now.getSeconds()
  const minutes = now.getMinutes()
  return args()
  .yieldCmd(cmdNow()).yieldReturns(now)
  .yieldCmd([cmdHttpGet(`https://swapi.co/api/people/${minutes}`), cmdHttpGet(`https://swapi.co/api/people/${seconds}`)])
  .yieldReturns([{ name: 'Bob'}, { name: 'Rick'}])
  .returns('Bob' + 'Rick')
}));
