//MongoDB module V3
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server!!!');
  const db = client.db('TodoApp');

  //findOneAndUpdate
  // using Mongodb update operators - https://docs.mongodb.com/manual/reference/operator/update/
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b8d5f8b7b55152d6f0a244c')
  // },{
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnoriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b8d51b41705fbf082af18dc')
  },
  { $set: { name: 'Sridhar U'},
    $inc: {age: 1}
  },
  {
    returnoriginal: false
  }).then((result) => {
    console.log(result);
  });


  //client.close();
});
