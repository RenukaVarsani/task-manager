// const mongodb = require('mongodb')
// const MongoClient = new mongodb.MongoClient('mongodb://127.0.0.1:27017');

// // const connectionURL = 'mongodb://127.0.0.1:27017?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0'
// const databaseName = 'task-manager'
// MongoClient.connect().then((reject,resolve)=>{
//     console.log('test');
//     console.log('reject ',reject.error);
//     console.log(resolve);
// });
// MongoClient.connect((err,client)=>{
//     console.log("test");
//     if(err){
//         return console.log("error");
//     }
    
//     console.log("connected");
// })


// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

// const connectionURL = 'mongodb://localhost:27017/newdb'
// const databaseName = 'task-manager'

// MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
//     if (error) {
//         return console.log('Unable to connect to database!')
//     }

//     console.log("connected");



//  })
// const { MongoClient } = require('mongodb');
// // or as an es module:
// // import { MongoClient } from 'mongodb'

// // Connection URL
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);

// // Database Name
// const dbName = 'myProject';

// MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
//     if (error) {
//         return console.log('Unable to connect to database!')
//     }

//     console.log("connected");
// })

// async function main() {
//     // Use connect method to connect to the server
//     await client.connect();
//     console.log('Connected successfully to server');
//     const db = client.db(dbName);
//     const collection = db.collection('documents');
  
//     // the following code examples can be pasted here...
  
//     return 'done.';
//   }
  
//   main()
//     .then(console.log)
//     .catch(console.error)
//     .finally(() => client.close());


const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017/demo';
const client = new MongoClient(url);

// Database Name
const dbName = 'myProject';
 const db = client.db(dbName);
  const collection = db.collection('documents');


async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
 
  // the following code examples can be pasted here...

 
  const dbs = client.db(dbName)
dbs.collection('users').insertOne({
    name:"riaa",
    age:20
})
  
}

main()
  .then(console.log)
  .catch(console.error)
 
