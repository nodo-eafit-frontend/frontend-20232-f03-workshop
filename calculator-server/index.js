require('dotenv').config();
const express = require('express')

const app = express();
const {PORT} = process.env;


app.listen(PORT, () => { 
    console.log('..Server is running on port 3006');
});
