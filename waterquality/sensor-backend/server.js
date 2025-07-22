const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// MySQL database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // replace with your MySQL username
    password: 'hrudhay', // replace with your MySQL password
    database: 'sensor_data_db', // replace with your database name
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// API to fetch sensor data
app.get('/api/sensor-data', (req, res) => {
    db.query('SELECT * FROM sensor_data', (err, results) => {
        if (err) {
            console.error('Error fetching data from database: ', err);
            res.status(500).send('Error fetching data');
            return;
        }
        res.json(results);  // Return the data as JSON
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
