// Fast Code v1.0 - Entity API POST - 10/04/2021 19:48:54
const Bancos2 = require('../../models/Bancos2')
const MSG = require('../../../common/helpers/message')

async function bancos2POST ( req, res ) {
    let body          = req.body
    let idMsg         = 3

    let retorno = {
        success: true,
        id: 0,
        autoIncrement: Bancos2.Model.autoIncrement,
        message: '',
        code: 0,
        err: ''
    }
    
    Bancos2.Debug(false)

    Bancos2.Insert(body).then(ret=>{
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

module.exports = bancos2POST
