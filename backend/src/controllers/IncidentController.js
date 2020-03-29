const connection = require("../database/connection");

module.exports = {

    async index(request,response){

        const {page = 1} = request.query;

        const [count] = await connection('incidents').count();
        console.log(count);

        //esquema de paginação
        const incidents = await connection('incidents')
            .join('ongs','ongs.id','=','incidents.ong_id') //join
            .limit(5) //limite da requisição para 5 registro
            .offset((page-1)*5)
            .select([//campos que está realizando a busca
                "incidents.*",
                "ongs.name",
                "ongs.whatsapp",
                "ongs.email",
                "ongs.city",
                "ongs.uf"
            ]);

        response.header('X-Total-Count',count['count(*)']);

        return response.json(incidents);

    },

    async create(request,response){

        const {title, description, value} = request.body;

        const ong_id = request.headers.authorization;
        // cabeçalho da requisição 

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        });

        return response.json({id});

    },

    async delete(request,response){
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents')
            .where('id',id)
            .select('ong_id')
            .first();

        if(incidents.ong_id != ong_id){
            return response.status(401).json({ error: 'Operation not permited.'});
        
        }

        await connection('incidents').where('id',id).delete();

        return response.status(204).send();

    }

};