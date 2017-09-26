const { call } = require("effects-as-data");
const fn = require("./src");
const now = require("./src/handlers/now");
const httpGet = require("./src/handlers/httpGet");

call(
  {
    onCall: console.log,
    onCallComplete: console.log,
    onCommand: console.log,
    onCommandComplete: console.log
  },
  { now, httpGet, blah: "" },
  fn
)
  .then(console.log)
  .catch(console.error);
