
require("dotenv").config(); //importar variables de entorno .env

const express = require("express"); //import express
const router = require("./router"); //import router 
const app = express(); //crear instancia de express

const { PORT } = process.env; //obtener variable PORT del archivo .env


app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
}) ; //inciar servidor en puerto x

app.use(router);



