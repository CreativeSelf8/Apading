var data = [];
exports.getAll = function() {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM `user` ORDER BY id ASC", function(err, result) {
            if (err) {
                return reject(err);
            }
            resolve(result)
        })
    })
}