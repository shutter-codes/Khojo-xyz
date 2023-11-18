const express = require("express");
const router = express.Router();

const About = require("../models/aboutSchema");

// injected a middleware to check if the user is admin
const isAdmin = require("../middlewares/auth");


// Create 
router.post("/", async (req, res) => {
    const { content } = req.body;
    try {
      const about = new About({ content });
      await about.save();
      res.status(201).json(about);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // Read
router.get("/", isAdmin, async (req, res) => {
    try {
      const about = await About.find({});
  
      if (about.length === 0) {
        return res.status(404).json({ error: "Not found" });
      }
  
     
      res.status(200).json({ about });
    } catch (error) {
      console.error(error); 
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // Update
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { content } = req.body;
  
    try {
      if (!content) {
        return res.status(400).json({ error: "Content is required for update" });
      }
  
      const about = await About.findByIdAndUpdate(id, { content }, { new: true });
  
      if (!about) {
        return res.status(404).json({ error: "About not found" });
      }
  
      res.json(about);
    } catch (error) {
      console.error(error); 
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  

  
// Delete
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
  
    try {
      const about = await About.findById(id);
      console.log("deleted successfully");
  
      if (!about) {
        return res.status(404).json({ error: "About not found" });
      }
  
      await About.findByIdAndDelete(id);
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  module.exports = router