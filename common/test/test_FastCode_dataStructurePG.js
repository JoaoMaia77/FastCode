const dataStructure = require('../../fastCode/dataSearches/dataStructurePG')


const TABLE_NAME = 'tweets'

dataStructure(TABLE_NAME).then(ret=>{
    console.log(ret)
    process.exit(0)
})

