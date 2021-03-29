const fs = require('fs');
const async = require('async');

exports.getHomePage = (req, res) => {
    let apartmentQuery = "SELECT * FROM `apartments_long`  ORDER BY `updated_at` DESC LIMIT 10";
    let rentQuery = "SELECT * FROM `rent` ORDER BY `updated_at` DESC LIMIT 10";
    let postQuery = "SELECT * FROM `post` ORDER BY `updated_at` DESC LIMIT 10";
    // execute query
    async.parallel([
        function(callback) { db.query(apartmentQuery, callback) },
        function(callback) { db.query(rentQuery, callback) },
        function(callback) { db.query(postQuery, callback) }
      ], function(err, results) {

        if (err) {
            res.redirect('/');
        }

        res.render('index.ejs', {
            apartments: results[0][0],
            rents: results[1][0],
            posts: results[2][0]
        });
      });
};
