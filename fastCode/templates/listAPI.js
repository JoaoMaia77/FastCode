const moment = require('moment')

async function listAPI () {
    let entities = require('../../common/config/entities.json')
    let routes = ``
    let routesUses = ``
    let now = moment().format('DD/MM/YYYY HH:mm:ss')

    entities.list.forEach((item)=>{
        let UNIT = item.unit
        routes      = routes     + `const ${UNIT.toLowerCase()}USE = require('./${UNIT}') \n`
        routesUses  = routesUses + `router.use('/${UNIT.toLowerCase()}', ${UNIT.toLowerCase()}USE ) \n`
    })

txt = 
`// Fast Code v1.0 - List API - ${now}
const express = require('express')
const router  = express.Router()

const list        = require('../../common/controllers/entitiesList')
const validaToken = require('../auth/verifyToken')

${routes}

router.get('/list', validaToken, list)
${routesUses}

module.exports = router
`

return txt

}

module.exports = listAPI