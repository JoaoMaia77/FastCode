// Fast Code v1.0 - Entity API GET - 10/04/2021 17:50:20
const Tokens = require('../../models/Tokens')
const MSG = require('../../../common/helpers/message')

async function tokensGET ( req, res ) {
    let { filter }  = req.query
    let condition   = filter ? filter : '1=1' 
    let idMsg       = 0
        
    let retorno = {
        success: true,
        message: '',
        data: [],
        params: condition,
        code: 0,
        err: ''
    }
    
    Tokens.Debug(false)

    Tokens.Select(condition).then(ret=>{
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

module.exports = tokensGET
