// // // require('dotenv').config();
// // // const express = require('express');
// // // const mysql = require('mysql2');
// // // const cors = require('cors');

// // // // Initialize Express app
// // // const app = express();
// // // app.use(cors()); // Allow cross-origin requests
// // // app.use(express.json()); // Parse JSON bodies

// // // // MySQL Database connection
// // // const db = mysql.createConnection({
// // //   host: process.env.DB_HOST,
// // //   user: process.env.DB_USER,
// // //   password: process.env.DB_PASSWORD,
// // //   database: process.env.DB_NAME,
// // // });

// // // // Connect to MySQL database
// // // db.connect((err) => {
// // //   if (err) {
// // //     console.error('Error connecting to database:', err);
// // //     return;
// // //   }
// // //   console.log('Connected to MySQL database');
// // // });

// // // // Route to get sensor data based on selected date
// // // app.get('/api/sensor-data', (req, res) => {
// // //   const { date } = req.query;

// // //   if (!date) {
// // //     return res.status(400).json({ message: 'Date is required' });
// // //   }

// // //   const query = `
// // //     SELECT
// // //       HOUR(timestamp) AS hour,
// // //       AVG(tds) AS tds,
// // //       AVG(hardness) AS hardness,
// // //       AVG(ph) AS ph,
// // //       AVG(temperature) AS temperature,
// // //       AVG(turbidity) AS turbidity
// // //     FROM
// // //       sensor_data
// // //     WHERE
// // //       DATE(timestamp) = ?
// // //     GROUP BY
// // //       HOUR(timestamp)
// // //     ORDER BY
// // //       hour;
// // //   `;

// // //   // Query the database for the selected date
// // //   db.query(query, [date], (err, results) => {
// // //     if (err) {
// // //       console.error('Error fetching sensor data:', err);
// // //       return res.status(500).json({ message: 'Server error' });
// // //     }

// // //     // Return the fetched data
// // //     res.json(results);
// // //   });
// // // });

// // // // Start the server on port 5000
// // // const PORT = process.env.PORT || 5000;
// // // app.listen(PORT, () => {
// // //   console.log(`Server is running on port ${PORT}`);
// // // });
// // // require('dotenv').config();
// // // const express = require('express');
// // // const mysql = require('mysql2');
// // // const cors = require('cors');

// // // const app = express();
// // // app.use(cors());
// // // app.use(express.json());

// // // // MySQL Database connection
// // // const db = mysql.createConnection({
// // //   host: process.env.DB_HOST,
// // //   user: process.env.DB_USER,
// // //   password: process.env.DB_PASSWORD,
// // //   database: process.env.DB_NAME,
// // // });

// // // db.connect((err) => {
// // //   if (err) {
// // //     console.error('Database connection failed:', err);
// // //     return;
// // //   }
// // //   console.log('Connected to MySQL database');
// // // });

// // // // Route to get sensor data (default: grouped by date)
// // // app.get('/api/sensor-data', (req, res) => {
// // //   const { date } = req.query;

// // //   let query = `
// // //     SELECT 
// // //       DATE(timestamp) AS date, 
// // //       AVG(tds) AS tds, 
// // //       AVG(hardness) AS hardness, 
// // //       AVG(ph) AS ph, 
// // //       AVG(temperature) AS temperature, 
// // //       AVG(turbidity) AS turbidity
// // //     FROM sensor_data
// // //     GROUP BY DATE(timestamp)
// // //     ORDER BY date DESC;
// // //   `;

// // //   // If a specific date is selected, fetch hourly data
// // //   if (date) {
// // //     query = `
// // //       SELECT 
// // //         HOUR(timestamp) AS hour, 
// // //         AVG(tds) AS tds, 
// // //         AVG(hardness) AS hardness, 
// // //         AVG(ph) AS ph, 
// // //         AVG(temperature) AS temperature, 
// // //         AVG(turbidity) AS turbidity
// // //       FROM sensor_data
// // //       WHERE DATE(timestamp) = ?
// // //       GROUP BY HOUR(timestamp)
// // //       ORDER BY hour;
// // //     `;
// // //   }

