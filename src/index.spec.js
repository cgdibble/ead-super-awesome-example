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
  .yieldCmd(nowCmd()).yieldReturns({ success: true, payload: new Date(1506442247618) })
  .yieldCmd(allHttpCalls).yieldReturns([{ success: true, payload: { name: 'Bob'}}, {success: true, payload: { name: 'Bill'}}])
  .returns('Bob + Bill')
}));
