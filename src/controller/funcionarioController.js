const funcionarios = require('../model/funcionarios.json');
const fs = require("fs");

const postFuncionarios = (req,res) => {
    const id = newFuncionarios.length + 1
    const { nome, dataDeNascimento, cargo } = req.body;
    funcionarios.push({id, nome, dataDeNascimento, cargo});

    fs.writeFile("./src/model/funcionarios.json" , JSON.stringify(funcionarios), 'utf8', function(err) {
        if (err) {
        return res.status(424).send({ message:err });
    }
        console.log("Funcionário atualizado com Sucesso");
    });

    res.status(201).send(funcionarios)
};

const getFuncionarios = (req, res) => {
    return res.status(200).send(funcionarios)
};

const getIdadeFuncionarioByID = (req, res) => {
    const id = req.params.id;
    const funcionario = funcionarios.find((funcionario) => funcionario.id == id);
    const data = funcionario.dataDeNascimento.split('/');
    const age = parseInt(2020) - parseInt(data[2]);
    
    res.send({
        nome: funcionario.nome,
        idade: age
    });
};

const deleteFuncionario = (req, res) => {
    const id = req.params.id;
    const deletedEmployee = funcionarios.find((funcionario) => funcionario.id == id);
    const index = funcionarios.indexOf(deletedEmployee);
    funcionarios.splice(index, 1);

    fs.writeFile('./src/models/funcionarios.json', JSON.stringify(funcionarios), 'utf-8', function(err) {
        if (err) {
            return res.status(404).send({message: err});
        };
        console.log('Funcionário deletado com sucesso!');
    });
    res.send(funcionarios);
};

module.exports ={
    postFuncionarios,
    getFuncionarios,
    getIdadeFuncionarioByID,
    deleteFuncionario
}