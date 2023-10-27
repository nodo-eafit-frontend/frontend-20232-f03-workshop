require('dotenv').config();
const express = require("express");




const app = express();
const { PORT }= process.env;



app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});



