const moment = require('moment')

async function entityApiGETtypes(UNIT) {
    let now = moment().format('DD/MM/YYYY HH:mm:ss')
    let unit = `${UNIT}`.toLowerCase()        

txt = 
`// Fast Code v1.0 - Entity API GET Types - ${now}
const ${UNIT} = require('../../models/${UNIT}')

async function ${unit}GETtypes ( req, res ) {
    let idMsg       = 0
        
    let retorno = {
        success: true,
        message: 'Tipos de dados',
        title: ${UNIT}.Model.title,
        table: ${UNIT}.Model.table_name,
        key: ${UNIT}.Model.key,
        autoIncrement: ${UNIT}.Model.autoIncrement,
        types: ${UNIT}.FieldsTypes,
        defaults: ${UNIT}.Defaults,
        captions: ${UNIT}.Captions,
        notes: ${UNIT}.Model.notes
    }
    
    res.json(retorno).status(200)

}

module.exports = ${unit}GETtypes
`
return txt
}

module.exports = entityApiGETtypes