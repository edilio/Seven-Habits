Ext.define("Seven.view.GoalView", {
    extend: 'Ext.form.FormPanel',

    xtype:"goal-view",

    requires:[
        'Ext.form.FieldSet',
        'Ext.field.Text',
        'Ext.TitleBar'

    ],

    config: {
        title: 'Goal',
        iconCls: 'compose',

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Your personal goal'
            },
            {
                xtype:'fieldset',
                instructions: "Save your personal goal so you can see it later",

                items:[
                    {
                        xtype: 'textareafield',
                        name: 'goal',
                        label: 'Goal',
                        labelWidth: '20',
                        placeholder:'personal goal'
                    }
                ]
            },
            {
                xtype: 'button',
                ui: 'confirm',
                iconCls: 'action',
                text:'Save',
                handler: function() {
                    var form = this.up('goal-view'),
                        goal = form.getValues().goal,
                        store = Ext.create('Seven.store.Goals');

                    store.load();
                    if (store.data.length > 0){
                        store.doRemoveAll();
                        store.sync();
                    }

                    store.add({ goal:goal});
                    store.sync();
                }


            }
        ],
        listeners:{
            activate: function( container, newActiveItem, oldActiveItem, eOpts ){
                var store = Ext.create('Seven.store.Goals'),
                    rec;
                store.load();
                if (store.data.length > 0){
                    rec = store.data.all[0];
                    this.setRecord(rec);
                }
            }
        }
    }

});
