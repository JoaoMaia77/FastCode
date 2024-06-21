const Tokens = require('../../src/models/Tokens')
const MSG    = require('../common/helpers/message')
let filter = '1=1'
let idMsg  = 0

let retorno = {
    success: true,
    message: '',
    data: [],
    params: '',
    code: 0,
    err: ''
}

Tokens.Debug(false)

Tokens.Select(filter).then(ret=>{
    idMsg           =  ret.rows.length>0 ? 1 : 0
    msg             = MSG(idMsg)
    retorno.code    = msg.code
    retorno.success = msg.success
    retorno.data    = ret.rows
    retorno.message = msg.message

    console.log('RET:',retorno)

}).catch((err)=>{
    idMsg           = 2
    msg             = MSG(idMsg)
    retorno.code    = msg.code
    retorno.success = msg.success
    retorno.message = msg.message
    retorno.err     = err.message
    retorno.params  = filter || ''

    console.log('Err:',retorno)
})


