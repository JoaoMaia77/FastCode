const db = require('./db')

async function sqlQuery(sql,params) {
    const qry = await db()
    const res = await qry.query(sql,params)
    return res
}

module.exports = sqlQuery
