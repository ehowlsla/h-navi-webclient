var treeStore = Ext.create('Ext.data.TreeStore', {
		 root: {
            text: 'HDFS',
            id: '',
			expanded: true
        },
        sorters: [{
            property: 'text',
            direction: 'ASC'
        }]
}); 