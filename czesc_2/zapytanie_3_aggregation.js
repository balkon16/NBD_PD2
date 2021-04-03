use nbd;
db.people.aggregate([{$group: {_id: null, uniqueJobs: {$addToSet: "$job"}}}])