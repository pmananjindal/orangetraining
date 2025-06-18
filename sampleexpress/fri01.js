var requestDate = function (req, res, next) {
  //console.log(req);
  req.requestDate = Date.now()
  req.name="Manan";
  next()
}
app.use(requestDate)
app.get('/', (req,res)=> {
  console.log(req.requestDate); //get method
  console.log(req.name); //get method
  res.send('Hello World' + req.name) //send response
})
 