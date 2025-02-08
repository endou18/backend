const express = require("express");
const Event = require("../models/Event");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, async (req, res) => {
  const { title, description, date, image } = req.body;
  const event = new Event({ title, description, date, image });

  await event.save();
  res.json({ message: "Event created successfully!" });
});

router.get("/", async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

module.exports = router;
