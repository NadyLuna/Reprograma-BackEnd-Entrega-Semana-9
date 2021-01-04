const express = require('express');
const route = express.Router();
const controller = require('../controllers/funcionariosController');

route.get('/', controller.getFuncionarios);
route.get('/:id', controller.getIdadeFuncionarioByID);
route.post('/', controller.postFuncionarios);
route.delete('/:id', controller.deleteFuncionario);

module.exports = route;