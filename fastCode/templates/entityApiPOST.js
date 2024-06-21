const moment = require('moment')

async function entityApiPOST(UNIT) {
    let now = moment().format('DD/MM/YYYY HH:mm:ss')
    let unit = `${UNIT}`.toLowerCase()        

txt = 
`// Fast Code v1.0 - Entity API POST - ${now}
const ${UNIT} = require('../../models/${UNIT}')
const MSG = require('../../../common/helpers/message')

async function ${unit}POST ( req, res ) {
    let body          = req.body
    let idMsg         = 3

    let retorno = {
        success: true,
        id: 0,
        autoIncrement: ${UNIT}.Model.autoIncrement,
        message: '',
        code: 0,
        err: ''
    }
    
    ${UNIT}.Debug(false)

    ${UNIT}.Insert(body).then(ret=>{
        idMsg           = ret.ID ? 3 : 8
        msg             = MSG(idMsg)
        retorno.code    = msg.code
        retorno.success = msg.success
        retorno.id      = ret.ID
        retorno.message = msg.message

        // console.log('Response :',ret.command,ret.rowCount)

        res.json(retorno).status(retorno.code || 201)

    }).catch((err)=>{
        idMsg           = 2
        msg             = MSG(idMsg)
        retorno.code    = msg.code
        retorno.success = msg.success
        retorno.message = msg.message
        retorno.err     = err.message

        res.json(retorno).status(retorno.code || 500) 
    })

}

module.exports = ${unit}POST
`
return txt
}

module.exports = entityApiPOST
