const fs = require('fs');

exports.getHomePage = (req, res) => {
    let query = "SELECT * FROM `admin` ORDER BY id ASC";

    db.query(query, (err, result) => {
        if (err) {
            res.redirect('/');
        }

        res.render('admin/index.ejs', {
            title: "Admin home",
            admins: result
        });
    });
};