const database = require('../database/connection')

class TaskController{
    novaTarefa(req, res){
        
        const {tarefa, descricao} = req.body // recebe os dados a serem enviados ao BD

        console.log(tarefa, descricao)
        
        // insere os dados na tabela
        database.insert({tarefa,descricao}).table("tasks").then(data=>{
            console.log(data)
            res.json({message:"Tarefa criada com sucesso!"})
        }).catch(error=>{
            console.log(error)      // mostra possíveis erros
        })
    }

    listarTarefas(req, res){
        database.select("*").table("tasks").then(tarefas=>{
            console.log(tarefas)
            res.json(tarefas)
        }).catch(error=>{
            console.log(error)
        })
    }

    listarUmaTarefa(req, res){
        const { id } = req.params

        database.select("*").table("tasks").where({id:id}).then(tarefa=>{
            res.json(tarefa)
        }).catch(error=>{
            console.log(error)
        })
    }

    atualizarTarefa(req, res){
        const { id } = req.params
        const {tarefa} = req.body
        const {descricao} = req.body
        
        database.where({id:id}).update({tarefa:tarefa}).table("tasks").then(data=>{
            res.json({message:"Tarefa atualizada com sucesso"})
        }).catch(error=>{
            res.json(error)
        })
    }

    /*
    ALTERE CASO DESEJE ATUALIZAR A TAREFA E DESCRIÇÃO
    atualizarTarefa(req, res){
        const { id } = req.params
        const {tarefa} = req.body
        const {descricao} = req.body
        
        database.where({id:id}).update({tarefa:tarefa}).table("tasks").catch(error=>{
            res.json(error)
        }),
        database.where({id:id}).update({descricao:descricao}).table("tasks").then(data=>{
            res.json({message:"Tarefa atualizada com sucesso"})
        }).catch(error=>{
            res.json(error)
        })
    }
    */

    removerTarefa(req, res){
        const { id } = req.params

        database.where({id:id}).del().table("tasks").then(data=>{
            res.json({message:"Tarefa removida com sucesso"})
        }).catch(error=>{
            res.json(error)
        })
    }
}

// exporta a classe, tornando-a acessível para a aplicação
module.exports = new TaskController()