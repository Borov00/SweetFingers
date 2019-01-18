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

exports.getAllForOne = (req, res, next) => {
  console.log(req.user.id)
  Article.find({ author:  req.user.id}).
  populate('articles').
  exec(function (err, articles) {
    if (err) return handleError(err);
    //console.log('The author is %s', article.author);
    console.log(articles);
    res.json(articles);
    // prints "The author is Ian Fleming"
  });
};


exports.postArticle = (req, res) => {

  image = "https://pioneerwoman.files.wordpress.com/2018/01/how-to-cook-scallops-01.jpg"
  cloudinary.uploader.upload(image, (result) => {
    var obj = {
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
}


exports.getAllArticles = (req, res, next) => {
  Article.find().exec(function(err, results){
    //console.log(results);
    recipes=results;
    let customers=recipes;
    res.json(customers);
  });
};

exports.getAllArticles2 = (req, res, next) => {
    res.json({success:true});
};

exports.getOneArticle = (req, res, next) => {
  Article.find().exec(function(err, results){
    console.log(results);
    recipes=results;
    let customers=recipes;
    res.json(customers);
  });
};

exports.getArticlesByRate = (req, res, next) => {
  Article.find({rate})
}

exports.getArticleByLastDate = (req, res, next) => {
  Article.find({}).sort([['date', -1]]).exec(function(err, docs) { console.log(docs) });
}

exports.getAll = (req, res, next) => {
  console.log(req.user.id)
  User.find({_id: req.user.id})
      .populate('articles').exec((err, articles)=> {
    res.json(articles);
  })
};
