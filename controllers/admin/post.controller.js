const moment = require('moment')
exports.getList = async function(req, res, next) {
    let query = 'SELECT * FROM `post` ORDER BY id ASC'
    db.query(query, function(err, result) {
        if (err) {
            throw err
        }
        res.render('admin/posts/index.ejs', {
            title: 'Post',
            moment: moment,
            posts: result
        })
    })
}

exports.getFormAdd = function(req, res, next) {
    res.render('admin/posts/add-post.ejs', {
        title: 'Tao post'
    })
}
exports.getFormUpdate = function(req, res, next) {
    let query = "SELECT * FROM `post` WHERE id = " + req.params.id + ""
    db.query(query, (err, result) => {
        if (err) {
            throw (err)
        }
        res.render('admin/posts/update-post.ejs', {
            title: 'Update post',
            post: result[0]
        })
    })

}

exports.addPost = async function(req, res, next) {
    let date = moment().format()
    let data = [
        req.body.name,
        req.body.name_en,
        req.body.name_ko,
        req.body.name_ch,
        req.body.name_ja,
        req.body.slug,
        req.body.img,
        req.body.content,
        req.body.content_en,
        req.body.content_ch,
        req.body.content_ko,
        req.body.content_ja,
        req.body.description,
        req.body.description_en,
        req.body.description_ko,
        req.body.description_ch,
        req.body.description_ja,
        req.body.type,
        date,
        date
    ]

    let query = "INSERT INTO `post` (name,name_en,name_ko,name_ch,name_ja,slug,img,content,content_en,content_ch,content_ko,content_ja,description,description_en,description_ko,description_ch,description_ja,type,created_at, updated_at) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

    db.query(query, data, function(err, result) {
        if (err) {
            throw (err)
        }
        res.redirect('/admin/post')
    })
}

exports.deletePost = function(req, res, next) {
    try {
        let postId = req.params.id
        let query = 'DELETE FROM `post` WHERE id = ' + postId
        db.query(query, function(err, result) {
            if (err) {
                throw (err)
            }
            res.redirect('/admin/post')
        })
    } catch (error) {
        res.redirect('/admin/post')
    }
}
exports.updatePost = function(req, res, next) {
    try {
        let date = moment().format()
        let data = [req.body.name,
            req.body.name_en,
            req.body.name_ko,
            req.body.name_ch,
            req.body.name_ja,
            req.body.slug,
            req.body.img,
            req.body.content,
            req.body.content_en,
            req.body.content_ch,
            req.body.content_ko,
            req.body.content_ja,
            req.body.description,
            req.body.description_en,
            req.body.description_ko,
            req.body.description_ch,
            req.body.description_ja,
            req.body.type,
            date
        ]
        console.log(req.body.type);
        let query = "UPDATE post SET name=?, name_en=?, name_ko=?,name_ch=?,name_ja=?,slug=?,img=?,content=?,content_en=?,content_ch=?,content_ko=?,content_ja=?,description=?,description_en=?,description_ko=?,description_ch=?,description_ja=?,type=?,updated_at=? WHERE id= " + req.params.id + "";
        db.query(query, data, (err, results) => {
            if (err) {
                throw (err)
            }
            res.redirect('/admin/post')
        })
    } catch (error) {
        res.redirect('/admin/post')
    }
}