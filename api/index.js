const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Data = require("./models/Data");
const cors = require("cors");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, (err) => {
  if (err) {
    console.error("MongoDB connection error:", err);
  } else {
    console.log("Connected to MongoDB...");
  }
});

const app = express();
app.use(express.json());

// app.use(
//   cors({
//     credentials: true,
//     origin: process.env.CLIENT_URL,
//   })
// );
// app.use(
//   cors({
//     credentials: true,
//     origin: process.env.CLIENT_URL || "*", // Mengganti dengan nilai yang sesuai
//   })
// );

app.use(cors());

// app.use(
//   cors({
//     credentials: false,
//     origin: "*", // Mengizinkan akses dari semua sumber
//   })
// );

app.get("/", (req, res) => {
  res.json("Server Running...");
});

app.get("/datas", async (req, res) => {
  const datas = await Data.find({});
  res.json(datas);
});

app.get("/datas/:id", async (req, res) => {
  const { id } = req.params;
  const datas = await Data.findById(id);
  res.json(datas);
});

app.delete("/datas/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedData = await Data.findByIdAndDelete(id);
    if (!deletedData) {
      return res.status(404).json({ error: "Data not found" });
    }
    res.json({ message: "Data deleted successfully", deletedData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

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

    const updatedData = await Data.findByIdAndUpdate(
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

    if (!updatedData) {
      return res.status(404).json({ error: "Data not found" });
    }

    res.status(200).json(updatedData); // Send the updated data as a response
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" }); // Send an error response
  }
});

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
    const newData = await Data.create({
      eventName,
      description,
      date,
      category,
      eligibility,
      location,
      cost,
      registrationForm,
    });
    res.status(201).json(newData); // Send a response if the insertion is successful
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" }); // Send an error response
  }
});

app.listen(process.env.PORT || 4040);
