var Rename = function (node) {
	
	var winWidth = 300;
	var winheight = 100;
	
	var win = Ext.create('widget.window', {
		height: winheight,
		width: winWidth,
		x: (Ext.getBody().getViewSize().width - winWidth) / 2,
		y: (Ext.getBody().getViewSize().height - winheight) / 2,
		title: 'Folder Name',
		closable: false,
		plain: true,
		layout: 'fit',
		items: [{
			xtype: 'textfield',
			width: '80%',
			id: 'folderRename',
			value: node.get('text'),
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
