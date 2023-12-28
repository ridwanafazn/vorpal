// const mongoose = require("mongoose");

// const DataSchema = new mongoose.Schema(
//   {
//     eventName: String,
//     description: String,
//     date: Date,
//     category: String,
//     eligibility: String,
//     location: String,
//     cost: String,
//     registrationForm: String,
//   },
//   { timestamps: true }
// );

// const DataModel = mongoose.model("Data", DataSchema);
// module.exports = DataModel;

const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
  {
    eventName: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },
    eligibility: {
      type: String,
      required: false,
    },
    location: {
      type: String,
      required: true,
    },
    cost: {
      type: String,
      required: false,
    },
    registrationForm: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const DataModel = mongoose.model("Data", DataSchema);
module.exports = DataModel;
