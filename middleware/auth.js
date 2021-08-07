const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = (req, res, next) => {
  // Get Token from Header
  const token = req.header("x-auth-token");

  // Check If Not Token
  if (!token) {
    return res.status(401).send("No Token. Authorization Denied");
  }

  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).send("Invalid Token");
  }
};
