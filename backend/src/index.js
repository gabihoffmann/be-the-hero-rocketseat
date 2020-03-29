const express = require('express');
const cors = require('cors');
//importar as rotas
const routes = require('./routes'); // ./ caminho do arquivo

const app = express();

app.use(cors());//permite que a aplicação front-end acesse o backend
//informar que o corpo da requisição será lido um JSON
app.use(express.json()); 
app.use(routes);

app.listen(3333);
 // -- Anotações --
/**
 *  Rotas & Recursos
 * Rotas é o caminho para acessar um recuro
 * Recurso é informação gerenciada pela aplicação
 */

 /**
  * Metodos HTTP
  * GET - POST - PUSH - DELETE
  */

  /**
   * Parametros de uma requisição
   * 
   * Query Params: Parâmetros nomeados enviados na rota apos "?" (Filtros, paginação) 
   * Route Params: Parâmetros utilizados para identificar recursos
   * Request Body: Utilizado para criar ou alterar um recurso
   */