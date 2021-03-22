const Rent = require('../models/Rent.model')
exports.getList = async function(req, res, next) {
    let data = await Rent.getAll()
    if (data) {
        res.render('rent.ejs', {
            title: 'Rent',
            admins: data
        })
    } else {
        res.redirect('/')
    }
}