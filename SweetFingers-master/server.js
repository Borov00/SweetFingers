const express = require('express');
const compression = require('compression');
const session = require('express-session');
const bodyParser = require('body-parser');
const logger = require('morgan');
const chalk = require('chalk');
const errorHandler = require('errorhandler');
const lusca = require('lusca');
const dotenv = require('dotenv');
const MongoStore = require('connect-mongo')(session);
const flash = require('express-flash');
const path = require('path');
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose');
const passport = require('passport');
const expressValidator = require('express-validator');
const expressStatusMonitor = require('express-status-monitor');
const sass = require('node-sass-middleware');
const multer = require('multer');
const upload = multer({ dest: path.join(__dirname, 'uploads') });
const router = express.Router()
const cors = require('cors')
const multipart = require('connect-multiparty');
const multipartWare = multipart();
////////////////////////////////////////

const cloudinary = require('cloudinary')
cloudinary.config({
    cloud_name: 'dgaslxr3t',
    api_key: '494279988142415',
    api_secret: 'MtK24am4PrteMkc3qRRQukXToLo'
})

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.load({ path: '.env.example' });
/**
 * Controllers (route handlers).
 */
 const homeController = require('./controllers/home');
 const userController = require('./controllers/user');
 const articleController = require('./controllers/article');
 const manageController = require('./controllers/manage');
 const commentController = require('./controllers/comments');
/**
 * API keys and Passport configuration.
 */
const passportConfig = require('./config/passport');
/**
 * Create Express server.
 */
const app = express();
/**
 * Connect to MongoDB.
 */
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.connect(process.env.MONGODB_URI);
console.log(process.env.MONGODB_URI);
mongoose.connection.on('error', (err) => {
    console.error(err);
    console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
    process.exit();
});
/**
 * Configure cors
 */
/**
 * Express configuration.
 */

