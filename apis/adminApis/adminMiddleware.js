const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  let tokenWithBearer = req.headers["authorization"];

  if (!tokenWithBearer) {
    res.send({
      message: false,
      reason: "Unauthorised access.. please login",
      login: true
    });
  }
  if (tokenWithBearer.startsWith("Bearer ")) {
    let token = tokenWithBearer.slice(7, tokenWithBearer.length);
    jwt.verify(token, process.env.ADDEDKEYFORADMIN, (err, decoded) => {
      if (err) {
        res.send({
          mesaage: false,
          reason: "Session expired..",
          login: true
        });
      } else {
        next();
      }
    });
  }
};

module.exports = verifyToken;
