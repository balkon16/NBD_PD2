use nbd;
DBQuery.shellBatchSize = 10000;
db.people.aggregate([
	{ $project : {
		_id: 0,
		year: {
			$year: {
			$dateFromString: {
				dateString: "$birth_date"
			}
		}
		},
		city: "$location.city",
		"first_name": 1,
		"last_name": 1
	}},
	{
		$match: { year : { $gt: 2000 } }
	},
	{
		$project: { year: 0 }
	}
	]);