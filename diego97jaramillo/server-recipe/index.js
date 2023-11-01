require('dotenv').config();
const express = require("express");
const router = require("./router");
const cors = require("cors");
const bodyParser = require('body-parser');


const app = express();
const {PORT} = process.env;

app.use(cors());
app.use(bodyParser.json());
app.use(router);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
