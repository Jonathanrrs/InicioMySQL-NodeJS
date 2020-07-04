const mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'PASSWORD OF MYSQL',
        database: 'news_portal',
        insecureAuth: true
    });
}

