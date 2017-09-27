const { call } = require("effects-as-data");
const fn = require("./src");
const failable = require("./src/helpers/failables");
const now = failable(require("./src/handlers/now"));
const httpGet = failable(require("./src/handlers/httpGet"));

call(
  {
    onCall: console.log,
    onCallComplete: console.log,
    onCommand: console.log,
    onCommandComplete: console.log
  },
  { now, httpGet },
  fn
)
  .then(console.log)
  .catch(console.error);
