require('dotenv').config();
const express = require('express');
const router = require('./router');
const cors = require('cors');

const app = express();
const { PORT } = process.env;

app.use(cors());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
