const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema(
  {
    text: String,
    title: String,
    description: String,
    ingredients: String,
    category: String,
    feature_img: String,
      claps: {
          voters: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
          amount: {type: Number, default: 0}
      },
      rates: {
          voters: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
          amount: {type: Number, default: 0}
      },
    comments: [
      {
        author: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
        },
        text: String
      }
    ]
  }, { timestamps: true }
);

ArticleSchema.methods.clap = function() {
  this.claps++
  return this.save();
}
ArticleSchema.methods.comment = function(c) {
  this.comments.push(c);
  return this.save();
}
ArticleSchema.methods.addAuthor = function (author_id) {
  this.author = author_id;
  return this.save();
}
ArticleSchema.methods.getUserArticle = function (_id) {
  Article.find({'author': _id}).then((article) => {
    return article;
  })
}
module.exports = mongoose.model('Article', ArticleSchema);
