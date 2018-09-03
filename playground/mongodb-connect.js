//MongoDB module V3
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server!!!');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text:'Sample text',
  //   completed: false
  // }, (err, result) => {
  //   if (err){
  //     return console.log('Unable to create ToDo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name:'Sridhar U',
    age: 28,
    location: 'Bengaluru'
  }, (err, result) => {
    if (err){
      return console.log('Unable to create Users', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });


  client.close();
});
