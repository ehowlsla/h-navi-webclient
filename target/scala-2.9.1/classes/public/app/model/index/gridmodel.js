Ext.define('gridmodel', {
	    extend: 'Ext.data.Model',
	    fields: [
	       'name',
	       {name: 'size',      type: 'int', convert: null,     defaultValue: undefined},
		   {name: 'type',      type: 'int', convert: null,     defaultValue: undefined},
		   {name: 'lastmodified',      type: 'int',	convert:null, defaultValue: undefined},
		   {name: 'lastaccess',      type: 'int', convert: null,     defaultValue: undefined},
		   'access',
		   'owner',
		   'ownergroup',
		   'replica'  
	    ],
	    idProperty: 'gridmodel'
});