const moment = require('moment')

async function entityApiGETseek(UNIT) {
    let now = moment().format('DD/MM/YYYY HH:mm:ss')
    let unit = `${UNIT}`.toLowerCase()        

txt = 
`// Fast Code v1.0 - Entity API GET Seek - ${now}
const ${UNIT} = require('../../models/${UNIT}')
const MSG = require('../../../common/helpers/message')

async function ${unit}GETseek ( req, res ) {
    let { tagId }   = req.params
    let idMsg       = 0
        
    let retorno = {
        success: true,
        message: '',
        data: [],
        params: tagId,
        code: 0,
        err: ''
    }
    
    ${UNIT}.Debug(false)

    ${UNIT}.Seek(tagId).then(ret=>{
        idMsg           =  ret.rows.length>0 ? 1 : 0
        msg             = MSG(idMsg)
        retorno.code    = msg.code
        retorno.success = msg.success
        retorno.data    = ret.rows
        retorno.message = msg.message

        res.json(retorno).status(retorno.code || 200)

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

module.exports = ${unit}GETseek
`
return txt
}

module.exports = entityApiGETseek