const User = require('../models/User');
const Article = require('../models/Article');
const Comment = require('../models/Comment');

function getAllCommentsForOneArticle (article_id, res) {
Comment.find({article: article_id}, function (err, articles) {
console.log(articles)
res.json(articles);
});
}

exports.addComment = (req,res) => {
let{article_id, comment} = req.body;
User.findOne({}, function(err, user){
console.log(req.user.name);
var newComment = new Comment({
name: req.user.name,
text: req.body.comment,
article: req.body.id,
author: req.user.id,
});
newComment.save();
getAllCommentsForOneArticle(article_id, res);
});
}
//
exports.getAllForOneArticle =(req,res) => {
var article_id = req.params.article_id;
getAllCommentsForOneArticle(article_id, res);
}


exports.deleteOneComment = (req, res) => {
console.log(req.body);
var comment_id = req.body.comment_id;
var article_id = req.body.article_id;
Comment.findOne({_id: comment_id}, function(err, comment){
User.findOne({_id: req.user.id}, function(err, user){
if (comment.author == req.user.id || user.status == "admin") {
Comment.deleteOne({_id: comment_id}, function(err, comment){
if (err) console.log(err);
getAllCommentsForOneArticle(article_id, res);
});
}else
res.json({msg: "You don't have permission"});
});
});
}
