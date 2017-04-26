Ext.define('EMF.view.main.TopToolbar', {
    extend: 'Ext.Toolbar',
    xtype: 'top-toolbar',

    items: [
        {
            iconCls: 'x-fa fa-plus',
            tooltip: 'Add New Patient Record' 
        }, {
            text: 'Save',
            iconCls: 'x-fa fa-save',
            tooltip: 'Save Patient Record' 
        }, {
            text: 'Undo',
            iconCls: 'x-fa fa-undo',
            tooltip: 'Reset Patient Record' 
        }
    ]
});
