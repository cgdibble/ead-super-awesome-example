const { testFn, args } = require("effects-as-data/test");
const fn = require("./");
const nowCmd = require("./commands/now");
const httpGetCmd = require("./commands/httpGet");

// prettier-ignore
test("stuff", testFn(fn)(() => {
  const allHttpCalls = [
    httpGetCmd('https://swapi.co/api/people/10'),
    httpGetCmd('https://swapi.co/api/people/9')
  ];
  return args()
  .yieldCmd(nowCmd()).yieldReturns(new Date(1506442247618))
  .yieldCmd(allHttpCalls).yieldReturns([{ name: 'Bob'}, { name: 'Bill'}])
  .returns('Bob + Bill')
}));
