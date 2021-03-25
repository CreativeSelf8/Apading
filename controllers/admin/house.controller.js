const moment = require('moment')
exports.getList = async function(req, res, next) {
    let query = 'SELECT * FROM `post` ORDER BY id ASC'
    db.query(query, function(err, result) {
        if (err) {
            throw err
        }
        res.render('admin/houses/index.ejs', {
            title: 'Houses',
            posts: result
        })
    })
}

exports.getFormAdd = function(req, res, next) {
    res.render('admin/houses/add-house.ejs', {
        title: 'Create house'
    })
}
exports.getFormUpdate = function(req, res, next) {
    let query = "SELECT * FROM `post` WHERE id = " + req.params.id + ""
    db.query(query, (err, result) => {
        if (err) {
            throw (err)
        }
        res.render('admin/houses/update-house.ejs', {
            title: 'Update house',
            post: result[0]
        })
    })

}

exports.addHouse = async function(req, res, next) {
    let date = moment().format()
    let data = [
        req.body.name,
        req.body.name_en,
        req.body.name_ko,
        req.body.name_ch,
        req.body.name_ja,
        req.body.slug,
        req.body.img,
        req.body.description,
        req.body.content,
        req.body.content_en,
        req.body.content_ch,
        req.body.content_ko,
        req.body.content_ja,
        req.body.type,
        date,
        date
    ]

    let query = "INSERT INTO `post` (name,name_en,name_ko,name_ch,name_ja,slug,img,description,content,content_en,content_ch,content_ko,content_ja,type,created_at, updated_at) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

    db.query(query, data, function(err, result) {
        if (err) {
            throw (err)
        }
        res.redirect('/admin/house')
    })
}

exports.deleteHouse = function(req, res, next) {
    try {
        let postId = req.params.id
        let query = 'DELETE FROM `post` WHERE id = ' + postId
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
        let data = [req.body.name,
            req.body.name_en,
            req.body.name_ko,
            req.body.name_ch,
            req.body.name_ja,
            req.body.slug,
            req.body.img,
            req.body.description,
            req.body.content,
            req.body.content_en,
            req.body.content_ch,
            req.body.content_ko,
            req.body.content_ja,
            req.body.type, date
        ]
        let query = "UPDATE post SET name=?, name_en=?, name_ko=?,name_ch=?,name_ja=?,slug=?,img=?,description=?,content=?,content_en=?,content_ch=?,content_ko=?,content_ja=?,type=?,updated_at=? WHERE id= " + req.params.id + "";
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