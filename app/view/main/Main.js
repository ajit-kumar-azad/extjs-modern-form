/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace the content of this view to suit the needs of your application.
 */
Ext.define('EMF.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',

        'EMF.view.main.MainController',
        'EMF.view.main.MainModel',
        'EMF.view.main.PatientInfo'
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        tab: {
            iconAlign: 'top'
        },
        styleHtmlContent: true
    },

    items: [{
        xtype: 'patient-info',
        padding: '10'
    }, {
        title: 'Medical History',
        html: "This shall capture patient's medical history."
    }, {
        title: 'Visit Notes',
        html: "This shall capture doctor's notes for each patient visit."
    }]
});
