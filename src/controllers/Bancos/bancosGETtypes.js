// Fast Code v1.0 - Entity API GET Types - 10/04/2021 18:35:01
const Bancos = require('../../models/Bancos')

async function bancosGETtypes ( req, res ) {
    let idMsg       = 0
        
    let retorno = {
        success: true,
        message: 'Tipos de dados',
        title: Bancos.Model.title,
        table: Bancos.Model.table_name,
        key: Bancos.Model.key,
        autoIncrement: Bancos.Model.autoIncrement,
        types: Bancos.FieldsTypes,
        defaults: Bancos.Defaults,
        captions: Bancos.Captions,
        notes: Bancos.Model.notes
    }
    
    res.json(retorno).status(200)

}

module.exports = bancosGETtypes
