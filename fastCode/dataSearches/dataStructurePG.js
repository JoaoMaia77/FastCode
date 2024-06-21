const sqlQuery = require('../../common/database/sqlQuery')

const dataStructurePG = async (table,schema) => {

    let dbColumns = []
    let dbAttributes = {
        idx: 0,
        key: 0,
        name: '', 
        type: '', 
        len: 0, 
        isnul: true, 
        def: null,
        inc: false, 
        caption:'', 
        describe:'', 
        fk:null
    }

    const tableComment = async () => {
        let sql = `SELECT OBJ_DESCRIPTION('${schema}.${table}'::regclass)`
        let resp = await sqlQuery(sql, [])
        let ret   = (resp.rows[0]['obj_description'] || `Cadastro de ${table}` )
        return ret        
    }

    const columnComment = async (column) => {
        let sql = `SELECT pgd.description
                   FROM pg_statio_all_tables st
                   JOIN pg_description pgd ON pgd.objoid = st.relid
                   JOIN information_schema.columns c ON 
                        pgd.objsubid = c.ordinal_position::integer AND
                        c.table_schema::name = st.schemaname AND 
                        c.table_name::name = st.relname
                   WHERE 
                        c.table_schema = '${schema}' AND
                        c.table_name   = '${table}' AND
                        c.column_name  = '${column}'
                    `
        let resp = await sqlQuery(sql, [])
        let rows = resp.rows
        let desc = ''
        if(rows.length>0){
            desc = rows[0].description
        }
        let ret   = ( desc || capitalize(column) )
        return ret    
    }
    
    let sql = `SELECT DISTINCT cl.*,
              (SELECT MAX(tc.constraint_type) 
                 FROM information_schema.table_constraints AS tc 
                WHERE tc.constraint_name = kcu.constraint_name AND tc.table_schema = kcu.table_schema) AS constraint_type
    FROM information_schema.columns AS cl
    LEFT JOIN information_schema.key_column_usage AS kcu      ON cl.table_schema = kcu.table_schema AND cl.table_name = kcu.table_name AND cl.column_name = kcu.column_name
    WHERE cl.table_schema=$1 and  cl.table_name = $2 
    ORDER BY cl.ordinal_position `

    let data  = await sqlQuery(sql,[schema || 'public',table])
    let lines = data.rows

    const setAttributes = async (item) => {
        let attr      = {...dbAttributes}
        attr.idx      = item.ordinal_position
        attr.key      = item.constraint_type=='PRIMARY KEY' ? 1 : 0
        attr.name     = item.column_name
        attr.caption  = await columnComment(item.column_name)
        attr.type     = item.udt_name
        attr.len      = item.udt_name == 'varchar' ? item.character_maximum_length : 0
        attr.isnul    = (item.is_nullable == 'YES')
        attr.def      = item.column_default ? `"${item.column_default}"` : item.udt_name=='varchar' ? `''` : item.udt_name=='int4' ? 0 : null
        attr.inc      = item.column_default && attr.key > 0 ? true : false 
        attr.describe = attr.caption
        return attr
    }

    let keys = []
    let auto_increment = false
    for await (let item of lines) {
        let attr = await setAttributes(item)
        if(attr.key) { 
            keys.push(attr.name)
            auto_increment = attr.inc  
        }
        dbColumns.push(attr)
    }

    let ret = {
        description: await tableComment(),
        keys: keys,
        inc: auto_increment,
        dbColumns: dbColumns
    }

    return  ret
}

const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = dataStructurePG