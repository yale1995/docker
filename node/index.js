const express = require('express')

const app = express()

const port = 3000

app.get('/', (request, response) => {
    response.send('<h1>Obrigado Deus!<h1>')
})

app.listen(port, () => {
    console.log('Rodando server node')
})