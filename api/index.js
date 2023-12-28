const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Event = require("./models/Data"); // Assuming your model file is named
const cors = require("cors");

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB...");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit the process if MongoDB connection fails
  });

const app = express();
app.use(express.json());
app.use(cors());
// app.use(
//   cors({
//     credentials: true,
//     origin: process.env.CLIENT_URL,
//   })
// );

app.get("/", (req, res) => {
  res.json("Server Running...");
});

// Get all events
app.get("/datas", async (req, res) => {
  const events = await Event.find({});
  res.json(events);
});

// Get a specific event by ID
app.get("/datas/:id", async (req, res) => {
  const { id } = req.params;
  const event = await Event.findById(id);
  res.json(event);
});

// Delete an event by ID
app.delete("/datas/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedEvent = await Event.findByIdAndDelete(id);
    if (!deletedEvent) {
      return res.status(404).json({ error: "Event not found" });
    }
    res.json({ message: "Event deleted successfully", deletedEvent });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// Update an event by ID
app.put("/datas/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const {
      eventName,
      description,
      date,
      category,
      eligibility,
      location,
      cost,
      registrationForm,
    } = req.body;

    const updatedEvent = await Event.findByIdAndUpdate(
      id,
      {
        eventName,
        description,
        date,
        category,
        eligibility,
        location,
        cost,
        registrationForm,
      },
      { new: true } // To return the updated document
    );

    if (!updatedEvent) {
      return res.status(404).json({ error: "Event not found" });
    }

    res.status(200).json(updatedEvent); // Send the updated data as a response
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" }); // Send an error response
  }
});

// Create a new event
app.post("/datas", async (req, res) => {
  try {
    const {
      eventName,
      description,
      date,
      category,
      eligibility,
      location,
      cost,
      registrationForm,
    } = req.body;
    const newEvent = await Event.create({
      eventName,
      description,
      date,
      category,
      eligibility,
      location,
      cost,
      registrationForm,
    });
    res.status(201).json(newEvent); // Send a response if the insertion is successful
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" }); // Send an error response
  }
});

// Start the server
app.listen(process.env.PORT || 4040);
