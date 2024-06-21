const moment = require('moment')

async function entityApiDELETE(UNIT) {
    let now = moment().format('DD/MM/YYYY HH:mm:ss')
    let unit = `${UNIT}`.toLowerCase()        

txt = 
`// Fast Code v1.0 - Entity API DELETE - ${now}
const ${UNIT} = require('../../models/${UNIT}')
const MSG = require('../../../common/helpers/message')

async function ${unit}DELETE ( req, res ) {
    let { tagId }     = req.params
    let idMsg         = 4

    let retorno = {
        success: true,
        id: tagId,
        message: '',
        rowCount: 0,
        code: 0,
        err: ''
    }
    
    ${UNIT}.Debug(false)

    ${UNIT}.Delete(tagId).then(ret=>{
        idMsg            = ret.rowCount ? 4 : 8
        msg              = MSG(idMsg)
        retorno.code     = msg.code
        retorno.success  = msg.success
        retorno.id       = ret.ID
        retorno.message  = msg.message
        retorno.rowCount = ret.rowCount

        res.json(retorno).status(retorno.code || 202)

    }).catch((err)=>{
        idMsg            = 2
        msg              = MSG(idMsg)
        retorno.code     = msg.code
        retorno.success  = msg.success
        retorno.message  = msg.message
        retorno.err      = err.message
        retorno.rowCount = -1

        res.json(retorno).status(retorno.code || 500) 
    })

}

module.exports = ${unit}DELETE
`
return txt
}

module.exports = entityApiDELETE
