Ext.onReady(function() {
	
	var width = Ext.getBody().getViewSize().width;
    var height = Ext.getBody().getViewSize().height;
		
		
    var form = Ext.createWidget('form', {
        renderTo: Ext.getBody(),
        title: 'Connect to rest server & hadoop namenode',
        bodyPadding: 5,
        frame: true,
        width: '50%',
		x : width/4,
		y : height/4,
        fieldDefaults: {
            labelAlign: 'left',
            labelWidth: 250, 
			anchor:'100%'
        },
        items: [
					{
						id:'restHost',
			            xtype: 'textfield',
			            fieldLabel: 'Rest Server URL <br>(ex. "http://www.rest.com:8080")'
			        },
					{
						id:'hdfsHost',
						width:450,
			            xtype: 'textfield',
			            fieldLabel: 'HDFS Namenode URL <br>(ex. "hdfs://www.namenode.com:9000")'
			        },
		],
		buttons: [{
            text: 'Connect',
            handler: function(){
				render('5');
				//window.location = '/index?restHost=' + form.items.get(0).value + "&hdfsHost=" + form.items(1).value;  
            }
        }]
    });
});
