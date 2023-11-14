require('dotenv').config();
const express = require('express');
const router = express.Router();
const jsonReader = require('../utils/json-reader');

const { CALCULATOR_PATH } = process.env;

router.get('/calculator', (req, res) => {
  jsonReader(CALCULATOR_PATH, (err, data) => {
    if (err) {
      res.status(400);
    } else {
      res.status(200).send(data);
    }
  });
});

module.exports = router;
