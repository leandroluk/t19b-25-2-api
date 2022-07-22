const express = require('express')

const app = express()

app.get('*', (req, res) => res.json({
    url: req.url,
    method: req.method,
    headers: req.headers,
    params: req.params,
    query: req.query,
    body: req.body,
}))

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`rodando na porta ${port}`))