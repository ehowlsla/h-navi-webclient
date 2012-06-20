var NewFolder = function () {
	
	var win = Ext.create('widget.window', {
		height: 100,
		width: 300,
		layout:'hbox',
		x: 450,
		y: 450,
		title: 'Folder Name',
		closable: false,
		plain: true,
		layout: 'fit',
		items: [{
			xtype: 'textfield',
			width: '80%',
			id: 'folderName',
			value: "",
			anchor: '95%'
		}],
		buttons: [{
			text: 'Save'
		}, {
			text: 'Close'
		}]
	});
	
	
	
	return win;	
}
