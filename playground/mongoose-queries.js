const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mong');
const {Todo} = require('./../server/models/todos');
var id = '5b8d70492e371743bc92ab3f';

 // Todo.find({
 //   _id: id
 // }).then((todos) => {
 //   console.log('Todos: ', todos);
 // });
 //
 // Todo.findOne({
 //   _id: id
 // }).then((todo) => {
 //   console.log('Todo One: ', todo);
 // });


if (!ObjectID.isValid(id)){
  console.log('ID not valid');
}

Todo.findById(id).then((todoid) => {
  if(!todoid){
    return console.log('Did not find that ID');
  }
  console.log('Todo Id: ', todoid);
}).catch((e) => console.log(e));
