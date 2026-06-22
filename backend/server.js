const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

/* ======================
   ORDERS API
====================== */

app.get('/api/orders', (req, res) => {

    const query = `
    SELECT
        o.order_id,
        u.user_name,
        o.order_date,
        o.total_amount
    FROM Orders o
    JOIN Users u
    ON o.user_id = u.user_id
    `;

    db.query(query, (err, result) => {

        if (err) {
            console.error(err);
            return res.status(500).json(err);
        }

        res.json(result);

    });

});

/* ======================
   PRODUCTS API
====================== */

app.get('/api/products', (req, res) => {

    const query = `
    SELECT
        p.product_id,
        p.product_name,
        c.category_name,
        p.price,
        p.stock
    FROM Products p
    JOIN Categories c
    ON p.category_id = c.category_id
    `;

    db.query(query, (err, result) => {

        if (err) {
            console.error(err);
            return res.status(500).json(err);
        }

        res.json(result);

    });

});

/* ======================
   CUSTOMERS API
====================== */

app.get('/api/customers', (req, res) => {

    db.query('SELECT * FROM Users', (err, result) => {

        if (err) {
            console.error(err);
            return res.status(500).json(err);
        }

        res.json(result);

    });

});

/* ======================
   REVIEWS API
====================== */

app.get('/api/reviews', (req, res) => {

    const query = `
    SELECT
        p.product_name,
        u.user_name,
        r.rating,
        r.comments
    FROM Reviews r
    JOIN Users u
    ON r.user_id = u.user_id
    JOIN Products p
    ON r.product_id = p.product_id
    `;

    db.query(query, (err, result) => {

        if (err) {
            console.error(err);
            return res.status(500).json(err);
        }

        res.json(result);

    });

});

/* ======================
   DASHBOARD API
====================== */

app.get('/api/dashboard', (req, res) => {

    const query = `
    SELECT
    (SELECT COUNT(*) FROM Products) AS totalProducts,
    (SELECT COUNT(*) FROM Users) AS totalCustomers,
    (SELECT COUNT(*) FROM Orders) AS totalOrders,
    (SELECT SUM(total_amount) FROM Orders) AS revenue
    `;

    db.query(query, (err, result) => {

        if (err) {
            console.error(err);
            return res.status(500).json(err);
        }

        res.json(result[0]);

    });

});

/* ======================
   HOME ROUTE
====================== */

app.get('/', (req, res) => {
    res.send('AI Gadget Marketplace API is running...');
});

/* ======================
   SERVER
====================== */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});