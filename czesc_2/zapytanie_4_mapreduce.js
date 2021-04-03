var mapFunction = function(){
	var bmi = Number(this.weight) / (Number(this.height) / 100)**2;
	emit(this.nationality, {
		"bmi": bmi, 
		"count": 1, 
		"min_bmi": null,
		"max_bmi": null});
}

var reduceFunction = function(nationalityKey, bmiDictValues){
	reducedVal = {"bmi": 0, 
				"count": 0,
				"min_bmi": Number.POSITIVE_INFINITY, 
				"max_bmi": Number.NEGATIVE_INFINITY};
	for (var idx = 0; idx < bmiDictValues.length; idx++){
		reducedVal.bmi += bmiDictValues[idx].bmi;
		reducedVal.count += bmiDictValues[idx].count;
		reducedVal.min_bmi = Math.min(reducedVal.min_bmi, bmiDictValues[idx].bmi);
		reducedVal.max_bmi = Math.max(reducedVal.max_bmi, bmiDictValues[idx].bmi);
	}

	return reducedVal;
}

var finalizeFunction = function (nationalityKey, reducedVal) {
  reducedVal.avg_bmi = reducedVal.bmi/reducedVal.count;
  delete reducedVal['count'];
  delete reducedVal['bmi'];
  return reducedVal;
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