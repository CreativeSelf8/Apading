const moment = require('moment')
exports.getList = async function(req, res, next) {
    let query = 'SELECT * FROM `rent` ORDER BY id ASC'
    db.query(query, function(err, result) {
        if (err) {
            throw err
        }
        res.render('admin/rents/index.ejs', {
            title: 'Rents',
            rents: result,
            moment: moment
        })
    })
}

exports.getFormAdd = async function(req, res, next) {
    let queryProvince = "SELECT * FROM `province`"
    let provinces = await new Promise((resolve, reject) => {
        db.query(queryProvince, (err, result) => {
            if (err) {
                reject(err)
            }
            resolve(result)
        })
    })

    res.render('admin/rents/add-rent.ejs', {
        title: 'Cho thuê',
        provinces: provinces
    })
}
exports.getFormUpdate = async function(req, res, next) {
    let queryRent = "SELECT * FROM `rent` WHERE id = " + req.params.id
    let provinces = []
    let districts = []
    let wards = []
    let rent = await new Promise((resolve, reject) => {
        db.query(queryRent, (err, result) => {
            if (err) {
                reject(err)
            }
            resolve(result[0])
        })
    })
    let queryProvince = "SELECT * FROM `province`"
    provinces = await new Promise((resolve, reject) => {
        db.query(queryProvince, (err, result) => {
            if (err) {
                reject(err)
            }
            resolve(result)
        })
    })

    if (rent.province_id) {
        let queryDistrict = "SELECT * FROM `district` WHERE _province_id = " + rent.province_id
        districts = await new Promise((resolve, reject) => {
            db.query(queryDistrict, (err, result) => {
                if (err) {
                    reject(err)
                }
                resolve(result)
            })
        })
    }
    if (rent.district_id) {
        let queryWard = "SELECT * FROM `ward` WHERE _district_id = " + rent.district_id
        wards = await new Promise((resolve, reject) => {
            db.query(queryWard, (err, result) => {
                if (err) {
                    reject(err)
                }
                resolve(result)
            })
        })
    }
    res.render('admin/rents/update-rent.ejs', {
        title: 'Update house',
        rent: rent,
        provinces: provinces,
        districts: districts,
        wards: wards
    })
}

exports.addRent = async function(req, res, next) {
    let date = moment().format()
    let data = [
        req.body.name,
        req.body.name_en,
        req.body.slug,
        req.body.person,
        req.body.room,
        req.body.area,
        req.body.bathroom,
        req.body.price,
        req.body.price_old,
        req.body.address,
        req.body.img,
        req.body.description,
        req.body.description_en,
        date,
        date
    ]

    let query = "INSERT INTO `rent` (name,name_en,slug,person,room,m,bathroom,price,price_old,address,img,description,description_en,created_at, updated_at) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

    db.query(query, data, function(err, result) {
        if (err) {
            throw (err)
        }
        res.redirect('/admin/rent')
    })
}

exports.deleteRent = function(req, res, next) {
    try {
        let rentID = req.params.id
        let query = 'DELETE FROM `rent` WHERE id = ' + rentID
        console.log('query', query);
        db.query(query, function(err, result) {
            if (err) {
                throw (err)
            }
            res.redirect('/admin/rent')
        })
    } catch (error) {
        res.redirect('/admin/rent')
    }
}
exports.updateRent = function(req, res, next) {
    try {
        let date = moment().format()
        let data = [
            req.body.name,
            req.body.name_en,
            req.body.slug,
            req.body.person,
            req.body.room,
            req.body.area,
            req.body.bathroom,
            req.body.price,
            req.body.price_old,
            req.body.province_id,
            req.body.district_id,
            req.body.ward_id,
            req.body.address,
            req.body.img,
            req.body.description,
            req.body.description_en,
            req.body.month,
            date,
        ]
        let query = "UPDATE rent SET name=?, name_en=?, slug=?,person=?,room=?,area=?,bathroom=?,price=?,price_old=?,province_id=?,district_id=?,ward_id=?,address=?,img=?,description=?,description_en=?,month=?,updated_at=? WHERE id= " + req.params.id + "";
        db.query(query, data, (err, results) => {
            if (err) {
                throw (err)
            }
            res.redirect('/admin/rent')
        })
    } catch (error) {
        res.redirect('/admin/rent')
    }
}