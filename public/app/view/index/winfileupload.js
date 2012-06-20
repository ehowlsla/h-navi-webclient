var FileUpload = function () {
	
	var win = Ext.create('widget.window', {

		width: 500,
		height:150,
		x: 450,
		y: 450,
		bodyPadding:'10 10 10 10',
		title: 'Upload File Path',
		items: [{
			xtype:'form',
			layout:'vbox',
			items:[ {
            xtype: 'filefield',
            labelWidth: 100,
			width:450,
			//anchor: '100%',
            id: 'form-file',
            emptyText: 'Select a file',
            fieldLabel: 'File',
            name: 'file-path',
            buttonText: 'open' 
        },  {
			id:'path',
			labelWidth: 100,
			width:450,
            xtype: 'textfield',
            fieldLabel: 'HDFS File Name'
        },],
		buttons: [{
            text: 'Save'
        },{
            text: 'Close'
        }]
			}]
	});
	
	return win;	
}