// // //   db.query(query, date ? [date] : [], (err, results) => {
// // //     if (err) {
// // //       console.error('Error fetching sensor data:', err);
// // //       return res.status(500).json({ message: 'Server error' });
// // //     }
// // //     res.json(results);
// // //     print(results);
// // //   });
// // // });

// // // const PORT = process.env.PORT || 4000;
// // // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// // require('dotenv').config();
// // const express = require('express');
// // const mysql = require('mysql2');
// // const cors = require('cors');

// // const app = express();
// // app.use(cors());
// // app.use(express.json());

// // // MySQL Database connection
// // const db = mysql.createConnection({
// //   host: process.env.DB_HOST,
// //   user: process.env.DB_USER,
// //   password: process.env.DB_PASSWORD,
// //   database: process.env.DB_NAME,
// // });

// // db.connect((err) => {
// //   if (err) {
// //     console.error('Database connection failed:', err);
// //     return;
// //   }
// //   console.log('Connected to MySQL database');
// // });

// // // Route to get sensor data (default: grouped by date)
// // app.get('/api/sensor-data', (req, res) => {
// //   const { date } = req.query;

// //   // Validate if date is provided and in the correct format
// //   if (date && !/^(\d{4})-(\d{2})-(\d{2})$/.test(date)) {
// //     return res.status(400).json({ message: 'Invalid date format. Use YYYY-MM-DD.' });
// //   }

// //   let query = `
// //     SELECT 
// //       DATE(timestamp) AS date, 
// //       AVG(tds) AS tds, 
// //       AVG(hardness) AS hardness, 
// //       AVG(ph) AS ph, 
// //       AVG(temperature) AS temperature, 
// //       AVG(turbidity) AS turbidity
// //     FROM sensor_data
// //     GROUP BY DATE(timestamp)
// //     ORDER BY date DESC;
// //   `;

// //   // If a specific date is selected, fetch hourly data
// //   if (date) {
// //     query = `
// //       SELECT 
// //         HOUR(timestamp) AS hour, 
// //         AVG(tds) AS tds, 
// //         AVG(hardness) AS hardness, 
// //         AVG(ph) AS ph, 
// //         AVG(temperature) AS temperature, 
// //         AVG(turbidity) AS turbidity
// //       FROM sensor_data
// //       WHERE DATE(timestamp) = ?
// //       GROUP BY HOUR(timestamp)
// //       ORDER BY hour;
// //     `;
// //   }

// //   db.query(query, date ? [date] : [], (err, results) => {
// //     if (err) {
// //       console.error('Error fetching sensor data:', err);
// //       return res.status(500).json({ message: 'Server error' });
// //     }

// //     // Log the results to the console for debugging purposes
// //     console.log('Results:', results);

// //     // Send the response with the results
// //     res.json(results);
// //   });
// // });

// // // Start the server
// // const PORT = process.env.PORT || 4000;
// // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// // server.js
// // =============================================================================
// require('dotenv').config();
// const express = require('express');
// const mysql = require('mysql2');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(express.json());

// // MySQL Database connection
// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

// db.connect((err) => {
//   if (err) {
//     console.error('Database connection failed:', err);
//     return;
//   }
//   console.log('Connected to MySQL database');
// });

// // Route to get sensor data (default: grouped by date)
// app.get('/api/sensor-data', (req, res) => {
//   const { date } = req.query;

//   // Validate if date is provided and in the correct format
//   if (date && !/^(\d{4})-(\d{2})-(\d{2})$/.test(date)) {
//     return res.status(400).json({ message: 'Invalid date format. Use YYYY-MM-DD.' });
//   }

//   let query = `
//     SELECT 
//       DATE(timestamp) AS date, 
//       AVG(tds) AS tds, 
//       AVG(hardness) AS hardness, 
//       AVG(ph) AS ph, 
//       AVG(temperature) AS temperature, 
//       AVG(turbidity) AS turbidity
//     FROM sensor_data
//     GROUP BY DATE(timestamp)
//     ORDER BY date DESC;
//   `;

