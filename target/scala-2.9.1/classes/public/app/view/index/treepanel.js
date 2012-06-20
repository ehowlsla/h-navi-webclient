 var CreateTreePanel = function () {
	   var treePanel = Ext.create('Ext.tree.Panel', {
        id: 'tree-panel',
		collapsible:true,
        title: 'HDFS Directories',
        region:'west',
        minSize: 150, 
        width: 275,
		margins: '0 5 5 5',
        minSize: 100,
        maxSize: 500,
		height: '100%',
        store: treeStore
    });	
	
	return treePanel;
}
