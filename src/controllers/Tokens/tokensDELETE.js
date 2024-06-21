// Fast Code v1.0 - Entity API DELETE - 10/04/2021 17:50:20
const Tokens = require('../../models/Tokens')
const MSG = require('../../../common/helpers/message')

async function tokensDELETE ( req, res ) {
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
    
    Tokens.Debug(false)

    Tokens.Delete(tagId).then(ret=>{
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

module.exports = tokensDELETE
