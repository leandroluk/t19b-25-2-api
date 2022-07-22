const express = require('express');
const { readFileSync, writeFileSync } = require('fs');

const app = express();

app.get('*', (req, res) => {
  const file = './counter.txt';
  const encode = 'utf-8';
  const counter = Number(readFileSync(file, encode)) + 1;

  res.json({
    counter,
    url: req.url,
    method: req.method,
    headers: req.headers,
    params: req.params,
    query: req.query,
    body: req.body,
  });

  writeFileSync(file, counter, encode);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`rodando na porta ${port}`));