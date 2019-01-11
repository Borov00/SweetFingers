const cloudinary = require('cloudinary');
const User = require('../models/User');

cloudinary.config({
  cloud_name: 'dgaslxr3t',
  api_key: '494279988142415',
  api_secret: 'MtK24am4PrteMkc3qRRQukXToLo'
});
const Article = require('../models/Article');

exports.index = (req, res) => {
  res.render('articles');
};

function saveArticle(obj) {
  new Article(obj).save((err, article) => {
    if (err) res.send(err);
    else if (!article) res.send(400);
    else {
      return article.addAuthor(obj.author).then(_article => res.send(_article));
    }
    next();
  });
}

exports.postArticle = (req, res) => {
  image = 'https://images.pexels.com/photos/1024975/pexels-photo-1024975.jpeg?cs=srgb&dl=affair-anniversary-asad-1024975.jpg&fm=jpg';
  cloudinary.uploader.upload(req.file.myFile.path, (result) => {
    const obj = {
      author: req.user.id,
      text: req.body.text,
      title: req.body.title,
      description: req.body.description,
      ingredients: req.body.ingredients,
      category: req.body.category,
      feature_img: result.url,
    };
    saveArticle(obj);
  }, {
    resource_type: 'image',
    eager: [
      { effect: 'sepia' }
    ]
  });

  /*console.log(`user _id: ${req.user.id}`);
  saveArticle({
    author: req.user.id,
    text: req.body.text,
    title: req.body.title,
    description: req.body.description,
    ingredients: req.body.ingredients,
    category: req.body.category,
    feature_img: '',
  });*/
  res.redirect('/');
};


exports.getAllArticles = (req, res, next) => {
  Article.find({author: req.user.id})
    .exec((err, articles) => {
      if (err) res.send(err);
      else if (!articles) res.send(404);
      else {
        console.log(articles);
        //res.render('articles', articles);
      }
      next();
    });
};
