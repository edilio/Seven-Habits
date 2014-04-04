Ext.define('Seven.view.HabitList', {
    extend: 'Ext.List',
    xtype: 'habit-list',
    require:[
        'Seven.model.Habit',
        'Seven.store.Habits'
    ],


    config: {
        title: '7 Habits',
        cls: 'home',
        styleHtmlContent: true,

        store: 'Habits',
        itemTpl: '<strong>{id} - {name}</strong>',
        listeners : {
            itemtap: function(list, index, node, record) {
                var view = this.up('habits-view');
                view.push({
                    cls:'home',
                    title: record.get('name'),
                    styleHtmlContent: true,
                    scrollable: true,
                    html: record.get('desc')
                });
            }
        }
    }

});
