var mongoose = require('mongoose');

//mongoose supports callbacks by default.
//Tell Mongoose which promise library to use.
//Use built-in promise library
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');


module.exports = { mongoose };
