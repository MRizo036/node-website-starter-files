const express = require('express');
const app = express();
const fs = require('fs');
const port = 8080;

app.get('/', (req, res) => {
    res.send('Hello World!');
  });

const server = app.listen(port, () => {
    console.log(`Express running → PORT ${server.address().port}`);
  });

