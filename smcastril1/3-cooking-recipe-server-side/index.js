const express = require("express");
const cors = require("cors");
const router = require("./router");
require("dotenv").config();

// Create my app
const app = express();
const { PORT } = process.env;

app.use(cors());
app.use(router); //Midleware

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
