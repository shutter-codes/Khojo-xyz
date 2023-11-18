const express = require("express");
const router = express.Router();
const { checkAdmin, authenticateUser } = require("../middlewares/auth");

const partnerSchema = require("../models/partnerSchema");

router.post("/", authenticateUser, checkAdmin,async (req, res) => {
  const { partnerName, desc, experience } = req.body;
  try {
    const partner = new partnerSchema({ partnerName, desc, experience });
    await partner.save();
    res.status(201).json(partner);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const partner = await partnerSchema.find({});

    if (partner.length === 0) {
      return res.status(404).json({ error: "Not found" });
    }

    res.status(200).json({ partner });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update
router.put("/:id", authenticateUser, checkAdmin,async (req, res) => {
  const { id } = req.params;
  const { partnerName, desc, experience } = req.body;

  try {
    if (!partnerName || !desc || !experience) {
      return res.status(400).json({ error: "Field is required for update" });
    }

    const partner = await partnerSchema.findByIdAndUpdate(
      id,
      { partnerName, desc, experience },
      { new: true }
    );

    if (!partner) {
      return res.status(404).json({ error: "partner not found" });
    }

    res.json(partner);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete
router.delete("/:id", authenticateUser, checkAdmin,async (req, res) => {
  const { id } = req.params;

  try {
    const partner = await partnerSchema.findById(id);
    console.log("deleted successfully");

    if (!partner) {
      return res.status(404).json({ error: "partner not found" });
    }

    await partnerSchema.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
