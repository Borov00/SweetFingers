const express = require('express');
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const app = express();

const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useNewUrlParser: true });

const jsonParser=express.json();
const urlencodedParser = bodyParser.urlencoded({extended: false});
var recipes;
var users;
var error="";
app.use(bodyParser.json());

mongoClient.connect(function(err, client){

    const db = client.db("usersdb");
    const collection = db.collection("users");

    if(err) return console.log(err);

    collection.find().toArray(function(err, results){

        recipes=results;

    });
});
mongoClient.connect(function(err, client){

    const db = client.db("usersdb");
    const collection = db.collection("example");

    if(err) return console.log(err);

    collection.find().toArray(function(err, results){

        console.log(results);
        users=results;
        
    });
});
app.use("/",function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();

});
app.get('/api/customers', (req, res) => {
  var customers = recipes;

  res.json(customers);
});
app.get('/room', (req, res) => {
  var customers = users;

  res.json(customers);
});
app.post("/signIn", function(req,res){
  console.log("signUp");
  console.log(req.body);
  if(!req.body) return res.sendStatus(400);

})

app.post("/signUp", function(req,res){
  console.log("signUp");
  console.log(req.body);
  if(!req.body) return res.sendStatus(400);

})

app.get('/signIn', (req, res) => {

  res.json(customers);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