//   // If a specific date is selected, fetch hourly data
//   if (date) {
//     query = `
//       SELECT 
//         HOUR(timestamp) AS hour, 
//         AVG(tds) AS tds, 
//         AVG(hardness) AS hardness, 
//         AVG(ph) AS ph, 
//         AVG(temperature) AS temperature, 
//         AVG(turbidity) AS turbidity
//       FROM sensor_data
//       WHERE DATE(timestamp) = ?
//       GROUP BY HOUR(timestamp)
//       ORDER BY hour;
//     `;
//   }

//   db.query(query, date ? [date] : [], (err, results) => {
//     if (err) {
//       console.error('Error fetching sensor data:', err);
//       return res.status(500).json({ message: 'Server error' });
//     }

//     console.log('Results:', results);

//     // Send the response with the results
//     res.json(results);
//   });
// });

// // Start the server
// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// require('dotenv').config();
// const express = require('express');
// const mysql = require('mysql2');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(express.json());

// // MySQL Database connection
// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

// db.connect((err) => {
//   if (err) {
//     console.error('Database connection failed:', err);
//     return;
//   }
//   console.log('Connected to MySQL database');
// });

// // Route to get sensor data with support for date range and specific days
// app.get('/api/sensor-data', (req, res) => {
//   const { start_date, end_date, days } = req.query;

//   // Validate if start_date and end_date are provided and in the correct format
//   if (start_date && !/^(\d{4})-(\d{2})-(\d{2})$/.test(start_date)) {
//     return res.status(400).json({ message: 'Invalid start_date format. Use YYYY-MM-DD.' });
//   }
//   if (end_date && !/^(\d{4})-(\d{2})-(\d{2})$/.test(end_date)) {
//     return res.status(400).json({ message: 'Invalid end_date format. Use YYYY-MM-DD.' });
//   }

//   let query = `SELECT 
//     DATE(timestamp) AS date, 
//     AVG(tds) AS tds, 
//     AVG(hardness) AS hardness, 
//     AVG(ph) AS ph, 
//     AVG(temperature) AS temperature, 
//     AVG(turbidity) AS turbidity
//   FROM sensor_data`;

//   // Add date range filter if provided
//   const queryParams = [];
//   if (start_date && end_date) {
//     query += ` WHERE timestamp BETWEEN ? AND ?`;
//     queryParams.push(start_date, end_date);
//   } else if (start_date) {
//     query += ` WHERE DATE(timestamp) >= ?`;
//     queryParams.push(start_date);
//   } else if (end_date) {
//     query += ` WHERE DATE(timestamp) <= ?`;
//     queryParams.push(end_date);
//   }

//   // Add days filter if provided
//   if (days) {
//     const daysArray = days.split(','); // days is a comma-separated string like "Monday,Tuesday"
//     query += ` AND DAYNAME(timestamp) IN (?) `;
//     queryParams.push(daysArray); // Pass days as an array for the query
//   }

//   // Add GROUP BY and ORDER BY
//   query += `
//     GROUP BY DATE(timestamp)
//     ORDER BY date DESC;
//   `;

//   // Execute the query
//   db.query(query, queryParams, (err, results) => {
//     if (err) {
//       console.error('Error fetching sensor data:', err);
//       return res.status(500).json({ message: 'Server error' });
//     }

//     console.log('Results:', results);

//     // Send the response with the results
//     res.json(results);
//   });
// });

// // Start the server
// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// require('dotenv').config();
// const express = require('express');
// const mysql = require('mysql2');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(express.json());

// // MySQL Database connection
// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

// db.connect((err) => {
//   if (err) {
//     console.error('Database connection failed:', err);
//     return;
//   }
//   console.log('Connected to MySQL database');
// });

// // Route to get sensor data (default: grouped by date)
// app.get('/api/sensor-data', (req, res) => {
//   const { date } = req.query;

//   // Validate if the date is provided and in the correct format (YYYY-MM-DD)
//   if (date && !/^(\d{4})-(\d{2})-(\d{2})$/.test(date)) {
//     return res.status(400).json({ message: 'Invalid date format. Use YYYY-MM-DD.' });
//   }

//   // Base query for data grouped by date (average values per date)
//   let query = `
//     SELECT 
//       DATE(timestamp) AS date, 
//       AVG(tds) AS tds, 
//       AVG(hardness) AS hardness, 
//       AVG(ph) AS ph, 
//       AVG(temperature) AS temperature, 
//       AVG(turbidity) AS turbidity
//     FROM sensor_data
//     GROUP BY DATE(timestamp)
//     ORDER BY date DESC
//   `;

