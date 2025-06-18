function requestDate (req,res,next){
    req.requestDate= Date.now()
    req.name = 'sujit';
    next()
}

module.exports = requestDate