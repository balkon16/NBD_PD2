use nbd;
var idsList = db.people.aggregate([
	{
		$project: {
			height: {
				$toDecimal: "$height"
			}
		}
	},
	{
		$match: {
			height: { $gt: 190 }
		}
	}
	]).map(function(d) {
    	return d._id;
  });
db.people.remove({ _id: { $in: idsList } });