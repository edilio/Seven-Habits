Ext.define("Seven.view.HabitsView", {
    extend: 'Ext.navigation.View',

    xtype:"habits-view",

    requires:[
        'Ext.dataview.List',
        'Seven.view.HabitList'
    ],

    config: {
        title: '7 Habits',
        iconCls: 'compose',


        navigationBar: {
            ui: 'sencha',
            items: [
                {
                    xtype: 'button',
                    id: 'editButton',
                    text: 'Edit',
                    align: 'right',
                    hidden: true
                },
                {
                    xtype: 'button',
                    id: 'saveButton',
                    text: 'Save',
                    ui: 'sencha',
                    align: 'right',
                    hidden: true
                }
            ]
        },
        items: [
            { xtype: 'habit-list' }
        ]
    },

    applyLayout: function(config) {
        config = config || {};

        if (Ext.os.is.Android) {
            config.animation = false;
        }

        return config;
    }

});
