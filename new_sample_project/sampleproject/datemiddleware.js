function requestDate (req, res, next) {
  //console.log(req);
  req.requestDate = Date.now()
  req.name="Tejas";
  next()
}
module.exports = requestDate;