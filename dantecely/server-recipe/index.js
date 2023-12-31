require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./router");

const app = express();
const { PORT } = process.env;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
