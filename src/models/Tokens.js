
    // Fast Code v1.0 - Entities -  10/04/2021 17:50:20
    const methods  = require('../../common/database/methods')
    
    const TABLE_NAME  = 'public.tokens'
    const TABLE_TITLE = 'Cadastro de tokens'
    const TABLE_ID    = 'id'
    const TABLE_SEQ   = ''
    const AUTO_ID     = true
    const DEBUG       = true
    
    const Tokens = methods({
        table_name: TABLE_NAME,
        title: TABLE_TITLE,
        key: TABLE_ID,
        sequence: TABLE_SEQ,
        autoIncrement: AUTO_ID,
        notes: '',
        debug: DEBUG,
        fields: [
    
       {name: 'id', type: 'int4', len: 0, isnul: false, def: "nextval('tokens_id_seq'::regclass)", caption:'Id', describe:'Id', fk:null},
       {name: 'user_id', type: 'int4', len: 0, isnul: true, def: 0, caption:'User_id', describe:'User_id', fk:null},
       {name: 'token', type: 'varchar', len: 255, isnul: false, def: '', caption:'Token', describe:'Token', fk:null},
       {name: 'type', type: 'varchar', len: 80, isnul: false, def: '', caption:'Type', describe:'Type', fk:null},
       {name: 'is_revoked', type: 'bool', len: 0, isnul: true, def: "false", caption:'Is_revoked', describe:'Is_revoked', fk:null},
       {name: 'created_at', type: 'timestamptz', len: 0, isnul: true, def: null, caption:'Created_at', describe:'Created_at', fk:null},
       {name: 'updated_at', type: 'timestamptz', len: 0, isnul: true, def: null, caption:'Updated_at', describe:'Updated_at', fk:null},
        ]
    })
    
    module.exports = Tokens
    