app.use(cors({credentials: true, origin: true}));
app.set('host', process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0');
app.set('port', 5000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(expressStatusMonitor());
app.use(compression());
app.use(sass({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public')
}));
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 1209600000 }, // two weeks in milliseconds
    store: new MongoStore({
        url: process.env.MONGODB_URI,
        autoReconnect: true,
    })
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
/*app.use((req, res, next) => {
    lusca.csrf()(req, res, next);
});
app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));
app.disable('x-powered-by');*/
app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});
app.use((req, res, next) => {
    // After successful login, redirect back to the intended page
    if (!req.user
        && req.path !== '/login'
        && req.path !== '/signup'
        && !req.path.match(/^\/auth/)
        && !req.path.match(/\./)) {
        req.session.returnTo = req.originalUrl;
    } else if (req.user
        && (req.path === '/account' || req.path.match(/^\/api/))) {
        req.session.returnTo = req.originalUrl;
    }
    next();
});
app.use('/', express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));
app.use('/js/lib', express.static(path.join(__dirname, 'node_modules/popper.js/dist/umd'), { maxAge: 31557600000 }));
app.use('/js/lib', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js'), { maxAge: 31557600000 }));
app.use('/js/lib', express.static(path.join(__dirname, 'node_modules/jquery/dist'), { maxAge: 31557600000 }));
app.use('/webfonts', express.static(path.join(__dirname, 'node_modules/@fortawesome/fontawesome-free/webfonts'), { maxAge: 31557600000 }));
/**
 * Primary app routes.
 */
app.use("/",function (req, res, next) {
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Headers", "Origin, Authorization, Accept, Content-Type");
    res.header("Access-Control-Allow-Credentials", true);
    /*add_header Access-Control-Allow-Origin *;
    add_header Access-Control-Allow-Methods "POST, GET, OPTIONS";
    add_header Access-Control-Allow-Headers "Origin, Authorization, Accept, Content-Type";
    add_header Access-Control-Allow-Credentials true;
    add_header Content-Length 0;
    add_header Content-Type text/plain;*/
    next();
});

app.get('/main',function(req,res,next){
    console.log("res.session.id : "+req.session.user);
    next();
},   articleController.getArticleByLastDate);
app.get('/bc_room', passportConfig.isAuthenticated, userController.getAccount1);
app.put('/bc_room/edit/profile', passportConfig.isAuthenticated, userController.postUpdateProfile);
app.get('/main2', passportConfig.isAuthenticated, articleController.checkSignedInUsers); // проверка на залогиненность

app.get('/article/:article_id', articleController.getOneArticle);
app.get('/article/by/date', articleController.getArticleByLastDate);
app.get('/article/clap', articleController.clapArticle);
app.get('/article/unclap', articleController.unclapArticle);

app.get('/signIn', userController.getSignin);
app.post('/signIn', userController.postSignin);
app.get('/signUp', userController.getSignup);
app.post('/signUp', userController.postSignup);
app.get('/account', passportConfig.isAuthenticated, userController.getAccount);
app.post('/account/delete', passportConfig.isAuthenticated, articleController.deleteOneArticle);
app.post('/account/edit/:article_id', passportConfig.isAuthenticated,articleController.editArticle );
app.get('/logout', userController.logout);
app.get('/manage', passportConfig.isAuthenticated, manageController.index);



app.get('/my_articles', passportConfig.isAuthenticated, articleController.index);
app.post('/my_articles', passportConfig.isAuthenticated, articleController.postArticle);
app.get('/my_articles/all', passportConfig.isAuthenticated, articleController.getAllForOne);
app.post('/account/profile', passportConfig.isAuthenticated, userController.postUpdateProfile);
app.get('/account', passportConfig.isAuthenticated, userController.getAccount)

//app.post('/login', passportConfig.isAuthorized, articleController.postLogin);
app.post('/comment', passportConfig.isAuthenticated, commentController.addComment);
app.get('/comment/:article_id', passportConfig.isAuthenticated, commentController.getAllForOneArticle);
app.post('/comment/delete', passportConfig.isAuthenticated, commentController.deleteOneComment);
/**
 * Users Management
 */
app.get("/manage", passportConfig.isAuthenticated, manageController.index);
app.get("/api/users/get", passportConfig.isAuthenticated, manageController.isAdmin, manageController.getUser)
app.delete("/api/users/delete/:id", passportConfig.isAuthenticated, manageController.deleteOne)
app.get("/api/users/blockAll/", passportConfig.isAuthenticated, manageController.blockAll)
app.get("/api/users/unblockAll/", passportConfig.isAuthenticated, manageController.unblockAll)
app.put("/api/users/block/", passportConfig.isAuthenticated, manageController.blockOne)
app.put("/api/users/unblock/", passportConfig.isAuthenticated, manageController.unblockOne)
app.put("/api/set/admin/", passportConfig.isAuthenticated, manageController.setAdmin)
app.put("/api/set/user/", passportConfig.isAuthenticated, manageController.setUser)
/**
 * OAuth authentication routes. (Sign in)
 */
app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email', 'public_profile'] }));
app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: 'http://localhost:3000/' }), (req, res) => {
    console.log("google/callback");
    res.redirect('http://localhost:3000/room');
});
app.get('/auth/google', passport.authenticate('google', { scope: 'profile email' }));
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: 'http://localhost:3000/' }), (req, res) => {
    console.log("google/callback");
    res.redirect('http://localhost:3000/room');
});


// var recipes;
//
// mongoClient.connect(function(err, client){
//
//     const db = client.db("usersdb");
//     const collection = db.collection("users");
//
//     if(err) return console.log(err);
//
//     collection.find().toArray(function(err, results){
//
//         console.log(results);
//         recipes=results;
//         client.close();
//     });
// });
//
// app.get('/api/customers', (req, res) => {
//   const customers = recipes;
//
//   res.json(customers);
// });


/**
 * Error Handler.
 */
if (process.env.NODE_ENV === 'development') {
    // only use in development
    app.use(errorHandler());
} else {
    app.use((err, req, res, next) => {
        console.error(err);
        res.status(500).send('Server Error');
    });
}

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
    console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'));
    console.log('  Press CTRL-C to stop\n');
});

module.exports = app;
