const mongoose = require("mongoose");

async function dbConnect() {
  await mongoose.connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
}

export default dbConnect;