//   // If a specific date is selected, modify the query to get hourly data for that date
//   if (date) {
//     query = `
//       SELECT 
//         HOUR(timestamp) AS hour, 
//         AVG(tds) AS tds, 
//         AVG(hardness) AS hardness, 
//         AVG(ph) AS ph, 
//         AVG(temperature) AS temperature, 
//         AVG(turbidity) AS turbidity
//       FROM sensor_data
//       WHERE DATE(timestamp) = ?
//       GROUP BY HOUR(timestamp)
//       ORDER BY hour
//     `;
//   }

//   // Execute the query with or without the date filter
//   db.query(query, date ? [date] : [], (err, results) => {
//     if (err) {
//       console.error('Error fetching sensor data:', err);
//       return res.status(500).json({ message: 'Server error' });
//     }

//     console.log('Results:', results);

//     // Format the response based on whether a specific date was provided or not
//     if (date) {
//       // Data for a specific date with hourly breakdown
//       res.json(results);
//     } else {
//       // Data for all available dates, grouped by date
//       const formattedResults = results.map((row) => ({
//         date: row.date, // Ensure date is returned without time
//         tds: row.tds,
//         hardness: row.hardness,
//         ph: row.ph,
//         temperature: row.temperature,
//         turbidity: row.turbidity
//       }));

//       res.json(formattedResults);
//     }
//   });
// });

// // Start the server
// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Route to get sensor data (default: grouped by date)

// require('dotenv').config();
// const express = require('express');
// const mysql = require('mysql2');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(express.json());

// // MySQL Database connection
// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

// db.connect((err) => {
//   if (err) {
//     console.error('Database connection failed:', err);
//     return;
//   }
//   console.log('Connected to MySQL database');
// });

// Import required modules
// require('dotenv').config();
// const express = require('express');
// const mysql = require('mysql2');
// const cors = require('cors');

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MySQL Database connection
// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   timezone: 'Z', // Ensures correct UTC handling
// });

// // Connect to the database
// db.connect((err) => {
//   if (err) {
//     console.error('❌ Database connection failed:', err);
//     return;
//   }
//   console.log('✅ Connected to MySQL database');
// });

// // Route to get sensor data (grouped by date or hour)
// app.get('/api/sensor-data', (req, res) => {
//   const { date } = req.query;

//   // Validate date format (YYYY-MM-DD)
//   if (date && !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
//     return res.status(400).json({ message: 'Invalid date format. Use YYYY-MM-DD.' });
//   }

//   let query = `
//     SELECT 
//       DATE(CONVERT_TZ(timestamp, '+00:00', '+05:30')) AS date, 
//       AVG(tds) AS tds, 
//       AVG(hardness) AS hardness, 
//       AVG(ph) AS ph, 
//      AVG(temperature) AS temperature, 
//       AVG(turbidity) AS turbidity
//     FROM sensor_data
//     GROUP BY DATE(CONVERT_TZ(timestamp, '+00:00', '+05:30'))
//     ORDER BY date ASC;
//   `;

//   // If a specific date is provided, fetch hourly data
//   if (date) {
//     query = `
//       SELECT 
//         HOUR(CONVERT_TZ(timestamp, '+00:00', '+05:30')) AS hour, 
//         AVG(tds) AS tds, 
//         AVG(hardness) AS hardness, 
//         AVG(ph) AS ph, 
//         AVG(temperature) AS temperature, 
//         AVG(turbidity) AS turbidity
//       FROM sensor_data
//       WHERE DATE(CONVERT_TZ(timestamp, '+00:00', '+05:30')) = ?
//       GROUP BY hour
//       ORDER BY hour;
//     `;
//   }

//   // Execute query
//   db.query(query, date ? [date] : [], (err, results) => {
//     if (err) {
//       console.error('❌ Error fetching sensor data:', err);
//       return res.status(500).json({ message: 'Server error' });
//     }

//     console.log('✅ Sensor data fetched:', results);
//     res.json(results);
//   });
// });

