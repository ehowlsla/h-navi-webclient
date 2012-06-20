 function render(val) {
    return new Date(val * 1000);
}

var CreateGridPanel = function () {
	
	 // create the Grid
    var grid = Ext.create('Ext.grid.Panel', {
		store:gridStore,
		id:'grid',
        stateful: true,
        multiSelect: true,
		forceFit:true, 
		margins: '0 0 5 0',
        stateId: 'stateGrid',
        columns: [
            {
                text     : 'Name',  
                sortable : true,
                dataIndex: 'name'
            }, {
                text     : 'Size',  
                sortable : true,
                dataIndex: 'size'
            }, {
                text     : 'User',   
                sortable : true,
                dataIndex: 'owner'
            }, {
                text     : 'Group',   
                sortable : true,
                dataIndex: 'ownergroup'
            }, {
                text     : 'Replication', 
                sortable : true,
                dataIndex: 'replica'
            }, {
                text     : 'LastModified', 
                sortable : true,
				renderer:render,
                dataIndex: 'lastmodified'
            }, {
                text     : 'LastAccess',   
                sortable : true,
				renderer:render,
                dataIndex: 'lastaccess'
            }, {
                text     : 'Acess',   
                sortable : true,
                dataIndex: 'access'
            }
        ],
        height: 350,
        width: 600,
		region:'center',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
        }
    });
	
	return grid;	
}
