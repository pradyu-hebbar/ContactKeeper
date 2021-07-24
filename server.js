const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ msg: "Welcome To Contact Keeper" });
});

// Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

const PORT = process.env.PORT ?? 5000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
