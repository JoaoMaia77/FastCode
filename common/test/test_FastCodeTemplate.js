const modelEntities = require('../../fastCode/templates/modelEntities')

const TABLE      = 'tweets'  
const SCHEMA     = 'public'
const UNIT       = 'Tweets'  

modelEntities(TABLE,SCHEMA,UNIT).then(txt=>{
    console.log('TXT:',txt)
    process.exit(0)    
})


