var mapFunction = function(){
	for (var idx = 0; idx < this.credit.length; idx++){
		var key = this.credit[idx].currency;
		var value = Number(this.credit[idx].balance);
		emit (key, value);
	}
}

var reduceFunction = function(keyCurrency, values) {
   return Array.sum(values);
}

use nbd;
db.people.mapReduce(
	mapFunction,
	reduceFunction,
	{
		out: { inline: 1}
	}
	);