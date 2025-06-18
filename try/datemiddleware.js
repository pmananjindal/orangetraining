function requestDate(req, res, next){
req.requestDate=Date.now()
req.name="reena";
next()

}
module.exports = requestDate;