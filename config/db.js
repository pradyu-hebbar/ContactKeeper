const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");
mongoose.set("useCreateIndex", true);

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.msg);
    process.exit(1);
  }
};

module.exports = connectDB;
