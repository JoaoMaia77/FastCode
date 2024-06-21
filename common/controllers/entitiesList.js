// Fast Code - Entity LIST - GET
const entities = require('../config/entities.json')

async function entitiesList ( req, res ) {
    let retorno = {success:true, message:'Sucesso. OK.', data:[], code:200}

    let data = []
    entities.list.forEach(list=>{
        let cfg = {...list}
        cfg.apiTypes  = `/api/${list.tableName}/types`, 
        cfg.apiDados  = `/api/${list.tableName}`
        data.push( cfg )
    })

    try {
       
        retorno.data = data
        res.json(retorno).status(retorno.code)

    } catch (err) {
       
        retorno.success = false
        retorno.message = err.message
        retorno.code    = 500
        res.json(retorno).status(retorno.code)

    }
}

module.exports = entitiesList