// Fast Code v1.0 - List API - 10/04/2021 19:48:57
const express = require('express')
const router  = express.Router()

const list        = require('../../common/controllers/entitiesList')
const validaToken = require('../auth/verifyToken')

const bancos2USE = require('./Bancos2') 
const tweetsUSE = require('./Tweets') 
const tokensUSE = require('./Tokens') 
const bancosUSE = require('./Bancos') 


router.get('/list', validaToken, list)
router.use('/bancos2', bancos2USE ) 
router.use('/tweets', tweetsUSE ) 
router.use('/tokens', tokensUSE ) 
router.use('/bancos', bancosUSE ) 


module.exports = router
