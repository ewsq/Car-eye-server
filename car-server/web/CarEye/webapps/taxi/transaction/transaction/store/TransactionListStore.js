Ext.define("TransactionApp.store.TransactionListStore",{
	extend:"Ext.data.Store",
	autoLoad: { start: 0, limit: 30 },
	autoLoad: true,
	model:"TransactionApp.model.TransactionModel",
	pageSize: 30,
	proxy: {
		type: 'ajax',
		url: window.BIZCTX_PATH + '/transaction/transactionjson/queryTransactionList.action?calltype=1',  //请求的服务器地址
		reader: {
			type: 'json',
			root: 'result.list',
			totalProperty: 'result.totalCount'
		}
	}
 });