// // Start the server
// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
// require('dotenv').config();
// const express = require('express');
// const mysql = require('mysql2');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(express.json());

// // MySQL Database connection
// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

// // Database connection check
// db.connect((err) => {
//   if (err) {
//     console.error('Database connection failed:', err);
//     return;
//   }
//   console.log('Connected to MySQL database');
// });

// // Route to get sensor data (grouped by date or hourly data if a date is selected)
// app.get('/api/sensor-data', (req, res) => {
//   const { date } = req.query;

//   // Validate if date is provided and in the correct format
//   if (date && !/^(\d{4})-(\d{2})-(\d{2})$/.test(date)) {
//     return res.status(400).json({ message: 'Invalid date format. Use YYYY-MM-DD.' });
//   }

//   let query = `
//  SELECT 
//   date, 
//   avg_tds, 
//   avg_hardness, 
//   avg_ph, 
//   avg_temperature, 
//   avg_turbidity
// FROM sensor_data_grouped_by_date
// ORDER BY date ASC;





// `;



//   // If a specific date is selected, fetch hourly data
//   if (date) {
//     query = `
//       SELECT 
//         HOUR(timestamp) AS hour, 
//         AVG(tds) AS tds, 
//         AVG(hardness) AS hardness, 
//         AVG(ph) AS ph, 
//         AVG(temperature) AS temperature, 
//         AVG(turbidity) AS turbidity
//       FROM sensor_data
//       WHERE DATE(timestamp) = ?
//       GROUP BY HOUR(timestamp)
//       ORDER BY hour;
//     `;
//   }

//   db.query(query, date ? [date] : [], (err, results) => {
//     if (err) {
//       console.error('Error fetching sensor data:', err);
//       return res.status(500).json({ message: 'Server error' });
//     }

//     console.log('Results:', results);

//     // Send the response with the results
//     res.json(results);
//   });
// });

// // Start the server
// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Check if environment variables are loaded
if (!process.env.DB_HOST || !process.env.DB_USER || !process.env.DB_PASSWORD || !process.env.DB_NAME) {
    console.error("❌ Missing database configuration in .env file.");
    process.exit(1);
}

// MySQL Database Connection using Connection Pool
const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10, // Max 10 concurrent connections
    queueLimit: 0
});

// Check Database Connection
db.getConnection((err, connection) => {
    if (err) {
        console.error("❌ Database connection failed:", err.message);
        process.exit(1);
    } else {
        console.log("✅ Connected to MySQL database.");
        connection.release(); // Release the connection back to the pool
    }
});

// Route to fetch sensor data
app.get('/api/sensor-data', (req, res) => {
    const { date } = req.query;

    // Validate if the provided date format is correct
    if (date && !/^(\d{4})-(\d{2})-(\d{2})$/.test(date)) {
        return res.status(400).json({ message: 'Invalid date format. Use YYYY-MM-DD.' });
    }

    let query = `
         SELECT 
        DATE_FORMAT(date, '%Y-%m-%d') AS date, 
        avg_tds as tds, 
        avg_hardness as hardness, 
        avg_ph as ph, 
        avg_temperature as temperature, 
        avg_turbidity as turbidity
    FROM  sensor_data_aggregated_by_date
    ORDER BY date ASC;
    `;

    const params = [];

    // If a specific date is provided, fetch hourly data
    if (date) {
        query = `
            SELECT 
                HOUR(timestamp) AS hour, 
                AVG(tds) AS tds, 
                AVG(hardness) AS hardness, 
                AVG(ph) AS ph, 
                AVG(temperature) AS temperature, 
                AVG(turbidity) AS turbidity
            FROM sensor_data
            WHERE DATE(timestamp) = ?
            GROUP BY HOUR(timestamp)
            ORDER BY hour ASC;
        `;
        params.push(date);
    }

    db.query(query, params, (err, results) => {
        if (err) {
            console.error("❌ Error fetching sensor data:", err.message);
            return res.status(500).json({ message: 'Internal Server Error' });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: 'No data found for the selected date.' });
        }

        console.log("📊 Data fetched successfully:", results.length, "records.");
        res.json(results);
        console.log(results);
    });
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
