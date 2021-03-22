const Rent = require('../models/Rent.model')
exports.getList = async(req, res, next) => {
    try {
        let rentList = await Rent.getAll()
        res.render('index.ejs', {
            admins: rentList,
            title: 'Rent'
        })
    } catch (error) {
        console.log(error);
    }
}