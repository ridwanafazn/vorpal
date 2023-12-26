const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: String,
  category: String,
  description: String,
  startDate: Date,
  endDate: Date,
  eligibility: String,
  location: String,
  contact: String,
  website: String,
  instagram: String,
  cost: String,
  form: String,
});

export default mongoose.models.Event || mongoose.model("Event", eventSchema);
