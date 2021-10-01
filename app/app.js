const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = "mydb";
const colName = "products";
const client = new MongoClient(url);

client.connect(function(err) {
    console.log("connected successfully");
    const db = client.db(dbName);
    const collection = db.collection(colName);
    client.close();
})