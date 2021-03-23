const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const morgan = require('morgan')
const mysql = require('mysql2');
const path = require('path');
require('dotenv').config()

const app = express();

const postRoutes = require('./routes/post.routes');
const homeRoutes = require('./routes/index.routes');

const { DATABASE, DB_HOST, DB_PORT, DB_USER, DB_PASS, PORT } = process.env;


// create connection to database
// the mysql.createConnection function takes in a configuration object which contains host, user, password and the database name.
const db = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DATABASE,
    port: DB_PORT,
    insecureAuth: false
});

// connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;

// configure middleware
app.set('port', PORT); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
app.use(fileUpload()); // configure fileupload

// routes for the app
app.use('/', homeRoutes);
app.use('/post', postRoutes);
app.get('*', function(req, res, next) {
    res.status(404);

    res.render('404.ejs', {
        title: "Page Not Found",
    });

});

// set the app to listen on the port
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});