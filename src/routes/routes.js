const connection = require('../database/connection')
const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController')

// endpoints = http://localhost:4000/tasks ou http://localhost:4000/tasks/id

router.post('/tasks', TaskController.novaTarefa)

router.get('/tasks',TaskController.listarTarefas) 

router.get('/tasks/:id',TaskController.listarUmaTarefa)

router.put('/tasks/:id', TaskController.atualizarTarefa) 

router.delete('/tasks/:id', TaskController.removerTarefa)


module.exports = router