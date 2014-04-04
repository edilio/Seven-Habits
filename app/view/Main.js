Ext.define("Seven.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar'
    ],

    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',
                cls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to 7 Habits'
                },

                html: [
                    '<div style="',
                    'text-align: center;">',
                    '<img align="middle" height=260 src="resources/images/sevenmain.jpg" />',
                    '<p></p>',
                    '<h1>Welcome to 7 Habits of Highly Effective People</h1>',
                    '<p>We have created an app so you review a summary of the seven habits (Steven Covey) any time you like.</p>',
                    '<p>We provided a section so you can enter/review your goal frequently and ask yourself if your acting according to your goal.</p>',
                    '<p>We hope you enjoy it.</p>',
                    '<p>It is just a tribute to this incredible man.</p>',
                    '</div>'
                ].join("")
            },
            {
                xtype:'habits-view'
            },
            {
                xtype:'goal-view'
            },
            {
                xtype:'amazon'
            },
            {
                xtype: 'contact-us'
            },
            {
                xtype: 'tell-a-friend'
            }

        ]
    }
});
