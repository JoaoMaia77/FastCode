const db     = require('./common/database/db')
const app    = require('./src/api/server')
global.connection = db()

app()