const express = require('express');
// const db = require('./queries');

const app = express();
const port = 3000;


app.use(express.json());


app.get('/', (req, res) => {
  res.json({ info: 'Node.js, Express, and Postgres API' })
});


app.listen(port, () => console.log(`App running on port ${port}.`));