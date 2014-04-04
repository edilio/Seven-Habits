Ext.define('Seven.model.Habit', {
    extend: 'Ext.data.Model',
    requires:[
        'Ext.data.Store'
    ],
    config: {
        fields: ['id', 'name', 'desc']


    }
});
