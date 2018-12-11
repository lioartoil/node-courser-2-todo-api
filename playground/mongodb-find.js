const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(
	'mongodb://localhost:27017/TodoApp',
	{ useNewUrlParser: true },
	(err, client) => {
		if (err) {
			return console.log('Unable to connect to MongoDB server');
		}
		console.log('Connected to MongoDB server');
		const db = client.db('TodoApp');

		// db.collection('Todos')
		// 	.find({ _id: new ObjectID('5c0fa14c677b5af69b7e12f2') })
		// 	.toArray()
		// 	.then(
		// 		docs => {
		// 			console.log('Todos');
		// 			console.log(JSON.stringify(docs, undefined, 2));
		// 		},
		// 		err => console.log('Unable to fetch todos', err)
		// 	);

		// db.collection('Todos')
		// 	.find()
		// 	.count()
		// 	.then(
		// 		counts => {
		// 			console.log(`Todos counts: ${counts}`);
		// 		},
		// 		err => console.log('Unable to fetch todos', err)
		// 	);

		db.collection('Users')
			.find({ name: 'Chanakan' })
			.toArray()
			.then(
				docs => {
					console.log(`Users`);
					console.log(JSON.stringify(docs, undefined, 2));
				},
				err => console.log('Unable to fetch users', err)
			);

		db.collection('Users')
			.find({ name: 'Chanakan' })
			.count()
			.then(
				counts => console.log(`Users counts: ${counts}`),
				err => console.log('Unable to fetch users', err)
			);

		// client.close();
	}
);
