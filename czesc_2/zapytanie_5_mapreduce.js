var mapFunction = function(){
	if (this.sex == "Female" && this.nationality == "Poland"){
		for (var idx = 0; idx < this.credit.length; idx++){
		var key = this.credit[idx].currency;
		var value = {
			balance: Number(this.credit[idx].balance),
			count: 1
		}
		emit (key, value);
	}
	}
};

var reduceFunction = function(currencyKey, valueObjs){
	reducedVal = {
		balance: 0,
		count: 0
	}

	for (var idx = 0; idx < valueObjs.length; idx++){
		reducedVal.balance += valueObjs[idx].balance;
		reducedVal.count += valueObjs[idx].count;	
	}

	return reducedVal;
};

var finalizeFunction = function(currencyKey, reducedVal){
	reducedVal.avg = reducedVal.balance / reducedVal.count;
	delete reducedVal['count'];
	reducedVal.sum_balance = reducedVal.balance;
	delete reducedVal['balance'];
	return reducedVal
};

use nbd;
db.people.mapReduce(
	mapFunction,
	reduceFunction,
	{
		finalize: finalizeFunction,
		out: { inline: 1 }
	}
	);