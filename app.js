
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello our fisrt microservices app');
});

const port = 4000;

app.listen(port, () => {
  console.log(`server run on port${port}`);
});
