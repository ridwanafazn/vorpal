import express from "express";
import cors from "cors";
import { connectDB } from "./db.js";
import {
  getEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
} from "./api.js";
import "dotenv/config";

connectDB();

const app = express();

app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API routes
app.get("/", getEvents);
app.get("/:id", getEventById);
app.post("/", createEvent);
app.patch("/:id", updateEvent);
app.delete("/:id", deleteEvent);

app.listen(process.env.PORT || 3000, () => {
  console.log(
    `Server is listening on http://localhost:${process.env.PORT || 3000}`
  );
});
