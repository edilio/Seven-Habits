Ext.define('Seven.model.Goal', {
    extend: 'Ext.data.Model',
    requires:[
        'Ext.data.Store',
        'Ext.data.proxy.LocalStorage'
    ],
    config: {
        fields: [
            {name:'id', type: 'int', isUnique:true},
            {name:'goal', type: 'string'}
        ],
        proxy: {
            type: 'localstorage',
            id  : 'seven-habits'

        }

    }
});
