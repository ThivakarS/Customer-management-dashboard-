const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Thiva123',
    database: 'AI_Gadget_Marketplace'
});

db.connect((err) => {
    if (err) {
        console.error('Database Error:', err);
        return;
    }
    console.log('MySQL Connected');
});

module.exports = db;