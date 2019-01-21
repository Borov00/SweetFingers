
var User = require('../models/User');
var Article = require('../models/Article');
var Comment = require('../models/Comment');
exports.index = (req, res, next) => {
  res.render("users");
}

exports.isAdmin = (req, res, next) => {
  User.findById(req.user.id)
      .exec(function (err, user) {
    console.log(user.block);
    console.log(user);
    if (user.status === 'admin'){
      next()
    } else
      res.send("You are not an admin.");
  });
}

exports.getUser = (req, res) =>{

  User.find({}, function(err, users){

    if(err) return console.log(err);
    res.send(users)
  });
};

exports.deleteOne = (req, res) =>{
User.findByIdAndRemove(req.params.id, function(err, user){
if(err) return console.log(err);
Article.deleteMany({author: req.params.id}, function(err, success){
if(success) console.log("succesfully deleted all aticles of user: "+req.params.id+", status: "+success);
Comment.deleteMany({author: req.params.id}, function(err, success){
if(success) console.log("succesfully deleted all comments of user: "+req.params.id+", status: "+success);
res.send(user);
})
})
});
};

exports.blockAll = (req, res) =>{
  User.updateMany(
    // критерий фильтрации
    { $set: {block: true}},     // параметр обновления
    function(err, result){

      console.log(result);
      res.end;
    }
  );
};

exports.unblockAll = (req, res) =>{

  User.updateMany(
    // критерий фильтрации
    { $set: {block: false}},     // параметр обновления
    function(err, user){
      console.log(user);
      res.send(user);
    }
  );
};

exports.blockOne = (req, res) => {
  /*if(!req.body) return res.sendStatus(400);
  User.findOne({_id: req.user.id}, function(err, user){
    if(err) return console.log(err);
    user.block = true;
    user.save();
    res.send(user);
  });*/
  if(!req.body) return res.sendStatus(400);
  const newUser = {email: req.body.email, username: req.body.username, status: req.body.status, block: true};
  User.findOneAndUpdate({_id: req.body.id}, newUser, {new: true}, function(err, user){
    if(err) return console.log(err);
    res.send(user);
  });
};

exports.unblockOne = (req, res) => {
  /*if(!req.body) return res.sendStatus(400);
  User.findOne({_id: req.user.id}, function(err, user){
    if(err) return console.log(err);
    user.block = false;
    user.save();
    res.send(user);
  });*/
  const newUser = {email: req.body.email, username: req.body.username, status: req.body.status, block: false};
  User.findOneAndUpdate({_id: req.body.id}, newUser, {new: true}, function(err, user){
    if(err) return console.log(err);
    res.send(user);
  });
};

exports.setAdmin = (req, res) => {
  if(!req.body) return res.sendStatus(400);
  const newUser = {email: req.body.email, username: req.body.username, status: "admin", block: req.body.block};
  User.findOneAndUpdate({_id: req.body.id}, newUser, {new: true}, function(err, user){
    if(err) return console.log(err);
    res.send(user);
  });
};

exports.setUser = (req, res) => {
  if(!req.body) return res.sendStatus(400);
  const newUser = {email: req.body.email, username: req.body.username, status: "user", block: req.body.block};
  User.findOneAndUpdate({_id: req.body.id}, newUser, {new: true}, function(err, user){
    if(err) return console.log(err);
    res.send(user);
  });
};
