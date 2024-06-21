const moment = require('moment')
const dataStructure = require('../dataSearches/dataStructurePG')

moment.locale('pt-br')

const modelEntities = async (table,schema,unit) => { 

    const TABLE      = table  
    const SCHEMA     = schema || 'public'
    const UNIT       = unit   || table

    let txt

    let now = moment().format('DD/MM/YYYY HH:mm:ss')

    await dataStructure(TABLE,SCHEMA).then(({dbColumns,keys,inc,description })=> {

        const TABLE_ID    = keys.join()
        const TABLE_SEQ   = ''
        const AUTO_ID     = inc
        const DEBUG       = true
        const FIELDS      = makeColumns(dbColumns)
        const DESCRIPTION = description
        
    txt = `
    // Fast Code v1.0 - Entities -  ${now}
    const methods  = require('../../common/database/methods')
    
    const TABLE_NAME  = '${SCHEMA}.${TABLE}'
    const TABLE_TITLE = '${DESCRIPTION}'
    const TABLE_ID    = '${TABLE_ID}'
    const TABLE_SEQ   = '${TABLE_SEQ}'
    const AUTO_ID     = ${AUTO_ID}
    const DEBUG       = ${DEBUG}
    
    const ${UNIT} = methods({
        table_name: TABLE_NAME,
        title: TABLE_TITLE,
        key: TABLE_ID,
        sequence: TABLE_SEQ,
        autoIncrement: AUTO_ID,
        notes: '',
        debug: DEBUG,
        fields: [
    ${FIELDS}
        ]
    })
    
    module.exports = ${UNIT}
    `
    

    })


function makeColumns (dbColumns) {
    let fields = ''
    for ( let attributes of dbColumns ) {
        fields = fields + '\n       '+makeAttributes(attributes)
    }
    return fields
}

function makeAttributes ({name, type, len, isnul, def, caption, describe, fk}) {
    return `{name: '${name}', type: '${type}', len: ${len}, isnul: ${isnul}, def: ${def}, caption:'${caption}', describe:'${describe}', fk:${fk}},`
}

return txt

}

module.exports = modelEntities
