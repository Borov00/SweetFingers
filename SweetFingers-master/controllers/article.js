const cloudinary = require('cloudinary')
const fs = require('fs')
const User = require('../models/User');
const Article = require('../models/Article');

cloudinary.config({
  cloud_name: 'dgaslxr3t',
  api_key: '494279988142415',
  api_secret: 'MtK24am4PrteMkc3qRRQukXToLo'
});


exports.index = (req, res) => {
  res.render('articles');
};

function saveArticle(obj) {
  new Article(obj).save((err, article) => {
    if (err)
      res.send(err)
    else if (!article)
      res.send(400)
    else {
      return article.addAuthor(obj.author).then((_article) => {
        return res.send(_article)
      })
    }
    next()
  })
};

exports.clapArticle = (req,res, next) => {
  // body: id_article
  var user_id = "5c4191f8682f49360c89d52d"; // google
  var article_id = "5c42cf51af45fa2fbc096335"; // yura-article

  // Article.find({_id: article_id, user_id: { $in: user_id}}, function (err, article){
  //   console.log(article);
  //   res.json(article);
  // })

  Article.findById({_id: article_id, clapers: user_id}).then((article)=> {
    return article.clap(user_id).then(()=>{
      return res.json({msg: "Done"})
    })
  }).catch(err => {
    console.log(err); // Error: Not Found
  });

  // Article.find({_id: article_id}, function (err, article){
  //     if (err) consol.log(err)
  //     if(!article) res.json({msg: 'Article not found'})
  //     console.log(article)
  //     article.clap(user_id);
  //     // console.log(err);
  //     // console.log(article);
  //     // console.log("ARTICLE BEFORE: "+article);
  //     // //if (!article) return
  //     // if (article.length == 0){
  //     //     console.log("ARTICLE THERE IS NOT: "+article);
  //     //     article.clap(user_id)
  //     //     console.log("AFTER CLAPED: "+article);
  //     //     return article;
  //     // }
  // })


  // }).then(()=>{
  //     console.log("ARITCLE AFTER: "+article);
  //     return res.json({msg: "Done"})
  // }).catch(err => {
  //   console.log(err);
  //   res.json(err);
  // })
}

exports.unclapArticle = (req,res, next) => {
  // body: id_article, comment
  var user_id = "5c4191f8682f49360c89d52d";
  var article_id = "5c42cf51af45fa2fbc096335";

  Article.findById(article_id).then((article)=> {
    return article.unclap(user_id).then(()=>{
      return res.json({msg: "Done"})
    })
  }).catch(err => {
    console.log(err); // Error: Not Found
  });
  // Article.findOne({_id: article_id}, function (err, result) {
  //   if(err) console.log("CLAP ERROR:"+err);
  //   if (result.claps.clapers === user_id) res.json(result.unclap(user_id));
  //   if (result.claps.clapers !== user_id) res.json(result.clap(user_id));
  // })
}
exports.deleteOneArticle = (req, res, next) => {
console.log("ARTICLE_ID: " + req.body.id);
console.log("USER ID: " + req.user.id);

Article.findOne({_id: req.body.id}, function (err, article) {
if(err) res.json(err);
if (!article) res.json({msg: "No article"});
console.log("AUTHOR: "+article.author+" USER: "+req.user.id);
if (article.author == req.user.id || req.user.status==="admin" ) {
Article.deleteOne({_id: article.id}, function (err, result) {
if (err) return err;
if (!result) res.json({msg: "Didn't delete"});
if (result) res.json({msg: "Recipe Deleted"});
});
} else
res.json({msg: "You don't have permissions"});
})
}

exports.getAllForOne = (req, res, next) => {
  console.log(req.user.id)
  Article.find({ author:  req.user.id}).
  populate('articles').
  sort({createdAt: 'desc'}).
  exec(function (err, articles) {
    if (err) return handleError(err);
    //console.log('The author is %s', article.author);
    if (articles)console.log("All articles found.");

    res.json(articles);
    // prints "The author is Ian Fleming"
  });
};

exports.postArticle = (req, res) => {
  if(!req.body.url) req.body.url = "https://www.takebackyourtemple.com/wp-content/uploads/2017/09/DepositphotosAddiction-Mindset-v2.jpg";
  cloudinary.uploader.upload(req.body.url, (result) => {
    User.findOne({_id: req.user.id}, function(err, user){
      var obj = {
        author_name: user.name,
        author: req.user.id,
        text: req.body.text,
        title: req.body.title,
        description: req.body.description,
        ingredients: req.body.ingredients,
        category: req.body.category,
        feature_img: result.url != null ? result.url : ''
      }
      saveArticle(obj);
    },{
      resource_type: 'image',
      eager: [
        {effect: 'sepia'}
      ]
    })

    })

}


exports.getAllArticles = (req, res, next) => {
  Article.find().exec(function(err, results){
    //console.log(results);
    recipes=results;
    let customers=recipes;
    res.json(customers);
  });
};

exports.checkSignedInUsers = (req, res, next) => {
    res.json({success:true});
};

exports.getOneArticle = (req, res, next) => {
  console.log("dasdfasdfasdfa"+req.params.article_id);
  Article.findOne({_id: req.params.article_id}).exec(function(err, article){
    if (err) res.json(err);
    if (!article) res.json({msg: 'Article was not found'});
    if (article) console.log("Article successfully found");
    res.json(article);
  });
};
exports.editArticle = (req,res, next) => {
var article_id = req.params.article_id;
let { text, title, category, ingredients, description, url } = req.body;
Article.findOne({_id: article_id}, function(err, article){
User.findOne({_id: req.user.id}, function(err, user){
if(err) console.log(err);
if (user.status == "admin" || article.author == req.user.id){
article.text= text;
article.title= title;
article.category= category;
article.ingredients= ingredients;
article.description= description;
article.feature_img= url;
article.save();

res.json({msg: "Successfully edited"});
}else{
res.json({msg: "You don't have permission"});
}
})
});
}

exports.getArticlesByRate = (req, res, next) => {
  Article.find({rate})
}

exports.getArticleByLastDate = (req, res, next) => {
  Article.find({}).sort({createdAt: 'desc'}).exec(function(err, docs) { res.json(docs) });
}

exports.getAll = (req, res, next) => {
  console.log(req.user.id)
  User.find({_id: req.user.id})
      .populate('articles').exec((err, articles)=> {
    res.json(articles);
  })
};
