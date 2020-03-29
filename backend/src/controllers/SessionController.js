const connection = require("../database/connection");

module.exports = {

    async create(require,response){

        //verificar se ong existe
        const {id} = require.body;

        const ong = await connection('ongs')
            .where('id',id)
            .select('name')
            .first();
        
        if(!ong){
                return response.status(400).json({error: 'No ONG found whit this ID'});
        }
        
        return response.json(ong);

    }

};