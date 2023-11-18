const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


const userSchema = require("../models/userSchema");

// register a new user
router.post("/register", async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    const existingUser = await userSchema.findOne({
      $or: [{ username }, { email }],
    });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this username or email already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new userSchema({
      username,
      email,
      password: hashedPassword,
      role,
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// login a user
router.post('/login', async (req, res) => {
    try {
      const { username, password } = req.body;
  
      // Find the user by username
      const user = await userSchema.findOne({ username });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      }
  
      // Check if the provided password is correct
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid password.' });
      }
  
      // Generate a JWT token
      const token = jwt.sign({ userId: user._id, username: user.username }, process.env.SECRET_KEY, { expiresIn: '1h' });
  
      res.status(200).json({ token, userId: user._id, username: user.username ,role:user.role});
      if(user.role=="admin"){
        console.log("admin logged in successfully");
      }
      else{
      console.log("user logged in successfully");
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  
// logout a user
router.post('/logout', (req, res) => {
    const token = req.headers.authorization;
  
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  
    // Add the token to the blacklist
    tokenBlacklist.push(token);
  
    res.status(200).json({ message: 'Logout successful' });
  });

  module.exports = router;