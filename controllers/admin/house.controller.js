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

exports.getFormAdd = function(req, res, next) {
    res.render('admin/houses/add-house.ejs', {
        title: 'Create house'
    })
}
exports.getFormUpdate = async function(req, res, next) {
    let queryHouse = "SELECT * FROM `apartments_long` WHERE id = " + req.params.id
    let house = await new Promise((resolve, reject) => {
        db.query(queryHouse, (err, result) => {
            if (err) {
                reject(err)
            }
            resolve(result)
        })
    })
    let queryProvince = "SELECT * FROM `province`"
    let provinces = await new Promise((resolve, reject) => {
        db.query(queryProvince, (err, result) => {
            if (err) {
                reject(err)
            }
            resolve(result)
        })
    })
    res.render('admin/houses/update-house.ejs', {
        title: 'Update house',
        house: house,
        provinces: provinces
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
            req.body.address,
            req.body.img,
            req.body.description,
            req.body.description_en,
            req.body.month,
            date,
        ]
        let query = "UPDATE apartments_long SET name=?, name_en=?, slug=?,person=?,room=?,area=?,bathroom=?,price=?,price_old=?,address=?,img=?,description=?,description_en=?,month=?,updated_at=? WHERE id= " + req.params.id + "";
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