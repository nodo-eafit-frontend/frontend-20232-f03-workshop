
require('dotenv').config(); //importa .env
const express = require('express');
const app = express();
const router = require('./router/router-index');
const {PORT} = process.env; //importa PORT from .env
//or const PORT = process.env.PORT


app.use(router) //use representa a quien recibe la info - la info que queremos dar es el router 

app.listen(PORT, () => console.log(`listening on ${PORT}`));