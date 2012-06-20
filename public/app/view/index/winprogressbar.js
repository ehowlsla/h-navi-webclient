var ProgressBar = function () {
	
	var pgb = Ext.create('Ext.ProgressBar', {
        text:'Waiting on you...',
        id:'pbar', 
    });
	
	
	var win = Ext.create('widget.window', {
		height: 50,
		width: 300,
		layout:'hbox',
		x: 450,
		y: 450,
		title: 'Downloading..',
		closable: false,
		plain: true,
		layout: 'fit',
		items: [pgb]
	});
	
	
	
	return win;	
}
