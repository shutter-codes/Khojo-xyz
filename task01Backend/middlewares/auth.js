const jwt = require("jsonwebtoken");
require("dotenv").config();

const checkAdmin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    // User is an admin, proceed to the next middleware or route handler
    next();
  } else {
    return res
      .status(403)
      .json({ message: "Forbidden - Admin access required" });
  }
};

const authenticateUser = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, decodedToken) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }

    req.user = decodedToken;
    next();
  });
};

module.exports = {
  checkAdmin,
  authenticateUser,
};
