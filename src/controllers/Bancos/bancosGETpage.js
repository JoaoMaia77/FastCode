// Fast Code v1.0 - Entity API GET Page - 10/04/2021 18:35:01
const Bancos = require('../../models/Bancos')
const MSG = require('../../../common/helpers/message')

async function bancosGETpage ( req, res ) {
    let { filter,page,size }  = req.query
    let condition   = filter ? filter : '' 
    let pagina      = page ? Number.parseInt(page) : 1 
    let linhas      = size ? Number.parseInt(size) : 50 
    let idMsg       = 0
        
    let retorno = {
        success: true,
        message: '',
        data: [],
        params: condition,
        page: pagina,
        size: linhas,
        total: 0,
        pages: 0,        
        code: 0,
        err: ''
    }
    
    Bancos.Debug(false)

    Bancos.Page(condition,pagina,linhas).then(ret=>{
        idMsg           =  ret.rows.length>0 ? 1 : 0
        msg             = MSG(idMsg)
        retorno.code    = msg.code
        retorno.success = msg.success
        retorno.data    = ret.rows
        retorno.message = msg.message
        retorno.total   = ret.Total
        retorno.pages   = ret.Pages

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

module.exports = bancosGETpage
