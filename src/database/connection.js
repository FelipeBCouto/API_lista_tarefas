var knex = require('knex')({
    client: 'mysql',
    connection:{
        host : 'local_do_host', 
        user : 'usuario_do_BD', 
        password : 'senha_do_BD', 
        database : 'nome_do_BD' 
    }
});

module.exports = knex