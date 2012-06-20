// create the data store
var gridStore = Ext.create('Ext.data.Store', {
    model: 'HdfsFileInfo',
	autoLoad:true,
	autoSync:true		
});