/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

//alert("before launching app");
//Ext.Loader.setConfig({
//    enabled: true,
//    disableCaching: false
//
//});

Ext.Loader.setPath({
    'Ext': 'touch/src',
    'Seven': 'app'
});


Ext.application({
    name: 'Seven',

    requires: [
        'Ext.MessageBox',
        'Ext.data.Model',
        'Ext.data.Store',
        'Ext.data.proxy.Ajax',
        'Ext.form.FormPanel',
        'Seven.model.Habit',
        'Seven.store.Habits',
        'Seven.view.HabitList',
        'Seven.view.HabitsView',
        'Seven.store.Goals',
        'Seven.model.Goal',
        'Seven.view.Amazon',
        'Ext.device.Communicator',
        'Ext.device.Device'
    ],

    models:[
        'Goal',
        'Habit'
    ],

    stores: [
        'Goals',
        'Habits'
    ],

    views: [
        'ContactUs',
        'GoalView',
        'HabitList',
        'HabitsView',
        'TellAFriend',
        'Amazon',
        'Main'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },



    launchUrl: function (url){
        var sev = {
            teen : "http://www.amazon.com/dp/0684856093/ref=as_li_qf_sp_asin_til?tag=noprobreza-20&camp=14573&creative=327641&linkCode=as1&creativeASIN=0684856093&adid=1E794GB8REWW5RC0ZEXS&&ref-refURL=http%3A%2F%2F10.0.0.3%2Fsevenhabits%2F",
            general : "http://www.amazon.com/dp/0743269519/ref=as_li_qf_sp_asin_til?tag=noprobreza-20&camp=14573&creative=327641&linkCode=as1&creativeASIN=0743269519&adid=0KWC1J9Y5H2G9SB4VHC7&&ref-refURL=http%3A%2F%2Frcm.amazon.com%2Fe%2Fcm%3Ft%3Dnoprobreza-20%26o%3D1%26p%3D8%26l%3Das1%26asins%3D0743269519%26ref%3Dqf_sp_asin_til%26fc1%3D000000%26IS2%3D1%26lt1%3D_blank%26m%3Damazon%26lc1%3D0000FF%26bc1%3D000000%26bg1%3DFFFFFF%26f%3Difr",
            kids : "http://www.amazon.com/dp/1416957766/ref=as_li_qf_sp_asin_til?tag=noprobreza-20&camp=14573&creative=327641&linkCode=as1&creativeASIN=1416957766&adid=1CTR5DEMCNHA6KMCG1F9&&ref-refURL=http%3A%2F%2Flocalhost%2Fsevenhabits%2F",
            eight : "http://www.amazon.com/dp/0743287932/ref=as_li_qf_sp_asin_til?tag=noprobreza-20&camp=14573&creative=327641&linkCode=as1&creativeASIN=0743287932&adid=0X3B0Z1TSAYAPJW35KFP&&ref-refURL=http%3A%2F%2Flocalhost%2Fsevenhabits%2F"
        };

        url = sev[url];

        //Ext.device.Device.openURL(url);
        var ref = window.open(url, '_blank', 'location=yes');
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('Seven.view.Main'));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
