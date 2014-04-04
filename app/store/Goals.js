Ext.define('Seven.store.Goals', {
    extend : 'Ext.data.Store',

    xtype: "goals",

    requires:[
        'Seven.model.Goal',
        'Ext.data.identifier.Uuid'
    ],

    config:{
        model: 'Seven.model.Goal',
        sorters: 'id',

        identifier: 'uuid',
        isUnique: true,
        autoLoad : true

    }
});
