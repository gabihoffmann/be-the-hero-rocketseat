/**
 * Teste de integração para entidade ONG
 */
const request = require('supertest'); //requisição da API supertest que é capaz de fazer requisições HTTP no ambiente de teste
const app = require('../../src/app'); //requisição chamando a aplicação
const connection = require('../../src/database/connection');//requisição para realização das migrates

describe('ONG', () => {
    beforeEach(async()=>{
        await connection.migrate.rollback(); //limpeza do banco de teste
        await connection.migrate.latest();
    });

    afterAll(async()=>{
       await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "APAD3",
                email: "contato@contato.com",
                whatsapp: "0101010101",
                city: "goiania",
                uf: 'go'
            });
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});