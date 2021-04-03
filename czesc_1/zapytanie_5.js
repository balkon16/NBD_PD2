use nbd;
DBQuery.shellBatchSize = 10000;
var idsList = db.people.aggregate([
	{ 
		$project : {
			weight: {
				$toDecimal: "$weight"
			}
		}
	},
	{
		$match: {
			weight: { $gte: 68, $lt: 71.5 }
		}
	}
]).map(function(d) {
    	return d._id;
  });
db.people.find({_id: {$in: idsList}});