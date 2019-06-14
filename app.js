Ext.onReady(function () {
    var component1 = Ext.create('Ext.Component', {
        html: 'First Component'
    });

    var header = Ext.create('Ext.container.Container', {
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        style: { borderStyle: 'solid', borderWidth: '1px' },
        items: [{
            title: 'Panel 1',
            html: 'Panel with flex 1',
            margin: '0 0 10 0',
            flex: 1
        }, {
            title: 'Panel 2',
            html: 'Panel with flex 2',
            margin: '0 0 10 0',
            flex: 2
        }, {
            title: 'Panel 3',
            flex: 2,
            margin: '0 0 10 0',
            html: 'Panel with flex 2'
        }, {
            title: 'Panel 4',
            html: 'Panel with flex 1',
            margin: '0 0 10 0',
            flex: 1
        }]
    });
    var body = Ext.create('Ext.container.Container', {
        style: { borderStyle: 'solid', borderWidth: '1px' },
        html: "body"
    });
    var footer = Ext.create('Ext.container.Container', {
        style: { borderStyle: 'solid', borderWidth: '1px' },
        html: "footer"
    });
    Ext.create('Ext.container.Container', {
        renderTo: Ext.getBody(),
        title: 'Application',
        width: '100%',
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: [header, body, footer]
    });
});