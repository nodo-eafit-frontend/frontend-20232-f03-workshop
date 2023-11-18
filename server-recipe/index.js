require('dotenv').config();
const express = require("express");
const router = require("./router");

const app = express();
const {PORT} = process.env;

app.use(router);

app.listen(PORT, () =>{
    console.log(`server is running on port ${PORT}`)
});

