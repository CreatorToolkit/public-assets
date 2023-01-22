require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Index

const routes = require("./routes/index");
app.use("/", routes);

// 404

app.use((req, res, next) => {
  return res.status(404).json({
    message: "Not found",
  });
});

// Error handler

app.use((err, req, res, next) => {
  return res.status(500).json({
    message: "Internal server error",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
