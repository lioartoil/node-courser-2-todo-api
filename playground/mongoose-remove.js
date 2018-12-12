const { ObjectID } = require('mongodb');

const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

// Todo.deleteMany({}).then(result => console.log(result));

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndDelete({ _id: '5c10daccf7c0f120e26d6b41' }).then(todo => {});

Todo.findByIdAndDelete('5c10daccf7c0f120e26d6b41').then(todo =>
	console.log(todo)
);
