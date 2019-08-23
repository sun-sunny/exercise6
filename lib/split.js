module.exports = function (str) {
  // TODO
  str=str.replace(/(\s+)/g,"");
  return str.split(",");
}