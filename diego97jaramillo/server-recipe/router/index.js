const express = require("express");
const router = express.Router();

router.get('/recipe', (req, res) => {
    res.send( {mensaje:'soy una receta'});
});

router.post('/recipe', (req, res) => {
    res.send('actualice una receta');
});

router.put('/recipe', (req, res) => {
    res.send('agregue una receta');
});

router.delete('/recipe', (req, res) => {
    res.send('elimine una receta');
});


module.exports = router;
