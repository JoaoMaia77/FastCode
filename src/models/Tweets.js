
    // Fast Code v1.0 - Entities -  10/04/2021 17:49:15
    const methods  = require('../../common/database/methods')
    
    const TABLE_NAME  = 'public.tweets'
    const TABLE_TITLE = 'Cadastro de tweets'
    const TABLE_ID    = 'id'
    const TABLE_SEQ   = ''
    const AUTO_ID     = true
    const DEBUG       = true
    
    const Tweets = methods({
        table_name: TABLE_NAME,
        title: TABLE_TITLE,
        key: TABLE_ID,
        sequence: TABLE_SEQ,
        autoIncrement: AUTO_ID,
        notes: '',
        debug: DEBUG,
        fields: [
    
       {name: 'id', type: 'int4', len: 0, isnul: false, def: "nextval('tweets_id_seq'::regclass)", caption:'Id', describe:'Id', fk:null},
       {name: 'user_id', type: 'int4', len: 0, isnul: false, def: 0, caption:'User_id', describe:'User_id', fk:null},
       {name: 'content', type: 'varchar', len: 240, isnul: false, def: '', caption:'Content', describe:'Content', fk:null},
       {name: 'created_at', type: 'timestamptz', len: 0, isnul: true, def: null, caption:'Created_at', describe:'Created_at', fk:null},
       {name: 'updated_at', type: 'timestamptz', len: 0, isnul: true, def: null, caption:'Updated_at', describe:'Updated_at', fk:null},
        ]
    })
    
    module.exports = Tweets
    