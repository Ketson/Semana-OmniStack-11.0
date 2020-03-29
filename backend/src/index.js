/*importando as funcionalidades do express*/
const express = require('express');
const cors = require('cors');
const routes = require('./routes');


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/* 
    Rota/Recurso
*/

/*
*Metodos HTTP
*
*GET: Buscar uma informação do back-end
*POST: Criar uma informação no back-end
*PUT: Alterar uma informação no back-end
*DELETE:  Deletar um informação no back-end
*/

/**
 *  Tipos de parametro
 * 
 * Query Params: Parametros nomeados na rota apos "?" (filtros,paginação)
 * Route Params:  parametros utilizados para identificar recursos
 * Request Bory: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * SQL: MySQL,SQLite, PostgreSQL, Oracle, Microsoft Server
  * NoSQL: MongoDB,...
  */

/**
*DRIVER: SELECT * FROM users
*QUERY Builder: table('users').select('*').where()
*/


/*Acessar aplicação no navegador*/
app.listen(3333);



