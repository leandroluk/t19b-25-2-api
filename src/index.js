const express = require('express');
const path = require('path');
const { readFileSync, writeFileSync } = require('fs');

const app = express();

app.get('*', (req, res) => {
  const file = path.resolve(__dirname, 'counter.txt');
  const encode = 'utf-8';
  const fileContent = readFileSync(file, encode);
  const counter = Number(fileContent || 0) + 1;
  writeFileSync(file, `${counter}`, encode);

  res.json({
    counter,
    url: req.url,
    method: req.method,
    headers: req.headers,
    params: req.params,
    query: req.query,
    body: req.body,
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`rodando na porta ${port}`));