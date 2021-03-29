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
exports.getDistrict = async(req, res) => {
    let provinceId = req.params.id
    let query = "SELECT * FROM `district` WHERE _province_ID = " + provinceId
    let districts = await new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if (err) {
                reject(err)
            }
            resolve(result)
        })
    })
    return res.json(districts)
}

exports.getWard = async(req, res) => {
    let districtId = req.params.id
    let query = "SELECT * FROM `ward` WHERE _district_id = " + districtId
    let wards = await new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if (err) { reject(err) }
            resolve(result)
        })
    })
    return res.json(wards)
}