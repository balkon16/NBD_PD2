var mapFunction = function(){
	emit(this.job, this.job)
}

var reduceFunction = function(keyJob, valuesJob){
	reducedValue = valuesJob[0];
	return reducedValue;
}

use nbd;
db.people.mapReduce(
	mapFunction,
	reduceFunction,
	{
		out: { inline: 1}
	}

	)