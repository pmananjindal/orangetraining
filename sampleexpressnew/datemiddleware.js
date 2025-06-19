function requestDate (req, res, next) {
  //console.log(req);
  req.requestDate = Date.now()
  req.name="vishal";
  next()
}
module.exports = requestDate;