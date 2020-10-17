const livros = require('../model/livros.json');
const fs = require("fs");

const postLivros = (req,res) => {
    console.log(req.body);
    const {nome,} = req.body;
    livros.push({});

    fs.writeFile("./src/model/livros.json" , JSON.stringify(livros), 'utf8', function(err) {
        if (err) {
        return res.status(424).send({ message:err });
    }
        console.log("Arquivo atualizado com sucesso");
    });

    res.status(201).send(livros)

};