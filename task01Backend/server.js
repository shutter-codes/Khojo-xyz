const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const userController = require("./controllers/user.controller");
const aboutController = require("./controllers/about.controller");
const partnerController = require("./controllers/partner.controller");
const { dbConnection } = require("./dbConnection");
const { checkAdmin, authenticateUser } = require("./middlewares/auth");

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/users", userController);
app.use("/api/about", aboutController);
app.use("/api/partner", partnerController);

// listen on the port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
