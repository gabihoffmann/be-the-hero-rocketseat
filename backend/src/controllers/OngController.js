const connection = require("../database/connection");
//const crypto = require('crypto');
const generateUniqueId = require("../utils/generateUniqueId");

module.exports = {

    async index(request, response){
       const ongs = await connection('ongs').select('*');

       return response.json(ongs);
    },
    
    async create(request, response) {
        // Acessar os parametros os query parms
        //const params = request.params;
        const {name, email, whatsapp, city, uf} = request.body;
            
        //estratégia para criação do id
        //Isolando a função de geração de id unico
        const id  = generateUniqueId();//crypto.randomBytes(4).toString('HEX');
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });
    
        return response.json(
            {id}
        );
    }
};

