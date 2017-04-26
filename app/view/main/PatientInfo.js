Ext.define('EMF.form.Field', {

    override: 'Ext.field.Field',

    config: {
        labelTextAlign: 'right',
        labelWrap: true
    }
});


Ext.define('EMF.view.main.PatientInfo', {
    extend: 'Ext.form.Panel',
    xtype: 'patient-info',

    title: 'Patient Information',
    items: [
        {
            xtype : 'top-toolbar',
            docked: 'top'
        },
        {
            xtype: 'containerfield',
            layout: 'hbox',
            label: 'Name',
            items: [
                {
                    xtype: 'textfield',
                    width: '200',
                    name: 'firstName',
                    label: 'First',
                    labelAlign: 'top',
                    labelTextAlign: 'left',
                },
                {
                    xtype: 'textfield',
                    width: '80',
                    name: 'middleName',
                    label: 'Middle',
                    labelAlign: 'top',
                    labelTextAlign: 'left',
                },
                {
                    xtype: 'textfield',
                    width: '200',
                    name: 'lastName',
                    label: 'Last',
                    labelAlign: 'top',
                    labelTextAlign: 'left',
                }
            ]
        },
        {
            xtype: 'containerfield',
            layout: 'hbox',
            items: [
                {
                    xtype: 'textfield',
                    name: 'ssn',
                    label: 'SSN',
                    width: 300
                },
                {
                    xtype: 'component',
                    flex: 1
                }, 
                {
                    xtype: 'textfield',
                    name: 'employer',
                    label: 'Employer',
                    flex: 1
                }
            ]
            
        },
        {
            xtype: 'containerfield',
            layout: 'hbox',
            items: [
                {
                    xtype: 'containerfield',
                    width: 300,
                    layout: 'vbox',
                    items: [
                        {
                            xtype: 'datefield',
                            name: 'dob',
                            label: 'DOB'
                        },
                        {
                            xtype: 'numberfield',
                            name: 'age',
                            label: 'Age'
                        },
                        {
                            xtype: 'combobox',
                            name: 'gender',
                            label: 'Gender'
                        },
                        {
                            xtype: 'combobox',
                            name: 'maritalstatus',
                            label: 'Marital Status'
                        }
                    ]
                },
                {
                    xtype: 'address',
                    phoneLbl: 'Home Phone',
                    flex: 1
                },
                {
                    xtype: 'address',
                    phoneLbl: 'Work Phone',
                    flex: 1
                }
            ]
        },
        {
            xtype: 'containerfield',
            layout: 'hbox',
            items: [
                {
                    xtype: 'textfield',
                    name: 'dl',
                    label: 'DL #',
                    width: 300
                },
                {
                    xtype: 'textfield',
                    name: 'refdoctor',
                    label: 'Referring Doctor',
                    labelWidth: 210,
                    flex: 1
                },
                {
                    xtype: 'component',
                    flex: 1
                }
            ]
        },
        {
            xtype: 'tabpanel',
            height: 400,
            margin: '10',
            padding: '10 0 0 0',
            items: [{
                title: 'Responsible Party/Spouse',
                xtype: 'formpanel',
                items: [
                    {
                        xtype: 'combobox',
                        name: 'relationshipToPatient',
                        label: 'Relationship to Patient',
                        labelWidth: 200,
                        width: 400
                    },
                    {
                        xtype: 'containerfield',
                        layout: 'hbox',
                        label: 'Name',
                        items: [
                            {
                                xtype: 'textfield',
                                width: '200',
                                name: 'firstName',
                                label: 'First',
                                labelAlign: 'top',
                                labelTextAlign: 'left',
                            },
                            {
                                xtype: 'textfield',
                                width: '80',
                                name: 'middleName',
                                label: 'Middle',
                                labelAlign: 'top',
                                labelTextAlign: 'left',
                            },
                            {
                                xtype: 'textfield',
                                width: '200',
                                name: 'lastName',
                                label: 'Last',
                                labelAlign: 'top',
                                labelTextAlign: 'left',
                            }
                        ]
                    },
                    {
                        xtype: 'containerfield',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'containerfield',
                                width: 300,
                                layout: 'vbox',
                                items: [
                                    {
                                        xtype: 'datefield',
                                        name: 'dob',
                                        label: 'DOB'
                                    },
                                    {
                                        xtype: 'combobox',
                                        name: 'gender',
                                        label: 'Gender'
                                    },
                                    {
                                        xtype: 'textfield',
                                        name: 'ssn',
                                        label: 'SSN',
                                        width: 300
                                    },
                                    {
                                        xtype: 'textfield',
                                        name: 'dl',
                                        label: 'DL #'
                                    }
                                ]
                            },
                            {
                                xtype: 'address',
                                phoneLbl: 'Home Phone',
                                flex: 1
                            },
                            {
                                xtype: 'address',
                                phoneLbl: 'Work Phone',
                                flex: 1
                            }
                        ]
                    }
                ]
                
            }, {
                title: 'Primary Insurance',
                html: "This shall capture patient's primary insurance detail."
            }, {
                title: 'Secondary Insurance',
                html: "This shall capture patient's secondary insurance detail."
            }]
        }        
    ]
});
