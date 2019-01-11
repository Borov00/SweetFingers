const User = require('../models/User');

exports.index = (req, res) => {
    User.find().exec(function(err, results){
         console.log(results);
         recipes=results;
         let customers=recipes;
        res.json(customers);
    });
};
