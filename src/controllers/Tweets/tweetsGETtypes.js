// Fast Code v1.0 - Entity API GET Types - 10/04/2021 17:49:16
const Tweets = require('../../models/Tweets')

async function tweetsGETtypes ( req, res ) {
    let idMsg       = 0
        
    let retorno = {
        success: true,
        message: 'Tipos de dados',
        title: Tweets.Model.title,
        table: Tweets.Model.table_name,
        key: Tweets.Model.key,
        autoIncrement: Tweets.Model.autoIncrement,
        types: Tweets.FieldsTypes,
        defaults: Tweets.Defaults,
        captions: Tweets.Captions,
        notes: Tweets.Model.notes
    }
    
    res.json(retorno).status(200)

}

module.exports = tweetsGETtypes
