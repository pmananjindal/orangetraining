function requestDate (req, res, next) {
  req.requestDate = Date.now();
  req.name = "akshada";
next()
}
module.exports = requestDate;