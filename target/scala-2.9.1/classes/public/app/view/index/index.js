Ext.require([
    'Ext.tree.*',
    'Ext.data.*',
    'Ext.tip.*',
	'Ext.util.*'
]);


	

	
var toolbar; 
	
var treePanel = CreateTreePanel(); 	

var grid = CreateGridPanel();
	
var cxmenu = CreateContextMenu();


 Ext.onReady(function(){
 	Ext.QuickTips.init();
	
	toolbar = CreateToolbar();
	
	//tree = CreateTreePanel();
	
	//grid = CreateGridPanel();
	
	//cxmenu = CreateContextMenu();
	
	// This is the Details panel that contains the description for each example layout.
    var detailsPanel = {
        id: 'details-panel',
        title: 'Details',
        region: 'east', 
		margins: '0 5 5 5',
		collapsible:true,
		minWidth:200,
        bodyStyle: 'padding-bottom:15px;padding-right:10px;background:#eee;',
        autoScroll: true,
        html: '선택된 파일의 미리보기가 나타납니다.'
    };	
 
	
	 
 
    // Finally, build the main layout once all the pieces are ready.  This is also a good
    // example of putting together a full-screen BorderLayout within a Viewport.
    Ext.create('Ext.Viewport', {
        layout: 'border',
        title: 'Ext Layout Browser',
		
        items: [{
           
            id: 'header',
            region: 'north',
            height: 40,
			items:toolbar
		  },
		  treePanel,
		  grid,
		  detailsPanel,
		  {
			id : 'dirInfo',
			region: 'south',
            height: 30, // give north and south regions a height
            bodyStyle: 'padding-bottom:15px;background:#dfe8f6;',
            html:'<div style="padding:5px;text-align:right">Copyrightⓒ2012 h-navi All rights reserved.<div>'  
		   } 
        ],
        renderTo: Ext.getBody()
    });
});
 