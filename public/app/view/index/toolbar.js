 var CreateToolbar = function () {
	
	var toolbar = Ext.create('Ext.toolbar.Toolbar', {
		height:40,
		width:'100%',
		items:[
		{
			width:10,
			xtype:'tbspacer' 
		},
		{
			xtype:'text',
			text:'클러스터'
		},{
			width:10,
			xtype:'tbspacer' 
		},{
			xtype:'textfield',
			bodyStyle: 'padding-left:10px;padding-right:5px'
		},{
			width:5,
			xtype:'tbspacer' 
		},{
			xtype:'button',
			text:'연결'
		},
		{
			width:10,
			xtype:'tbspacer' 
		},
		{ 
			xtype:'tbseparator'
		},{
			xtype:'button',
			text:'새폴더',
			width:'100',
			iconCls: 'add'
		}, { 
			xtype:'tbseparator'
		},{
			xtype:'button',
			text:'이름바꾸기',
			width:'100',
			iconCls: 'add'
		},{ 
			xtype:'tbseparator'
		},
		{
			xtype:'button',
			text:'업로드',
			width:'100',
			iconCls: 'add'
		},
		{ 
			xtype:'tbseparator'
		},{
			xtype:'button',
			text:'다운로드',
			width:'100',
			iconCls: 'add'	
		}, { 
			xtype:'tbseparator'
		},{
			xtype:'button',
			text:'삭제',
			width:'100',
			iconCls: 'add'
		}, {
			xtype:'tbfill'
		}, {
			xtype:'button',
			text:'help',
			width:'100',
			iconCls: 'add'
			}
		]
	});
	
	return toolbar;	
}
