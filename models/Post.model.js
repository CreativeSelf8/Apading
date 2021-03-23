var data = [];
exports.getAll = function() {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM `post` ORDER BY id ASC", function(err, result) {
            if (err) {
                return reject(err);
            }
            resolve(result)
        })
    })
}