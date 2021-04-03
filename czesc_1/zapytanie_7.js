use nbd;
db.people.insert({
	sex: "Male",
	first_name: "Paweł",
	last_name: "Lonca",
	job: "Student",
	email: "pawel.k.lonca@gmail.com",
	location: {
		city: "Warsaw",
		address: {
			streetname: "Jana Kazimierza",
			streetnumber: "5"
		}
	},
	description: "test description",
	height: "171.21",
	weight: "75.13",
	birth_date: "2000-01-01T00:00:00Z",
	nationality: "Poland",
	credit: [
		{
			type: "pko",
			number: "123456",
			currency: "BTC",
			balance: "12345.6"
		}
	]
})