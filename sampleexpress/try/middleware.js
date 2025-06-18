function requestDate(req, res, next) {
  //console.log(req);
  req.requestDate = Date.now()
  req.name="Anjali";
  next()
}

module.exports = requestDate;