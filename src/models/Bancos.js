
    // Fast Code v1.0 - Entities -  10/04/2021 18:35:01
    const methods  = require('../../common/database/methods')
    
    const TABLE_NAME  = 'public.bancos'
    const TABLE_TITLE = 'Cadastro de bancos'
    const TABLE_ID    = 'id'
    const TABLE_SEQ   = ''
    const AUTO_ID     = false
    const DEBUG       = true
    
    const Bancos = methods({
        table_name: TABLE_NAME,
        title: TABLE_TITLE,
        key: TABLE_ID,
        sequence: TABLE_SEQ,
        autoIncrement: AUTO_ID,
        notes: '',
        debug: DEBUG,
        fields: [
    
       {name: 'id', type: 'int4', len: 0, isnul: false, def: 0, caption:'Id.', describe:'Id.', fk:null},
       {name: 'co_banco', type: 'varchar', len: 10, isnul: true, def: '', caption:'Cod.', describe:'Cod.', fk:null},
       {name: 'no_bancos', type: 'varchar', len: 60, isnul: true, def: '', caption:'Banco', describe:'Banco', fk:null},
       {name: 'no_site', type: 'varchar', len: 60, isnul: true, def: '', caption:'Site', describe:'Site', fk:null},
        ]
    })
    
    module.exports = Bancos
    