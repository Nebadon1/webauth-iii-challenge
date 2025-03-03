const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token,'pennutbutterjellytime', (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "Token not valid" });
      } else {
        req.user = decodedToken;
        next();
      }
    });
  } else {
    res.status(400).json({ message: "No authorization token provided" });
  }
  
};