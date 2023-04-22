// express = controle de rotas
const express = require('express')
const cors = require('cors')

const router = require('./src/routes/routes')

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

// http://localhost:4000/
app.listen(4000, () => {
    console.log("Aplicação rodando na porta 4000")
})

// req (request) = recebe dados os dados da requisição.
// res (response) = retorna os dados requisitados na rota. Algumas possíveis respostas são:
//      a) response.json({message:”retorno de objeto json”}) = retorna um objeto json para a página
//      b) response.send(“ ”) = envia algo para a página como um texto (é o caso abaixo)
// '/' = rota inicial, acessada pelo link http://localhost:4000/
app.get('/', (req, res) =>{
    res.send("Opa, beleza? :D")
})