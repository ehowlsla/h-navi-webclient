 Ext.onReady(function(){
	 
	var selnode;   //트리에서 선택된 노드 
	var selnodeID; //트리에서 선택된 노드의 ID & 그리드에서 선택된 노드의 ID

    var restHost = getParameterByName("restHost");
	var hdfsHost = getParameterByName("hdfsHost");
	
	//하둡 클러스터 주소 초기화 
	toolbar.items.get(3).setValue(hdfsHost);

   // var grid = Ext.getCmp('grid');
	grid.on('itemclick', function(view,rec,item,index,eventObj) {
		selnodeID = rec.get('name');
		//alert(selnodeID);
		gridFileClick(toolbar, cxmenu);
		Ext.Ajax.request({
					method: 'GET',
					url: '/contents/' + rec.get('name') + "?host=" + toolbar.items.get(3).value,
					success: function ( result, request ) {
                      	var jsonData = Ext.decode(result.responseText);
					  	Ext.getCmp('details-panel').update(jsonData.result);
               		},failure: function ( result, request ) {
                    
				  	}
				});
		
	});

	//컨텍스트메뉴 이벤트 추가 
	cxmenu.on('click', function(menu, item, e){
		switch (item.id) {
			case 'refresh':
				treePanel.getStore().load();
				//grid.getStore().load();
				break;
			case 'new':
				var win = NewFolder();
				win.show(true);
				break;
			case 'rename':
				var win = Rename();
				win.show(true);
				break;
			case 'delete':
				Ext.Ajax.request({
					method: 'DELETE',
					url: '/repo/' + selnodeID + "?host=" + toolbar.items.get(3).value,
				});
				if(selnodeID.eval(selnode.get('id')))
					selnode.remove();
				break;
			case 'download': 
				var pgb = ProgressBar();
				pgb.show();
				
				Ext.getCmp('pbar').wait({
		            interval: 200,
		            increment: 15,
		            fn:function() {
		            }
		        });
			
				Ext.Ajax.request({
						method:'GET',
				        //url:'http://localhost:8080/repo/file/' + selnodeID,
						url:'/repo/file/' + selnodeID + "?host=" + toolbar.items.get(3).value,
						success: function ( result, request ) {
                        pgb.close();
               		}
				}); 
				break;
		}
	});
	  
	

	//트리패널 이벤트 추가 
	treePanel.on('itemclick', function(view, rec, item, index, eventObj){
		selnode = rec;
		selnodeID = selnode.get('id');
		
		if (!selnode.get('leaf')) {
			treeFolderClick(toolbar, cxmenu);
		}
		else {
			treeFileClick(toolbar, cxmenu);
			Ext.Ajax.request({
					method: 'GET',
					//url: 'http://localhost:8080/contents/' + selnodeID,
					url: '/contents/' + selnodeID + "?host=" + toolbar.items.get(3).value,
					success: function ( result, request ) {
                      	var jsonData = Ext.decode(result.responseText);
						if(jsonData.result.length > 0)
					  		Ext.getCmp('details-panel').update(jsonData.result);
               		},failure: function ( result, request ) {
                    
				  	}
				});
		}
	
		grid.getStore().proxy.extraParams = {node:selnodeID};
     	grid.getStore().load();
			
	}); 
	
	//트리패널 이벤트 추가 
	treePanel.on('itemcontextmenu', function(view, rec, node, index, e){
		selnode = rec;
		e.stopEvent(); 
		
		cxmenu.showAt(e.getXY());
			
        return false;
	});
	
	
	//트리패널 이벤트 추가 
	treePanel.on('itemexpand', function(node){
		selnode = node;
		selnodeID = selnode.get('id');
		
		if (!selnode.get('leaf')) {
			treeFolderClick(toolbar, cxmenu);
		}
		else {
			treeFileClick(toolbar, cxmenu);
			Ext.Ajax.request({
					method: 'GET',
					//url: 'http://localhost:8080/contents/' + selnodeID,
					url: '/contents/' + selnodeID + "?host=" + toolbar.items.get(3).value,
					success: function ( result, request ) {
                      	var jsonData = Ext.decode(result.responseText);
					  	Ext.getCmp('details-panel').update(jsonData.result);
               		},failure: function ( result, request ) {
                    
				  	}
				});
		}
		

		
			
		grid.getStore().proxy.extraParams = {node:selnodeID};
     	grid.getStore().load();
			
	});
	

	
	
	//툴바 - '연결' 버튼  
	toolbar.items.get(5).handler = function() {
		//alert('1');
		alert(toolbar.items.get(3).value);
	}
	
	//툴바 - '새폴더' 버튼  
	toolbar.items.get(8).handler = function() {
				var win = NewFolder();
				win.show(true);
	}
	
	//툴바 - '이름바꾸기' 버튼  
	toolbar.items.get(10).handler = function() {
    			var win = Rename();
				win.show(true);   
	}
	
	//툴바 - '업로드' 버튼  
	toolbar.items.get(12).handler = function() {
				var win = FileUpload();
				win.show(true);
	}
	
	//툴바 - '다운로드' 버튼  
	toolbar.items.get(14).handler = function() {
				Ext.Ajax.request({
					method:'GET',
					url:'/repo/file/' + selnodeID + "?host=" + toolbar.items.get(3).value,
				});   
	}
	
	//툴바 - '삭제' 버튼  
	toolbar.items.get(16).handler = function() {
 				Ext.Ajax.request({
						method:'DELETE',
				        //url:'http://localhost:8080/repo/' + selnodeID,
						url:'/repo/' + selnodeID + "?host=" + toolbar.items.get(3).value,
				    });
				if(selnodeID.eval(selnode.get('id')))
					selnode.remove();   
	}
	
	//툴바 - 'help' 버튼  
	toolbar.items.get(18).handler = function() {
		alert('준비중입니당');
	}
  
	//default Status
	nothingClick(toolbar);
});

