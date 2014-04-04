Ext.define("Seven.view.Amazon", {
    extend: 'Ext.Container',

    xtype: 'amazon',

    requires: [
        'Ext.TitleBar',
        'Ext.Container'
    ],

    config: {
        title: 'Covey',
        iconCls: 'maps',
        cls: 'home',
        styleHtmlContent: true,
        scrollable: true,

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Learn from the Master'
            }
        ],
        html: [
            '<div style="text-align: center;">',
            '<h2>You can buy the whole collection from Amazon</h2>',
            '<img src="resources/images/sevengeneral.jpg" onclick="Seven.app.launchUrl(' + "'general');" +'"></img>',
            '<img src="resources/images/seventeen.jpg" onclick="Seven.app.launchUrl(' + "'teen');" +'"></img>',
            '<img src="resources/images/sevenkids.jpg" onclick="Seven.app.launchUrl(' + "'kids');" + '"></img>',
            '<img src="resources/images/eighthabit.jpg" onclick="Seven.app.launchUrl(' + "'eight');" +'"></img>',
            '</div>',
            '<div style="margin-top: 10px"></div>'

        ].join("")

    }
});

