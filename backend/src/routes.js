/**
 * Arquivo para organização das rotas 
 */
const express = require('express');
//const connection = require('./database/connection');
const OngController = require('./controllers/OngController');
const InsidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
//desacoplando as rotas
const routes = express.Router();

routes.post(`/ongs`, OngController.create);
routes.get('/ongs',OngController.index);

routes.post('/incidents',InsidentController.create);
routes.get('/incidents',InsidentController.index);
routes.delete('/incidents/:id',InsidentController.delete);

routes.get('/profile', ProfileController.index);

routes.post('/sessions', SessionController.create); //intensão é criar a sessão

// routes.get("/ongs", async(request,response) => {
//     const ongs = await connection('ongs').select('*');

//     return response.json(ongs);

// });

//exportar as rotas para serem acessiveis pelo index
module.exports = routes;