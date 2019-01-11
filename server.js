const express = require('express');
const MongoClient = require("mongodb").MongoClient;
const app = express();
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useNewUrlParser: true });
var recipes;
mongoClient.connect(function(err, client){

    const db = client.db("usersdb");
    const collection = db.collection("users");

    if(err) return console.log(err);

    collection.find().toArray(function(err, results){

        console.log(results);
        recipes=results;
        client.close();
    });
});

app.get('/api/customers', (req, res) => {
  const customers = recipes;

  res.json(customers);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
