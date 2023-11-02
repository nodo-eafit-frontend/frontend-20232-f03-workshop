require('dotenv').config();
const express = require("express");
const router = require("./router");
const cors = require("cors");
const { urlencoded } = require('body-parser');



const app = express();
const {PORT} = process.env;

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true}))

app.use(router);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
