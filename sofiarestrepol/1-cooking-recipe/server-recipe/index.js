require('dotenv').config(); //importar variables de entorno .env

const express = require('express'); //import express
const router = require('./router'); //import router
const cors = require('cors');
const app = express(); //crear instancia de express

const { PORT } = process.env; //obtener variable PORT del archivo .env

app.use(cors());
app.use(router);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); //inciar servidor en puerto x
