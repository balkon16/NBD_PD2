var mapFunction = function(){
  emit(this.sex, 
  	{
  		height: {count: 1, value: Number(this.height)}, 
  		weight: {count: 1, value: Number(this.weight)}
  	}
  	);
}

var reduceFunction = function(keySex, countObjVals){
	reducedVal = {
  		"height": {"count": 0, "value": 0}, 
  		"weight": {"count": 0, "value": 0}
  	}

  	for (var idx = 0; idx < countObjVals.length; idx++) {
       reducedVal.height.count += countObjVals[idx].height.count;
       reducedVal.height.value += countObjVals[idx].height.value;
       reducedVal.weight.count += countObjVals[idx].weight.count;
       reducedVal.weight.value += countObjVals[idx].weight.value;
   }

   return reducedVal;
};

var finalizeFunction = function (keySex, reducedVal) {
  reducedVal.height.avg = reducedVal.height.value/reducedVal.height.count;
  reducedVal.weight.avg = reducedVal.weight.value/reducedVal.weight.count;
  delete reducedVal.height.value;
  delete reducedVal.height.count;
  delete reducedVal.weight.value;
  delete reducedVal.weight.count;
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