const Post = require('../models/Post.model')
exports.getList = async function(req, res, next) {
    let data = await Post.getAll()
    if (data) {
        res.render('post.ejs', {
            title: 'Post',
            posts: data
        })
    } else {
        res.redirect('/')
    }
}