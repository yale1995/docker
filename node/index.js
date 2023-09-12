const express = require('express')

const app = express()

const port = 3000

const config = {
    host: 'db',
    user: 'localhost',
    password: 'password',
    database: 'nodedb'
}

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Yale')`
connection.query(sql)
connection.end()

app.get('/', (request, response) => {
    response.send('<h1>Testando aplicação!<h1>')
})

app.listen(port, () => {
    console.log('Rodando server node')
})