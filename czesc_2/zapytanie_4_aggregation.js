use nbd;
DBQuery.shellBatchSize = 10000;
db.people.aggregate([
	{
		$project: {
			nationality: 1,
			bmi : {
				$divide: [
					{
						$toDecimal: "$weight"
					},
					{
						$pow: [
							{
								$divide: [
									{
										$toDecimal: "$height"
									},
									100
								]
							},
							2
						]
					}
				]
			}
		}
	},
	{
		$group: {
			_id: "$nationality",
			min_bmi: { $min: "$bmi"},
			avg_bmi: { $avg: "$bmi"},
			max_bmi: { $max: "$bmi"}
		}
	}
	])
