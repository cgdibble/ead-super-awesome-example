module.exports = function(url) {
  throw new Error("hello");
  return { type: "httpGet", url };
};
