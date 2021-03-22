var data = [];
exports.getAll = function() {
    // let query = "SELECT * FROM `admin` ORDER BY id ASC";
    db.query("SELECT * FROM `admin` ORDER BY id ASC", (err, result) => {
        data = result
    });
    console.log('data', data);
    return data;
}