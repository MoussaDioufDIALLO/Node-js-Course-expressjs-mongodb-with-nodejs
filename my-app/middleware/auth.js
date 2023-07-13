const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  jwt.verify(token, "fake-jwt-secret", (err, decode) => {
    if (err) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    console.log(decode);
    next();
  });
};

module.exports = auth;
