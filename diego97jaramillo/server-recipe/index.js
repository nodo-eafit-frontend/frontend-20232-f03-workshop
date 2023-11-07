require('dotenv').config();
<<<<<<< HEAD
const express = require("express");
const router = require("./router");
const cors = require("cors");



const app = express();
const {PORT} = process.env;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(router);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
=======
const express = require('express');
const router = require('./router');
const cors = require('cors');

const app = express();
const { PORT } = process.env;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
>>>>>>> 3eaf0f01df1e2cf1ddec2cd949abb1d4971a8679
});
