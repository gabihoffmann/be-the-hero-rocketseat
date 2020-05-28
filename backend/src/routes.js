/**
 * Arquivo para organização das rotas 
 */
const express = require('express');
//API para validação das rotas
const {Joi,celebrate, Segments} = require('celebrate');

//const connection = require('./database/connection');
const OngController = require('./controllers/OngController');
const InsidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
//desacoplando as rotas
const routes = express.Router();



// a validação deve ocorrer antes da crição (midware express)
//validação dos parametros de uma requisição 
//quando uma chave é um objeto JS está vai entre chaves

/**
 * REFERÊNCIA 
 * Express: https://expressjs.com/pt-br/guide/using-middleware.html
 * celebrate: https://github.com/arb/celebrate#example-usage
/**
 * Rota de cadastro de ongs com validação do corpo da requisição
 */
routes.post(`/ongs`, celebrate({
    [Segments.BODY] : Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })

}), OngController.create);

/**
 * Rota de listagem de ongs cadastradas
 */
routes.get('/ongs', OngController.index);

/**
 * Rota de criação de casos com validação do BODY e HEADERS
 */
routes.post('/incidents', celebrate({
    [Segments.BODY] : Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required()
    }),

    [Segments.HEADERS] : Joi.object({
        authorization : Joi.string().required(),
    }).unknown()

}),InsidentController.create);

/**
 * Rota de listagem dos casos cadastrados com validação do QUERY
 */
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}),InsidentController.index);

/**
 * Rota de delete de casos com validação do PARAMS, que identifica o recurso
 */
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS] : Joi.object().keys({
        id: Joi.number().required()
    })
}),InsidentController.delete);

/**
 * Rota de listagem de casos de uma ong com validação do HEADERS (precisa estar logado)
 */
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), ProfileController.index);

/**
 * Rota de login com validação do corpo da requisição com a solicitação de id válido
 */
routes.post('/sessions', celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required()
    })
}),SessionController.create); //intensão é criar a sessão

// routes.get("/ongs", async(request,response) => {
//     const ongs = await connection('ongs').select('*');

//     return response.json(ongs);

// });

//exportar as rotas para serem acessiveis pelo index
module.exports = routes;