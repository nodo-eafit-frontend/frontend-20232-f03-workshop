
//este router se usa para no llenar de codigo el index normal

const express = require('express');
const router = express.Router();
const app = express(); // crear un middleware para poder parse el json

app.use(express.json()); //aplicar el middleware
//usamos este middleware en vez de json reader


//definicion de las APIs
//recibe el path con el que navegamos en el navegador, y un callback que recibe la info de una peticion y la retorna 

// router.get(path, callback)
router.get('/calculator', (req, res) => { //req lo que se pide, res lo que se manda
  console.log('gotten');
  res.status(200).send('gottennnnn');
})
//un tercer parametro es 'next' para pasar la info al siguiente, pero este es el punto final entonces no se necesita

module.exports = router;