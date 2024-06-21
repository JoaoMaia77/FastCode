const moment = require('moment')

async function entityApiPUT(UNIT) {
    let now = moment().format('DD/MM/YYYY HH:mm:ss')
    let unit = `${UNIT}`.toLowerCase()        

txt = 
`// Fast Code v1.0 - Entity API PUT / PATCH - ${now}
const ${UNIT} = require('../../models/${UNIT}')
const MSG = require('../../../common/helpers/message')

async function ${unit}PUT ( req, res ) {
    let { tagId }     = req.params
    let body          = req.body
    let idMsg         = 5

    let retorno = {
        success: true,
        id: tagId,
        message: '',
        params: body,
        rowCount: 0,
        code: 0,
        err: ''
    }
    
    ${UNIT}.Debug(false)

    ${UNIT}.Update(tagId,body).then(ret=>{
        idMsg            = ret.rowCount ? 5 : 8
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

module.exports = ${unit}PUT
`
return txt
}

module.exports = entityApiPUT
