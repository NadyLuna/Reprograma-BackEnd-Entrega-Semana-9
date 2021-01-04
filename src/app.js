const express = require('express')
const app = express()


const index = require('./routes/index');
const livros = require('./routes/livroRouter');
const funcionarios = require('./routes/funcionarioRouter')

app.use(express.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
    )
    console.log('Nova requisicao realizada')
    next()
})

app.use('/', index);
app.use('/livro', livros);
app.use('/funcionarios',funcionarios)

module.exports = app