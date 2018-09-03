//MongoDB module V3
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server!!!');
  const db = client.db('TodoApp');

  //toArray returns a promise
  //fetch all documents
  // db.collection('Todos').find().toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  //
  // }, (err) => {
  //   console.log('Unable to fetch Todos');
  // });

  //fetch based on values - query
  // db.collection('Todos').find({completed: true}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  //
  // }, (err) => {
  //   console.log('Unable to fetch Todos');
  // });

  //Find by object ID
  db.collection('Todos').find({completed: true}).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));

  }, (err) => {
    console.log('Unable to fetch Todos');
  });

  //client.close();
});
