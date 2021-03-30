const moment = require('moment')
exports.getList = async function(req, res, next) {
    let query = 'SELECT * FROM `apartments_long` ORDER BY id ASC'
    db.query(query, function(err, result) {
        if (err) {
            throw err
        }
        res.render('admin/houses/index.ejs', {
            title: 'Houses',
            houses: result
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

    res.render('admin/houses/add-house.ejs', {
        title: 'Create house',
        provinces: provinces
    })
}
exports.getFormUpdate = async function(req, res, next) {
    let queryHouse = "SELECT * FROM `apartments_long` WHERE id = " + req.params.id
    let provinces = []
    let districts = []
    let wards = []
    let house = await new Promise((resolve, reject) => {
        db.query(queryHouse, (err, result) => {
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

    if (house.province_id) {
        let queryDistrict = "SELECT * FROM `district` WHERE _province_id = " + house.province_id
        districts = await new Promise((resolve, reject) => {
            db.query(queryDistrict, (err, result) => {
                if (err) {
                    reject(err)
                }
                resolve(result)
            })
        })
    }
    if (house.district_id) {
        let queryWard = "SELECT * FROM `ward` WHERE _district_id = " + house.district_id
        wards = await new Promise((resolve, reject) => {
            db.query(queryWard, (err, result) => {
                if (err) {
                    reject(err)
                }
                resolve(result)
            })
        })
    }
    res.render('admin/houses/update-house.ejs', {
        title: 'Update house',
        house: house,
        provinces: provinces,
        districts: districts,
        wards: wards
    })
}

exports.addHouse = async function(req, res, next) {
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
        req.body.month,
        date,
        date
    ]

    let query = "INSERT INTO `apartments_long` (name,name_en,slug,person,room,area,bathroom,price,price_old,address,img,description,description_en,month,created_at, updated_at) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

    db.query(query, data, function(err, result) {
        if (err) {
            throw (err)
        }
        res.redirect('/admin/house')
    })
}

exports.deleteHouse = function(req, res, next) {
    try {
        let houseId = req.params.id
        let query = 'DELETE FROM `apartments_long` WHERE id = ' + houseId
        console.log('query', query);
        db.query(query, function(err, result) {
            if (err) {
                throw (err)
            }
            res.redirect('/admin/house')
        })
    } catch (error) {
        res.redirect('/admin/house')
    }
}
exports.updateHouse = function(req, res, next) {
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
        let query = "UPDATE apartments_long SET name=?, name_en=?, slug=?,person=?,room=?,area=?,bathroom=?,price=?,price_old=?,province_id=?,district_id=?,ward_id=?,address=?,img=?,description=?,description_en=?,month=?,updated_at=? WHERE id= " + req.params.id + "";
        db.query(query, data, (err, results) => {
            if (err) {
                throw (err)
            }
            res.redirect('/admin/house')
        })
    } catch (error) {
        res.redirect('/admin/house')
    }
}