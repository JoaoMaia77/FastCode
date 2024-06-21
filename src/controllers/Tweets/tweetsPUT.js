// Fast Code v1.0 - Entity API PUT / PATCH - 10/04/2021 17:49:16
const Tweets = require('../../models/Tweets')
const MSG = require('../../../common/helpers/message')

async function tweetsPUT ( req, res ) {
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
    
    Tweets.Debug(false)

    Tweets.Update(tagId,body).then(ret=>{
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

module.exports = tweetsPUT
