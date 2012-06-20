
var CreateContextMenu = function () {
	var context = new Ext.menu.Menu({
	    items: [
		{
	        id: 'refresh',
	        text: '새로고침'
	    },{
        	xtype: 'menuseparator'
    	},{
	        id: 'new',
	        text: '새폴더'
	    }, {
			id: 'rename',
			text: '이름바꾸기'
		}, {
			id: 'delete',
			text: '삭제'
		}, {
			id: 'download',
			text: '다운로드'
		}
		]
	});
	
	return context; 
}

 


