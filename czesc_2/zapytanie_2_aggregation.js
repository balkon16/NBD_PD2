use nbd;
DBQuery.shellBatchSize = 10000;
db.people.aggregate([
	{
		$unwind: {
			path: "$credit"
		}
	},
	{
		$project: {
			currency: "$credit.currency",
			balance: {
				$toDecimal: "$credit.balance"
			} 
		}
	},
	{
		$group: {
			_id: "$currency",
			sumBalance: { $sum : "$balance"}
		}
	}
	])
