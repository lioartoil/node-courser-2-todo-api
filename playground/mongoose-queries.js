const { ObjectID } = require('mongodb');

const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('./../server/models/user');

// const id = '5c10abd5f3ba6215c0e1b0c';

// if (!ObjectID.isValid(id)) {
// 	console.log('ID not valid');
// }

// Todo.find({ _id: id }).then(todos => console.log('Todos', todos));

// Todo.findOne({ _id: id }).then(todo => console.log('Todo', todo));

// Todo.findById(id)
// 	.then(todo => console.log('Todo By id', todo))
// 	.catch(e => console.log(e));

User.findById('5c109406eca7990ef30767e2').then(
	user => {
		if (!user) {
			return console.log('Unable to find user');
		}
		console.log(JSON.stringify(user, undefined, 2));
	},
	e => console.log(e)
);
