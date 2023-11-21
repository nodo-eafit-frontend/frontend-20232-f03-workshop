const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const puerto = 3006;

app.use(bodyParser.json());

const recetas = [];

const fs = require('fs');

const rutaDatos = 'recetas.json';

if (fs.existsSync(rutaDatos)) {
  const datos = fs.readFileSync(rutaDatos, 'utf-8');
  if (datos.trim() !== '') {
    recetas.push(...JSON.parse(datos));
  }
}

app.use((req, res, next) => {
  fs.writeFileSync(rutaDatos, JSON.stringify(recetas, null, 2));
  next();
});

app.use((req, res, next) => {
  res.status(404).json({ mensaje: 'No encontrado' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ mensaje: 'Error interno del servidor' });
});

// Crear
app.post('/recetas', (req, res) => {
  const nuevaReceta = req.body;
  recetas.push(nuevaReceta);
  res.json(nuevaReceta);
});

// Leer
app.get('/recetas', (req, res) => {
  res.json(recetas);
});

// Actualizar
app.put('/recetas/:id', (req, res) => {
  const idReceta = req.params.id;
  const recetaActualizada = req.body;

  res.json(recetaActualizada);
});

// Eliminar
app.delete('/recetas/:id', (req, res) => {
  const idReceta = req.params.id;

  res.json({ mensaje: 'Receta eliminada correctamente' });
});

app.listen(puerto, () => {
  console.log(`El servidor se está ejecutando en el puerto ${puerto}`);
});
