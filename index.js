const fn = require("./src/functions");
const { call } = require("effects-as-data");
const now = require("./src/handlers/now");
const httpGet = require("./src/handlers/httpGet");

call({}, { now, httpGet }, fn)
  .then(console.log)
  .catch(console.error);
