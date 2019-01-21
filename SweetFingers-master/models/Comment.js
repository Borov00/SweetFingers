
const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema(
{
name: String,
author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
text: String,
article: {type: mongoose.Schema.Types.ObjectId, ref: 'Article'},
status: {type: String, default: 'user'},
}, { timestamps: true }
);

CommentSchema.methods.comment = function(c) {
this.comments.push(c);
return this.save();
}

CommentSchema.methods.clap = function() {
this.claps++
return this.save();
}

CommentSchema.methods.addAuthor = function (author_id) {
this.author = author_id;
return this.save();
}
CommentSchema.methods.getUserArticle = function (_id) {
Article.find({'author': _id}).then((article) => {
return article;
})
}
module.exports = mongoose.model('Comment', CommentSchema);
