use nbd;
db.people.aggregate([
	{
		$project: {
			sex: 1,
			weight: {
				$toDecimal: "$weight"
			},
			height: {
				$toDecimal: "$height"
			}
		}
	},
	{
		$group: {
			_id: "$sex",
			avgWeight: { $avg: "$weight"},
			avgHeight: { $avg: "$height"}
		}
	}
	])