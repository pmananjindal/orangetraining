/*function requestDate(req, res, next) {
  //console.log(req);
  req.requestDate = Date.now()
  req.name="Anjali";
  next()
}
*/
const authenticateToken = require ('');
// Middleware to protect routes
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader?.split(' ')[1];
 
  if (!token) return res.sendStatus(401);
 
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    //req.user = user;
    next();
  });
}

module.exports = authenticateToken;