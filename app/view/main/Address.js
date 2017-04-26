Ext.define('EMF.view.main.Address', {
    extend: 'Ext.field.Container',
    xtype: 'address',

    config: {
        phoneLbl: 'Phone'        
    },

    layout: 'vbox',

    initConfig: function(instanceConfig) {

        // console.log('this: ', this, instanceConfig);

        instanceConfig.items = [
            {
                xtype: 'textfield',
                width: '300',
                name: 'phone',
                label: this.initialConfig.phoneLbl
            },
            {
                xtype: 'textfield',
                name: 'addressLine1',
                label: 'Address Line 1'
            },
            {
                xtype: 'textfield',
                name: 'addressLine2',
                label: 'Address Line 2'
            },
            {
                xtype: 'containerfield',
                layout: 'hbox',
                items: [
                    {
                        xtype: 'numberfield',
                        label: 'ZIP',
                        // flex: 1,
                        width: 200,
                        name: 'zipcode'

                    },
                    {
                        xtype: 'textfield',
                        label: 'City',
                        // flex: 1,
                        labelWidth: 60,
                        width: 200,
                        name: 'city'

                    },
                    {
                        xtype: 'textfield',
                        label: 'State',
                        flex: 1,
                        labelWidth: 60,
                        // width: 200,
                        name: 'state'

                    }
                ]
            }
        ];

        this.callParent([instanceConfig]);

    }

    
});
