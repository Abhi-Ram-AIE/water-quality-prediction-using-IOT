// const admin = require('firebase-admin');
// const mysql = require('mysql2');

// // Initialize Firebase Admin SDK
// const serviceAccount = require("D:/Downloads/water-1309d-firebase-adminsdk-fbsvc-2afc225bb6.json"); // Replace with your path to Firebase service account key

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: 'https://water-1309d-default-rtdb.firebaseio.com' // Replace with your Firebase database URL
// });

// // MySQL connection setup
// const db = mysql.createConnection({
//   host: 'localhost', // Your MySQL server address
//   user: 'root', // Your MySQL username
//   password: 'hrudhay', // Your MySQL password
//   database: 'sensor_data_db' // Your MySQL database name
// });

// db.connect(err => {
//   if (err) console.error("❌ MySQL Connection Error:", err);
//   else console.log("✅ Connected to MySQL Database.");
// });

// // Firebase Realtime Database reference to the correct path
// const ref = admin.database().ref('sensors');  // Path adjusted to point to the "sensors" node

// // Fetch the latest sensor data once
// ref.once('value', (snapshot) => {
//   const sensorData = snapshot.val(); // Get the sensor data from Firebase
  
//   // Ensure we get the correct sensor data
//   if (sensorData) {
//     // Extract sensor data
//     const extractedData = {
//       tds: sensorData.TDS !== undefined ? sensorData.TDS : null,
//       hardness: sensorData.hardness !== undefined ? sensorData.hardness : null,
//       ph: sensorData.pH !== undefined ? sensorData.pH : null,
//       temperature: sensorData.temperature !== undefined ? sensorData.temperature : null,
//       turbidity: sensorData.turbidity !== undefined ? sensorData.turbidity : null
//     };

//     console.log('📡 New Data Received:', extractedData);

//     // Check if any sensor data is missing
//     if (Object.values(extractedData).some(value => value === null)) {
//       console.error('⚠️ Sensor data is incomplete:', extractedData);
//       return;
//     }

//     // Prepare SQL query to insert data into MySQL
//     const query = `
//       INSERT INTO sensor_data (tds, hardness, ph, temperature, turbidity)
//       VALUES (?, ?, ?, ?, ?)
//     `;

//     // Insert data into MySQL
//     db.execute(query, Object.values(extractedData), (err, results) => {
//       if (err) {
//         console.error('❌ Error inserting data into MySQL:', err);
//       } else {
//         console.log('✅ Data inserted into MySQL successfully:', results);
//       }
//     });
//   } else {
//     console.log('⚠️ No sensor data available');
//   }
// });
const admin = require('firebase-admin');
const mysql = require('mysql2');

// Initialize Firebase Admin SDK
const serviceAccount = require("D:/Downloads/water-1309d-firebase-adminsdk-fbsvc-2afc225bb6.json"); // Replace with your path to Firebase service account key

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://water-1309d-default-rtdb.firebaseio.com' // Replace with your Firebase database URL
});

// MySQL connection setup
const db = mysql.createConnection({
  host: 'localhost', // Your MySQL server address
  user: 'root', // Your MySQL username
  password: 'hrudhay', // Your MySQL password
  database: 'sensor_data_db' // Your MySQL database name
});

db.connect(err => {
  if (err) console.error("❌ MySQL Connection Error:", err);
  else console.log("✅ Connected to MySQL Database.");
});

// Firebase Realtime Database reference to the correct path
const ref = admin.database().ref('sensors');  // Path adjusted to point to the "sensors" node

// Track the last insertion time to avoid multiple inserts in quick succession
let lastInsertTime = null; // Timestamp of the last insert

// Function to handle insert logic
function handleInsert(extractedData) {
  const currentTime = new Date().getTime(); // Current timestamp in milliseconds
  
  // Check if data was inserted in the last 60 seconds
  if (lastInsertTime && (currentTime - lastInsertTime) <= 60000) {
    console.log('⚠️ Duplicate data detected within 60 seconds, skipping insert.');
    return; // Skip insert if the time window is less than 60 seconds
  }

  // Prepare SQL query to insert data into MySQL
  const query = `
    INSERT INTO sensor_data (tds, hardness, ph, temperature, turbidity)
    VALUES (?, ?, ?, ?, ?)
  `;

  // Insert data into MySQL
  db.execute(query, Object.values(extractedData), (err, results) => {
    if (err) {
      console.error('❌ Error inserting data into MySQL:', err);
    } else {
      console.log('✅ Data inserted into MySQL successfully:', results);
      lastInsertTime = currentTime; // Update the last insert timestamp
    }
  });
}

// Fetch the latest sensor data once
ref.once('value', (snapshot) => {
  const sensorData = snapshot.val(); // Get the sensor data from Firebase
  
  // Ensure we get the correct sensor data
  if (sensorData) {
    // Extract sensor data
    const extractedData = {
      tds: sensorData.TDS !== undefined ? sensorData.TDS : null,
      hardness: sensorData.hardness !== undefined ? sensorData.hardness : null,
      ph: sensorData.pH !== undefined ? sensorData.pH : null,
      temperature: sensorData.temperature !== undefined ? sensorData.temperature : null,
      turbidity: sensorData.turbidity !== undefined ? sensorData.turbidity : null
    };

    console.log('📡 New Data Received:', extractedData);

    // Check if any sensor data is missing
    if (Object.values(extractedData).some(value => value === null)) {
      console.error('⚠️ Sensor data is incomplete:', extractedData);
      return;
    }

    // Call the function to handle the insert logic
    handleInsert(extractedData);
  } else {
    console.log('⚠️ No sensor data available');
  }
});
