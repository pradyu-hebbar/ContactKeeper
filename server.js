const express = require("express");
const connectDB = require("./config/db");
const app = express();
const path = require("path");

// Init Middleware
app.use(express.json({ extendend: false }));

// Connect Database
connectDB();

// Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

// Serve Static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT ?? 5000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