function nothingClick(toolbar) {
	//alert('1');
	
	toolbar.items.get(8).disable(); //새폴더 
	toolbar.items.get(10).disable(); //이름바꾸기 
	toolbar.items.get(12).disable(); //업로드 
	toolbar.items.get(16).disable(); //다운로드 
	toolbar.items.get(14).disable(); //삭제 
	//alert('12');
}

function treeFolderClick(toolbar, contextmenu) {
    toolbar.items.get(8).enable(); //새폴더 
	toolbar.items.get(10).enable(); //이름바꾸기 
	toolbar.items.get(12).enable(); //업로드 
	toolbar.items.get(16).disable(); //다운로드 
	toolbar.items.get(14).enable(); //삭제 
	
	contextmenu.items.get(2).enable();
	contextmenu.items.get(5).disable();
}

function treeFileClick(toolbar, contextmenu) {
	toolbar.items.get(8).disable(); //새폴더 
	toolbar.items.get(10).enable(); //이름바꾸기 
	toolbar.items.get(12).disable(); //업로드 
	toolbar.items.get(16).enable(); //다운로드 
	toolbar.items.get(14).enable(); //삭제 
	
	contextmenu.items.get(2).disable();
	contextmenu.items.get(5).enable();
}

function gridFileClick(toolbar, contextmenu) {
	toolbar.items.get(8).disable(); //새폴더 
	toolbar.items.get(10).disable(); //이름바꾸기 
	toolbar.items.get(12).disable(); //업로드 
	toolbar.items.get(16).enable(); //다운로드 
	toolbar.items.get(14).enable(); //삭제 
}

function getParameterByName(name)
{
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	var regexS = "[\\?&]" + name + "=([^&#]*)";
	var regex = new RegExp(regexS);
	var results = regex.exec(window.location.search);
	if(results == null)
	  return "";
	else
	  return decodeURIComponent(results[1].replace(/\+/g, " "));
}