// // // // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // // // import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
// // // // // // // // // // import { database } from "../firebase";
// // // // // // // // // // import { ref, onValue } from "firebase/database";

// // // // // // // // // // import { Card, CardContent, Typography } from "@mui/material";

// // // // // // // // // // const SensorDashboard = () => {
// // // // // // // // // //   const [sensorData, setSensorData] = useState([]);

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     const sensorRef = ref(database, "sensorData");
// // // // // // // // // //     onValue(sensorRef, (snapshot) => {
// // // // // // // // // //       const data = snapshot.val();
// // // // // // // // // //       if (data) {
// // // // // // // // // //         const formattedData = Object.keys(data).map((key) => ({
// // // // // // // // // //           timestamp: key,
// // // // // // // // // //           ...data[key],
// // // // // // // // // //         }));
// // // // // // // // // //         setSensorData(formattedData);
// // // // // // // // // //       }
// // // // // // // // // //     });
// // // // // // // // // //   }, []);

// // // // // // // // // //   return (
// // // // // // // // // //     <Card sx={{ mt: 3, p: 3, boxShadow: 3, borderRadius: 2 }}>
// // // // // // // // // //       <CardContent>
// // // // // // // // // //         <Typography variant="h4" align="center" gutterBottom>
// // // // // // // // // //           Sensor Data Dashboard
// // // // // // // // // //         </Typography>
// // // // // // // // // //         <ResponsiveContainer width="100%" height={400}>
// // // // // // // // // //           <LineChart data={sensorData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
// // // // // // // // // //             <CartesianGrid strokeDasharray="3 3" />
// // // // // // // // // //             <XAxis dataKey="timestamp" />
// // // // // // // // // //             <YAxis />
// // // // // // // // // //             <Tooltip />
// // // // // // // // // //             <Legend />
// // // // // // // // // //             <Line type="monotone" dataKey="pH" stroke="#8884d8" activeDot={{ r: 8 }} />
// // // // // // // // // //             <Line type="monotone" dataKey="TDS" stroke="#82ca9d" />
// // // // // // // // // //             <Line type="monotone" dataKey="turbidity" stroke="#ff7300" />
// // // // // // // // // //           </LineChart>
// // // // // // // // // //         </ResponsiveContainer>
// // // // // // // // // //       </CardContent>
// // // // // // // // // //     </Card>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default SensorDashboard;

// // // // // // // // // // // Firebase configuration
// // // // // // // // // // import { initializeApp } from "firebase/app";
// // // // // // // // // // import { getDatabase } from "firebase/database";

// // // // // // // // // // const firebaseConfig = {
// // // // // // // // // //   apiKey: "YOUR_API_KEY",
// // // // // // // // // //   authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
// // // // // // // // // //   databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
// // // // // // // // // //   projectId: "YOUR_PROJECT_ID",
// // // // // // // // // //   storageBucket: "YOUR_PROJECT_ID.appspot.com",
// // // // // // // // // //   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
// // // // // // // // // //   appId: "YOUR_APP_ID"
// // // // // // // // // // };

// // // // // // // // // // const app = initializeApp(firebaseConfig);
// // // // // // // // // // const database = getDatabase(app);

// // // // // // // // // // export { database };

// // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // import { initializeApp } from 'firebase/app';
// // // // // // // // // // import { getDatabase, ref, onValue } from 'firebase/database';
// // // // // // // // // // import { Bar, Pie } from 'react-chartjs-2';
// // // // // // // // // // import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
// // // // // // // // // // import DatePicker from 'react-datepicker';
// // // // // // // // // // import "react-datepicker/dist/react-datepicker.css";
// // // // // // // // // // import { Card, Grid, Button, Typography, Box } from '@mui/material';

// // // // // // // // // // // Firebase config (use your Firebase project details)
// // // // // // // // // // const firebaseConfig = {
// // // // // // // // // //     apiKey: "AIzaSyA...",
// // // // // // // // // //     authDomain: "water-1309d.firebaseapp.com",
// // // // // // // // // //     databaseURL: "https://water-1309d-default-rtdb.firebaseio.com/",
// // // // // // // // // //     projectId: "water-1309d",
// // // // // // // // // //     storageBucket: "water-1309d.appspot.com",
// // // // // // // // // //     messagingSenderId: "294970534740",
// // // // // // // // // //     appId: "1:294970534740:web:6a7f4978585b31a42ab6c1",
// // // // // // // // // //     measurementId: "G-MK1QVFG39W",
// // // // // // // // // // };

// // // // // // // // // // // Initialize Firebase
// // // // // // // // // // const app = initializeApp(firebaseConfig);
// // // // // // // // // // const db = getDatabase(app);

// // // // // // // // // // // Register necessary components of Chart.js
// // // // // // // // // // ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

// // // // // // // // // // const Dashboard = () => {
// // // // // // // // // //     const [sensorData, setSensorData] = useState(null);
// // // // // // // // // //     const [selectedDate, setSelectedDate] = useState(new Date());
// // // // // // // // // //     const [chartType, setChartType] = useState('bar'); // Default chart type is 'bar'

// // // // // // // // // //     useEffect(() => {
// // // // // // // // // //         const dbRef = ref(db, 'sensors');
// // // // // // // // // //         onValue(dbRef, (snapshot) => {
// // // // // // // // // //             setSensorData(snapshot.val());
// // // // // // // // // //         });

// // // // // // // // // //         // Cleanup on unmount
// // // // // // // // // //         return () => {
// // // // // // // // // //             // Remove the listener when the component unmounts
// // // // // // // // // //         };
// // // // // // // // // //     }, []);

// // // // // // // // // //     // Prepare chart data for Bar Chart
// // // // // // // // // //     const chartDataBar = {
// // // // // // // // // //         labels: sensorData ? Object.keys(sensorData) : [],
// // // // // // // // // //         datasets: [
// // // // // // // // // //             {
// // // // // // // // // //                 label: 'Sensor Values',
// // // // // // // // // //                 data: sensorData ? Object.values(sensorData) : [],
// // // // // // // // // //                 backgroundColor: 'rgba(255, 99, 132, 0.6)',
// // // // // // // // // //                 borderColor: 'rgba(255, 99, 132, 1)',
// // // // // // // // // //                 borderWidth: 1,
// // // // // // // // // //             },
// // // // // // // // // //         ],
// // // // // // // // // //     };

// // // // // // // // // //     // Prepare chart data for Pie Chart
// // // // // // // // // //     const chartDataPie = {
// // // // // // // // // //         labels: sensorData ? Object.keys(sensorData) : [],
// // // // // // // // // //         datasets: [
// // // // // // // // // //             {
// // // // // // // // // //                 label: 'Sensor Proportions',
// // // // // // // // // //                 data: sensorData ? Object.values(sensorData) : [],
// // // // // // // // // //                 backgroundColor: [
// // // // // // // // // //                     'rgba(75, 192, 192, 0.7)',
// // // // // // // // // //                     'rgba(153, 102, 255, 0.7)',
// // // // // // // // // //                     'rgba(255, 159, 64, 0.7)',
// // // // // // // // // //                     'rgba(54, 162, 235, 0.7)',
// // // // // // // // // //                     'rgba(255, 99, 132, 0.7)',
// // // // // // // // // //                 ],
// // // // // // // // // //                 borderColor: [
// // // // // // // // // //                     'rgba(75, 192, 192, 1)',
// // // // // // // // // //                     'rgba(153, 102, 255, 1)',
// // // // // // // // // //                     'rgba(255, 159, 64, 1)',
// // // // // // // // // //                     'rgba(54, 162, 235, 1)',
// // // // // // // // // //                     'rgba(255, 99, 132, 1)',
// // // // // // // // // //                 ],
// // // // // // // // // //                 borderWidth: 1,
// // // // // // // // // //             },
// // // // // // // // // //         ],
// // // // // // // // // //     };

// // // // // // // // // //     // Chart options for customization
// // // // // // // // // //     const chartOptions = {
// // // // // // // // // //         responsive: true,
// // // // // // // // // //         plugins: {
// // // // // // // // // //             title: {
// // // // // // // // // //                 display: true,
// // // // // // // // // //                 text: 'Sensor Dashboard',
// // // // // // // // // //                 font: {
// // // // // // // // // //                     size: 24,
// // // // // // // // // //                     weight: 'bold',
// // // // // // // // // //                 },
// // // // // // // // // //                 color: '#333',
// // // // // // // // // //             },
// // // // // // // // // //             tooltip: {
// // // // // // // // // //                 callbacks: {
// // // // // // // // // //                     label: (context) => `${context.dataset.label}: ${context.raw}`,
// // // // // // // // // //                 },
// // // // // // // // // //             },
// // // // // // // // // //         },
// // // // // // // // // //         scales: {
// // // // // // // // // //             y: {
// // // // // // // // // //                 beginAtZero: true,
// // // // // // // // // //                 grid: {
// // // // // // // // // //                     color: '#ddd',
// // // // // // // // // //                 },
// // // // // // // // // //             },
// // // // // // // // // //         },
// // // // // // // // // //     };

// // // // // // // // // //     return (
// // // // // // // // // //         <Box sx={{ padding: 3, backgroundColor: '#f5f5f5', height: '100vh' }}>
// // // // // // // // // //             <Typography variant="h3" align="center" color="primary" gutterBottom>
// // // // // // // // // //                 Sensor Data Dashboard
// // // // // // // // // //             </Typography>
            
// // // // // // // // // //             {/* Date Picker aligned to the right side */}
// // // // // // // // // //             <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 3 }}>
// // // // // // // // // //                 <Box sx={{ textAlign: 'right' }}>
// // // // // // // // // //                     <Typography variant="h5" color="primary" gutterBottom>Select Date & Time</Typography>
// // // // // // // // // //                     <DatePicker 
// // // // // // // // // //                         selected={selectedDate} 
// // // // // // // // // //                         onChange={(date) => setSelectedDate(date)} 
// // // // // // // // // //                         showTimeSelect
// // // // // // // // // //                         timeFormat="HH:mm"
// // // // // // // // // //                         timeIntervals={15}
// // // // // // // // // //                         dateFormat="MMMM d, yyyy h:mm aa"
// // // // // // // // // //                         timeCaption="Time"
// // // // // // // // // //                         className="datepicker"
// // // // // // // // // //                     />
// // // // // // // // // //                 </Box>
// // // // // // // // // //             </Box>

// // // // // // // // // //             {/* Chart Type Selection */}
// // // // // // // // // //             <Box sx={{ marginBottom: 3 }}>
// // // // // // // // // //                 <Typography variant="h5" color="primary" gutterBottom>Select Chart Type</Typography>
// // // // // // // // // //                 <Button variant="contained" color="primary" sx={{ marginRight: 2 }} onClick={() => setChartType('bar')}>Bar Chart</Button>
// // // // // // // // // //                 <Button variant="contained" color="secondary" onClick={() => setChartType('pie')}>Pie Chart</Button>
// // // // // // // // // //             </Box>

// // // // // // // // // //             {/* Displaying Selected Chart */}
// // // // // // // // // //             <Box sx={{ display: 'flex', justifyContent: 'center' }}>
// // // // // // // // // //                 {sensorData ? (
// // // // // // // // // //                     chartType === 'bar' ? (
// // // // // // // // // //                         <div style={{ height: '350px', width: '450px' }}>
// // // // // // // // // //                             <Bar data={chartDataBar} options={chartOptions} />
// // // // // // // // // //                         </div>
// // // // // // // // // //                     ) : (
// // // // // // // // // //                         <div style={{ height: '300px', width: '400px' }}>
// // // // // // // // // //                             <Pie data={chartDataPie} options={chartOptions} />
// // // // // // // // // //                         </div>
// // // // // // // // // //                     )
// // // // // // // // // //                 ) : (
// // // // // // // // // //                     <Typography variant="h6" color="textSecondary">Loading sensor data...</Typography>
// // // // // // // // // //                 )}
// // // // // // // // // //             </Box>
// // // // // // // // // //         </Box>
// // // // // // // // // //     );
// // // // // // // // // // };

// // // // // // // // // // export default Dashboard;

// // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // import axios from 'axios';
// // // // // // // // // import { Bar, Pie } from 'react-chartjs-2';
// // // // // // // // // import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
// // // // // // // // // import DatePicker from 'react-datepicker';
// // // // // // // // // import "react-datepicker/dist/react-datepicker.css";
// // // // // // // // // import { Box, Button, Typography, CircularProgress } from '@mui/material';

// // // // // // // // // // Register necessary components of Chart.js
// // // // // // // // // ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

// // // // // // // // // const Dashboard = () => {
// // // // // // // // //     const [sensorData, setSensorData] = useState([]);
// // // // // // // // //     const [selectedDate, setSelectedDate] = useState(new Date());
// // // // // // // // //     const [chartType, setChartType] = useState('bar'); // Default chart type is 'bar'
// // // // // // // // //     const [loading, setLoading] = useState(false); // Loading state

// // // // // // // // //     useEffect(() => {
// // // // // // // // //         // Convert selectedDate to YYYY-MM-DD format with time
// // // // // // // // //         const formattedDate = selectedDate.toISOString(); // Date with time, e.g., 2025-03-30T14:00:00.000Z

// // // // // // // // //         setLoading(true); // Start loading
// // // // // // // // //         // Fetch data from the backend API for the selected date
// // // // // // // // //         axios.get(`http://localhost:5000/api/sensor-data?datetime=${formattedDate}`)
// // // // // // // // //             .then((response) => {
// // // // // // // // //                 setSensorData(response.data);
// // // // // // // // //                 setLoading(false); // Stop loading
// // // // // // // // //             })
// // // // // // // // //             .catch((error) => {
// // // // // // // // //                 console.error("Error fetching data from API: ", error);
// // // // // // // // //                 setLoading(false); // Stop loading even on error
// // // // // // // // //             });
// // // // // // // // //     }, [selectedDate]);  // Re-run when the selected date changes

// // // // // // // // //     // Prepare chart data for Bar Chart
// // // // // // // // //     const chartDataBar = {
// // // // // // // // //         labels: sensorData.map((data) => data.timestamp),
// // // // // // // // //         datasets: [
// // // // // // // // //             {
// // // // // // // // //                 label: 'TDS',
// // // // // // // // //                 data: sensorData.map((data) => data.tds),
// // // // // // // // //                 backgroundColor: 'rgba(255, 99, 132, 0.6)',
// // // // // // // // //                 borderColor: 'rgba(255, 99, 132, 1)',
// // // // // // // // //                 borderWidth: 1,
// // // // // // // // //             },
// // // // // // // // //             {
// // // // // // // // //                 label: 'Hardness',
// // // // // // // // //                 data: sensorData.map((data) => data.hardness),
// // // // // // // // //                 backgroundColor: 'rgba(75, 192, 192, 0.6)',
// // // // // // // // //                 borderColor: 'rgba(75, 192, 192, 1)',
// // // // // // // // //                 borderWidth: 1,
// // // // // // // // //             },
// // // // // // // // //             {
// // // // // // // // //                 label: 'pH',
// // // // // // // // //                 data: sensorData.map((data) => data.ph),
// // // // // // // // //                 backgroundColor: 'rgba(54, 162, 235, 0.6)',
// // // // // // // // //                 borderColor: 'rgba(54, 162, 235, 1)',
// // // // // // // // //                 borderWidth: 1,
// // // // // // // // //             },
// // // // // // // // //             {
// // // // // // // // //                 label: 'Temperature',
// // // // // // // // //                 data: sensorData.map((data) => data.temperature),
// // // // // // // // //                 backgroundColor: 'rgba(255, 159, 64, 0.6)',
// // // // // // // // //                 borderColor: 'rgba(255, 159, 64, 1)',
// // // // // // // // //                 borderWidth: 1,
// // // // // // // // //             },
// // // // // // // // //             {
// // // // // // // // //                 label: 'Turbidity',
// // // // // // // // //                 data: sensorData.map((data) => data.turbidity),
// // // // // // // // //                 backgroundColor: 'rgba(153, 102, 255, 0.6)',
// // // // // // // // //                 borderColor: 'rgba(153, 102, 255, 1)',
// // // // // // // // //                 borderWidth: 1,
// // // // // // // // //             },
// // // // // // // // //         ],
// // // // // // // // //     };

// // // // // // // // //     // Prepare chart data for Pie Chart
// // // // // // // // //     const chartDataPie = {
// // // // // // // // //         labels: ['TDS', 'Hardness', 'pH', 'Temperature', 'Turbidity'],
// // // // // // // // //         datasets: [
// // // // // // // // //             {
// // // // // // // // //                 label: 'Sensor Proportions',
// // // // // // // // //                 data: [
// // // // // // // // //                     sensorData.reduce((acc, data) => acc + data.tds, 0) / sensorData.length,
// // // // // // // // //                     sensorData.reduce((acc, data) => acc + data.hardness, 0) / sensorData.length,
// // // // // // // // //                     sensorData.reduce((acc, data) => acc + data.ph, 0) / sensorData.length,
// // // // // // // // //                     sensorData.reduce((acc, data) => acc + data.temperature, 0) / sensorData.length,
// // // // // // // // //                     sensorData.reduce((acc, data) => acc + data.turbidity, 0) / sensorData.length,
// // // // // // // // //                 ],
// // // // // // // // //                 backgroundColor: [
// // // // // // // // //                     'rgba(75, 192, 192, 0.7)',
// // // // // // // // //                     'rgba(153, 102, 255, 0.7)',
// // // // // // // // //                     'rgba(255, 159, 64, 0.7)',
// // // // // // // // //                     'rgba(54, 162, 235, 0.7)',
// // // // // // // // //                     'rgba(255, 99, 132, 0.7)',
// // // // // // // // //                 ],
// // // // // // // // //                 borderColor: [
// // // // // // // // //                     'rgba(75, 192, 192, 1)',
// // // // // // // // //                     'rgba(153, 102, 255, 1)',
// // // // // // // // //                     'rgba(255, 159, 64, 1)',
// // // // // // // // //                     'rgba(54, 162, 235, 1)',
// // // // // // // // //                     'rgba(255, 99, 132, 1)',
// // // // // // // // //                 ],
// // // // // // // // //                 borderWidth: 1,
// // // // // // // // //             },
// // // // // // // // //         ],
// // // // // // // // //     };

// // // // // // // // //     // Chart options for customization
// // // // // // // // //     const chartOptions = {
// // // // // // // // //         responsive: true,
// // // // // // // // //         plugins: {
// // // // // // // // //             title: {
// // // // // // // // //                 display: true,
// // // // // // // // //                 text: 'Sensor Dashboard',
// // // // // // // // //                 font: {
// // // // // // // // //                     size: 24,
// // // // // // // // //                     weight: 'bold',
// // // // // // // // //                 },
// // // // // // // // //                 color: '#333',
// // // // // // // // //             },
// // // // // // // // //             tooltip: {
// // // // // // // // //                 callbacks: {
// // // // // // // // //                     label: (context) => `${context.dataset.label}: ${context.raw}`,
// // // // // // // // //                 },
// // // // // // // // //             },
// // // // // // // // //         },
// // // // // // // // //         scales: {
// // // // // // // // //             y: {
// // // // // // // // //                 beginAtZero: true,
// // // // // // // // //                 grid: {
// // // // // // // // //                     color: '#ddd',
// // // // // // // // //                 },
// // // // // // // // //             },
// // // // // // // // //         },
// // // // // // // // //     };

// // // // // // // // //     return (
// // // // // // // // //         <Box sx={{ padding: 3, backgroundColor: '#f5f5f5', height: '100vh' }}>
// // // // // // // // //             <Typography variant="h3" align="center" color="primary" gutterBottom>
// // // // // // // // //                 Sensor Data Dashboard
// // // // // // // // //             </Typography>

// // // // // // // // //             {/* Date Picker */}
// // // // // // // // //             <Box sx={{ marginBottom: 3, display: 'flex', justifyContent: 'center' }}>
// // // // // // // // //                 <DatePicker
// // // // // // // // //                     selected={selectedDate}
// // // // // // // // //                     onChange={date => setSelectedDate(date)}
// // // // // // // // //                     dateFormat="yyyy-MM-dd"
// // // // // // // // //                     maxDate={new Date()}  // Disable future dates
// // // // // // // // //                     showYearDropdown
// // // // // // // // //                     scrollableYearDropdown
// // // // // // // // //                     placeholderText="Select a Date"
// // // // // // // // //                 />
// // // // // // // // //             </Box>

// // // // // // // // //             {/* Loading Spinner */}
// // // // // // // // //             {loading && (
// // // // // // // // //                 <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
// // // // // // // // //                     <CircularProgress />
// // // // // // // // //                 </Box>
// // // // // // // // //             )}

// // // // // // // // //             {/* Chart Type Selection */}
// // // // // // // // //             <Box sx={{ marginBottom: 3, display: 'flex', justifyContent: 'center' }}>
// // // // // // // // //                 <Button variant="contained" color="primary" sx={{ marginRight: 2 }} onClick={() => setChartType('bar')}>Bar Chart</Button>
// // // // // // // // //                 <Button variant="contained" color="secondary" onClick={() => setChartType('pie')}>Pie Chart</Button>
// // // // // // // // //             </Box>

// // // // // // // // //             {/* Displaying Selected Chart */}
// // // // // // // // //             <Box sx={{ display: 'flex', justifyContent: 'center' }}>
// // // // // // // // //                 {sensorData.length > 0 ? (
// // // // // // // // //                     chartType === 'bar' ? (
// // // // // // // // //                         <div style={{ height: '350px', width: '450px' }}>
// // // // // // // // //                             <Bar data={chartDataBar} options={chartOptions} />
// // // // // // // // //                         </div>
// // // // // // // // //                     ) : (
// // // // // // // // //                         <div style={{ height: '300px', width: '400px' }}>
// // // // // // // // //                             <Pie data={chartDataPie} options={chartOptions} />
// // // // // // // // //                         </div>
// // // // // // // // //                     )
// // // // // // // // //                 ) : (
// // // // // // // // //                     !loading && <Typography variant="h6" color="textSecondary">No data found for this date.</Typography>
// // // // // // // // //                 )}
// // // // // // // // //             </Box>
// // // // // // // // //         </Box>
// // // // // // // // //     );
// // // // // // // // // };

// // // // // // // // // export default Dashboard;
// // // // // // // // // import React, { useState, useEffect, useRef } from 'react';
// // // // // // // // // import axios from 'axios';
// // // // // // // // // import { Line } from 'react-chartjs-2';
// // // // // // // // // import { Pie } from 'react-chartjs-2';
// // // // // // // // // import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, ArcElement } from 'chart.js'; // Add ArcElement
// // // // // // // // // import DatePicker from 'react-datepicker';
// // // // // // // // // import "react-datepicker/dist/react-datepicker.css";
// // // // // // // // // import { Box, CircularProgress, Typography, Card, CardContent } from '@mui/material';

// // // // // // // // // // Register necessary components of Chart.js
// // // // // // // // // ChartJS.register(ArcElement, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

// // // // // // // // // const Dashboard = () => {
// // // // // // // // //     const [sensorData, setSensorData] = useState([]);
// // // // // // // // //     const [selectedDate, setSelectedDate] = useState(new Date());
// // // // // // // // //     const [loading, setLoading] = useState(false); // Loading state
// // // // // // // // //     const chartRefs = useRef([]);  // Reference to store chart instances

// // // // // // // // //     // Fetch data based on selected date
// // // // // // // // //     useEffect(() => {
// // // // // // // // //         const formattedDate = selectedDate.toISOString(); // Convert to ISO format for API request
// // // // // // // // //         setLoading(true);

// // // // // // // // //         axios.get(`http://localhost:5000/api/sensor-data?datetime=${formattedDate}`)
// // // // // // // // //             .then((response) => {
// // // // // // // // //                 setSensorData(response.data);
// // // // // // // // //                 setLoading(false);
// // // // // // // // //             })
// // // // // // // // //             .catch((error) => {
// // // // // // // // //                 console.error("Error fetching data from API: ", error);
// // // // // // // // //                 setLoading(false);
// // // // // // // // //             });
// // // // // // // // //     }, [selectedDate]);

// // // // // // // // //     // Prepare chart data for each sensor
// // // // // // // // //     const prepareChartData = (sensor) => ({
// // // // // // // // //         labels: sensorData.map((data) => data.timestamp),
// // // // // // // // //         datasets: [
// // // // // // // // //             {
// // // // // // // // //                 label: sensor,
// // // // // // // // //                 data: sensorData.map((data) => data[sensor]),
// // // // // // // // //                 borderColor: 'rgba(75, 192, 192, 1)',
// // // // // // // // //                 backgroundColor: 'rgba(75, 192, 192, 0.2)',
// // // // // // // // //                 fill: false,
// // // // // // // // //                 borderWidth: 2,
// // // // // // // // //             },
// // // // // // // // //         ],
// // // // // // // // //     });

// // // // // // // // //     // Pie chart data
// // // // // // // // //     const pieChartData = {
// // // // // // // // //         labels: ['pH', 'TDS', 'Turbidity', 'Temperature', 'Hardness'],
// // // // // // // // //         datasets: [
// // // // // // // // //             {
// // // // // // // // //                 label: 'Sensor Distribution',
// // // // // // // // //                 data: [
// // // // // // // // //                     sensorData.reduce((acc, curr) => acc + curr.ph, 0),
// // // // // // // // //                     sensorData.reduce((acc, curr) => acc + curr.tds, 0),
// // // // // // // // //                     sensorData.reduce((acc, curr) => acc + curr.turbidity, 0),
// // // // // // // // //                     sensorData.reduce((acc, curr) => acc + curr.temperature, 0),
// // // // // // // // //                     sensorData.reduce((acc, curr) => acc + curr.hardness, 0),
// // // // // // // // //                 ],
// // // // // // // // //                 backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#FF9F40'],
// // // // // // // // //                 hoverOffset: 4,
// // // // // // // // //             },
// // // // // // // // //         ],
// // // // // // // // //     };

// // // // // // // // //     // Chart options
// // // // // // // // //     const chartOptions = {
// // // // // // // // //         responsive: true,
// // // // // // // // //         plugins: {
// // // // // // // // //             title: {
// // // // // // // // //                 display: true,
// // // // // // // // //                 text: 'Sensor Data',
// // // // // // // // //                 font: {
// // // // // // // // //                     size: 18,
// // // // // // // // //                 },
// // // // // // // // //             },
// // // // // // // // //             tooltip: {
// // // // // // // // //                 callbacks: {
// // // // // // // // //                     label: (context) => `${context.dataset.label}: ${context.raw}`,
// // // // // // // // //                 },
// // // // // // // // //             },
// // // // // // // // //         },
// // // // // // // // //         scales: {
// // // // // // // // //             y: {
// // // // // // // // //                 beginAtZero: true,
// // // // // // // // //                 grid: {
// // // // // // // // //                     color: '#ddd',
// // // // // // // // //                 },
// // // // // // // // //             },
// // // // // // // // //         },
// // // // // // // // //     };

// // // // // // // // //     // Cleanup chart instances on unmount
// // // // // // // // //     useEffect(() => {
// // // // // // // // //         return () => {
// // // // // // // // //             chartRefs.current.forEach(chart => {
// // // // // // // // //                 if (chart) {
// // // // // // // // //                     chart.destroy();
// // // // // // // // //                 }
// // // // // // // // //             });
// // // // // // // // //         };
// // // // // // // // //     }, [sensorData]); // Runs when sensorData changes

// // // // // // // // //     return (
// // // // // // // // //         <Box sx={{ padding: 3, backgroundColor: '#f5f5f5', height: '100vh' }}>
// // // // // // // // //             <Typography variant="h3" align="center" color="primary" gutterBottom>
// // // // // // // // //                 Sensor Data Dashboard
// // // // // // // // //             </Typography>

// // // // // // // // //             {/* Date Picker */}
// // // // // // // // //             <Box sx={{ marginBottom: 3, display: 'flex', justifyContent: 'center' }}>
// // // // // // // // //                 <DatePicker
// // // // // // // // //                     selected={selectedDate}
// // // // // // // // //                     onChange={date => setSelectedDate(date)}
// // // // // // // // //                     dateFormat="yyyy-MM-dd"
// // // // // // // // //                     maxDate={new Date()} // Disable future dates
// // // // // // // // //                     showYearDropdown
// // // // // // // // //                     scrollableYearDropdown
// // // // // // // // //                     placeholderText="Select a Date"
// // // // // // // // //                 />
// // // // // // // // //             </Box>

// // // // // // // // //             {/* Loading Spinner */}
// // // // // // // // //             {loading && (
// // // // // // // // //                 <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
// // // // // // // // //                     <CircularProgress />
// // // // // // // // //                 </Box>
// // // // // // // // //             )}

// // // // // // // // //             {/* Visualizations Container */}
// // // // // // // // //             {!loading && sensorData.length > 0 ? (
// // // // // // // // //                 <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
// // // // // // // // //                     {/* Container for all graphs and pie chart */}
// // // // // // // // //                     <Card sx={{ boxShadow: 3 }}>
// // // // // // // // //                         <CardContent>
// // // // // // // // //                             <Typography variant="h5" color="primary" gutterBottom>
// // // // // // // // //                                 Sensor Data Overview
// // // // // // // // //                             </Typography>
// // // // // // // // //                             <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
// // // // // // // // //                                 {/* pH Level Graph */}
// // // // // // // // //                                 <Box sx={{ width: '48%' }}>
// // // // // // // // //                                     <Typography variant="h6" color="primary">pH Level</Typography>
// // // // // // // // //                                     <Line
// // // // // // // // //                                         ref={(el) => chartRefs.current[0] = el}
// // // // // // // // //                                         data={prepareChartData('ph')}
// // // // // // // // //                                         options={chartOptions}
// // // // // // // // //                                         height={200}
// // // // // // // // //                                         width={300}
// // // // // // // // //                                     />
// // // // // // // // //                                 </Box>

// // // // // // // // //                                 {/* TDS Graph */}
// // // // // // // // //                                 <Box sx={{ width: '48%' }}>
// // // // // // // // //                                     <Typography variant="h6" color="primary">TDS (Total Dissolved Solids)</Typography>
// // // // // // // // //                                     <Line
// // // // // // // // //                                         ref={(el) => chartRefs.current[1] = el}
// // // // // // // // //                                         data={prepareChartData('tds')}
// // // // // // // // //                                         options={chartOptions}
// // // // // // // // //                                         height={200}
// // // // // // // // //                                         width={300}
// // // // // // // // //                                     />
// // // // // // // // //                                 </Box>

// // // // // // // // //                                 {/* Turbidity Graph */}
// // // // // // // // //                                 <Box sx={{ width: '48%' }}>
// // // // // // // // //                                     <Typography variant="h6" color="primary">Turbidity</Typography>
// // // // // // // // //                                     <Line
// // // // // // // // //                                         ref={(el) => chartRefs.current[2] = el}
// // // // // // // // //                                         data={prepareChartData('turbidity')}
// // // // // // // // //                                         options={chartOptions}
// // // // // // // // //                                         height={200}
// // // // // // // // //                                         width={300}
// // // // // // // // //                                     />
// // // // // // // // //                                 </Box>

// // // // // // // // //                                 {/* Temperature Graph */}
// // // // // // // // //                                 <Box sx={{ width: '48%' }}>
// // // // // // // // //                                     <Typography variant="h6" color="primary">Temperature (°C)</Typography>
// // // // // // // // //                                     <Line
// // // // // // // // //                                         ref={(el) => chartRefs.current[3] = el}
// // // // // // // // //                                         data={prepareChartData('temperature')}
// // // // // // // // //                                         options={chartOptions}
// // // // // // // // //                                         height={200}
// // // // // // // // //                                         width={300}
// // // // // // // // //                                     />
// // // // // // // // //                                 </Box>

// // // // // // // // //                                 {/* Hardness Graph */}
// // // // // // // // //                                 <Box sx={{ width: '48%' }}>
// // // // // // // // //                                     <Typography variant="h6" color="primary">Hardness</Typography>
// // // // // // // // //                                     <Line
// // // // // // // // //                                         ref={(el) => chartRefs.current[4] = el}
// // // // // // // // //                                         data={prepareChartData('hardness')}
// // // // // // // // //                                         options={chartOptions}
// // // // // // // // //                                         height={200}
// // // // // // // // //                                         width={300}
// // // // // // // // //                                     />
// // // // // // // // //                                 </Box>

// // // // // // // // //                                 {/* Pie Chart */}
// // // // // // // // //                                 <Box sx={{ width: '30%', marginTop: 3 }}>
// // // // // // // // //                                     <Typography variant="h6" color="primary">Sensor Distribution</Typography>
// // // // // // // // //                                     <Pie
// // // // // // // // //                                         data={pieChartData}
// // // // // // // // //                                         options={{
// // // // // // // // //                                             responsive: true,
// // // // // // // // //                                             plugins: {
// // // // // // // // //                                                 legend: {
// // // // // // // // //                                                     position: 'top',
// // // // // // // // //                                                 },
// // // // // // // // //                                                 tooltip: {
// // // // // // // // //                                                     callbacks: {
// // // // // // // // //                                                         label: (context) => `${context.label}: ${context.raw}`,
// // // // // // // // //                                                     },
// // // // // // // // //                                                 },
// // // // // // // // //                                             },
// // // // // // // // //                                         }}
// // // // // // // // //                                     />
// // // // // // // // //                                 </Box>
// // // // // // // // //                             </Box>
// // // // // // // // //                         </CardContent>
// // // // // // // // //                     </Card>
// // // // // // // // //                 </Box>
// // // // // // // // //             ) : (
// // // // // // // // //                 !loading && <Typography variant="h6" color="textSecondary">No data found for this date.</Typography>
// // // // // // // // //             )}
// // // // // // // // //         </Box>
// // // // // // // // //     );
// // // // // // // // // };

// // // // // // // // // export default Dashboard;
// // // // // // // // import React, { useState, useEffect, useRef } from 'react';
// // // // // // // // import axios from 'axios';
// // // // // // // // import { Line } from 'react-chartjs-2';
// // // // // // // // import { Pie } from 'react-chartjs-2';
// // // // // // // // import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, ArcElement } from 'chart.js'; // Add ArcElement
// // // // // // // // import DatePicker from 'react-datepicker';
// // // // // // // // import "react-datepicker/dist/react-datepicker.css";
// // // // // // // // import { Box, CircularProgress, Typography, Card, CardContent, Checkbox, FormControlLabel, FormGroup } from '@mui/material';

// // // // // // // // // Register necessary components of Chart.js
// // // // // // // // ChartJS.register(ArcElement, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

// // // // // // // // const Dashboard = () => {
// // // // // // // //     const [sensorData, setSensorData] = useState([]);
// // // // // // // //     const [selectedDate, setSelectedDate] = useState(new Date());
// // // // // // // //     const [loading, setLoading] = useState(false); // Loading state
// // // // // // // //     const [selectedSensors, setSelectedSensors] = useState({
// // // // // // // //         ph: true,
// // // // // // // //         tds: true,
// // // // // // // //         turbidity: true,
// // // // // // // //         temperature: true,
// // // // // // // //         hardness: true,
// // // // // // // //     }); // Default to all sensors selected
// // // // // // // //     const chartRefs = useRef([]);  // Reference to store chart instances

// // // // // // // //     // Fetch data based on selected date
// // // // // // // //     useEffect(() => {
// // // // // // // //         const formattedDate = selectedDate.toISOString().split('T')[0]; // Convert to 'yy-mm-dd' format
// // // // // // // //         setLoading(true);

// // // // // // // //         axios.get(`http://localhost:5000/api/sensor-data?datetime=${formattedDate}`)
// // // // // // // //             .then((response) => {
// // // // // // // //                 setSensorData(response.data);
// // // // // // // //                 setLoading(false);
// // // // // // // //             })
// // // // // // // //             .catch((error) => {
// // // // // // // //                 console.error("Error fetching data from API: ", error);
// // // // // // // //                 setLoading(false);
// // // // // // // //             });
// // // // // // // //     }, [selectedDate]);

// // // // // // // //     // Prepare chart data for each sensor
// // // // // // // //     const prepareChartData = (sensor) => ({
// // // // // // // //         labels: sensorData.map((data) => data.timestamp),
// // // // // // // //         datasets: [
// // // // // // // //             {
// // // // // // // //                 label: sensor,
// // // // // // // //                 data: sensorData.map((data) => data[sensor]),
// // // // // // // //                 borderColor: 'rgba(75, 192, 192, 1)',
// // // // // // // //                 backgroundColor: 'rgba(75, 192, 192, 0.2)',
// // // // // // // //                 fill: false,
// // // // // // // //                 borderWidth: 2,
// // // // // // // //             },
// // // // // // // //         ],
// // // // // // // //     });

// // // // // // // //     // Pie chart data
// // // // // // // //     const pieChartData = {
// // // // // // // //         labels: ['pH', 'TDS', 'Turbidity', 'Temperature', 'Hardness'],
// // // // // // // //         datasets: [
// // // // // // // //             {
// // // // // // // //                 label: 'Sensor Distribution',
// // // // // // // //                 data: [
// // // // // // // //                     sensorData.reduce((acc, curr) => acc + curr.ph, 0),
// // // // // // // //                     sensorData.reduce((acc, curr) => acc + curr.tds, 0),
// // // // // // // //                     sensorData.reduce((acc, curr) => acc + curr.turbidity, 0),
// // // // // // // //                     sensorData.reduce((acc, curr) => acc + curr.temperature, 0),
// // // // // // // //                     sensorData.reduce((acc, curr) => acc + curr.hardness, 0),
// // // // // // // //                 ],
// // // // // // // //                 backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#FF9F40'],
// // // // // // // //                 hoverOffset: 4,
// // // // // // // //             },
// // // // // // // //         ],
// // // // // // // //     };

// // // // // // // //     // Chart options
// // // // // // // //     const chartOptions = {
// // // // // // // //         responsive: true,
// // // // // // // //         plugins: {
// // // // // // // //             title: {
// // // // // // // //                 display: true,
// // // // // // // //                 text: 'Sensor Data',
// // // // // // // //                 font: {
// // // // // // // //                     size: 18,
// // // // // // // //                 },
// // // // // // // //             },
// // // // // // // //             tooltip: {
// // // // // // // //                 callbacks: {
// // // // // // // //                     label: (context) => `${context.dataset.label}: ${context.raw}`,
// // // // // // // //                 },
// // // // // // // //             },
// // // // // // // //         },
// // // // // // // //         scales: {
// // // // // // // //             y: {
// // // // // // // //                 beginAtZero: true,
// // // // // // // //                 grid: {
// // // // // // // //                     color: '#ddd',
// // // // // // // //                 },
// // // // // // // //             },
// // // // // // // //         },
// // // // // // // //     };

// // // // // // // //     // Handle checkbox change for sensors
// // // // // // // //     const handleCheckboxChange = (event) => {
// // // // // // // //         const { name, checked } = event.target;
// // // // // // // //         setSelectedSensors((prevState) => ({
// // // // // // // //             ...prevState,
// // // // // // // //             [name]: checked,
// // // // // // // //         }));
// // // // // // // //     };

// // // // // // // //     // Cleanup chart instances on unmount
// // // // // // // //     useEffect(() => {
// // // // // // // //         return () => {
// // // // // // // //             chartRefs.current.forEach(chart => {
// // // // // // // //                 if (chart) {
// // // // // // // //                     chart.destroy();
// // // // // // // //                 }
// // // // // // // //             });
// // // // // // // //         };
// // // // // // // //     }, [sensorData]); // Runs when sensorData changes

// // // // // // // //     return (
// // // // // // // //         <Box sx={{ padding: 3, backgroundColor: '#f5f5f5', height: '100vh' }}>
// // // // // // // //             <Typography variant="h3" align="center" color="primary" gutterBottom>
// // // // // // // //                 Sensor Data Dashboard
// // // // // // // //             </Typography>

// // // // // // // //             {/* Date Picker */}
// // // // // // // //             <Box sx={{ marginBottom: 3, display: 'flex', justifyContent: 'center' }}>
// // // // // // // //                 <DatePicker
// // // // // // // //                     selected={selectedDate}
// // // // // // // //                     onChange={date => setSelectedDate(date)}
// // // // // // // //                     dateFormat="yyyy-MM-dd"
// // // // // // // //                     maxDate={new Date()} // Disable future dates
// // // // // // // //                     showYearDropdown
// // // // // // // //                     scrollableYearDropdown
// // // // // // // //                     placeholderText="Select a Date"
// // // // // // // //                 />
// // // // // // // //             </Box>

// // // // // // // //             {/* Sensor Selection Checkboxes */}
// // // // // // // //             <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
// // // // // // // //                 <FormGroup row>
// // // // // // // //                     <FormControlLabel
// // // // // // // //                         control={<Checkbox checked={selectedSensors.ph} onChange={handleCheckboxChange} name="ph" />}
// // // // // // // //                         label="pH"
// // // // // // // //                     />
// // // // // // // //                     <FormControlLabel
// // // // // // // //                         control={<Checkbox checked={selectedSensors.tds} onChange={handleCheckboxChange} name="tds" />}
// // // // // // // //                         label="TDS"
// // // // // // // //                     />
// // // // // // // //                     <FormControlLabel
// // // // // // // //                         control={<Checkbox checked={selectedSensors.turbidity} onChange={handleCheckboxChange} name="turbidity" />}
// // // // // // // //                         label="Turbidity"
// // // // // // // //                     />
// // // // // // // //                     <FormControlLabel
// // // // // // // //                         control={<Checkbox checked={selectedSensors.temperature} onChange={handleCheckboxChange} name="temperature" />}
// // // // // // // //                         label="Temperature"
// // // // // // // //                     />
// // // // // // // //                     <FormControlLabel
// // // // // // // //                         control={<Checkbox checked={selectedSensors.hardness} onChange={handleCheckboxChange} name="hardness" />}
// // // // // // // //                         label="Hardness"
// // // // // // // //                     />
// // // // // // // //                 </FormGroup>
// // // // // // // //             </Box>

// // // // // // // //             {/* Loading Spinner */}
// // // // // // // //             {loading && (
// // // // // // // //                 <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
// // // // // // // //                     <CircularProgress />
// // // // // // // //                 </Box>
// // // // // // // //             )}

// // // // // // // //             {/* Visualizations Container */}
// // // // // // // //             {!loading && sensorData.length > 0 ? (
// // // // // // // //                 <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
// // // // // // // //                     {/* Container for all graphs and pie chart */}
// // // // // // // //                     <Card sx={{ boxShadow: 3 }}>
// // // // // // // //                         <CardContent>
// // // // // // // //                             <Typography variant="h5" color="primary" gutterBottom>
// // // // // // // //                                 Sensor Data Overview
// // // // // // // //                             </Typography>
// // // // // // // //                             <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
// // // // // // // //                                 {/* Render charts only for selected sensors */}
// // // // // // // //                                 {selectedSensors.ph && (
// // // // // // // //                                     <Box sx={{ width: '48%' }}>
// // // // // // // //                                         <Typography variant="h6" color="primary">pH Data</Typography>
// // // // // // // //                                         <Line
// // // // // // // //                                             ref={(el) => chartRefs.current[0] = el}
// // // // // // // //                                             data={prepareChartData('ph')}
// // // // // // // //                                             options={chartOptions}
// // // // // // // //                                             height={200}
// // // // // // // //                                             width={300}
// // // // // // // //                                         />
// // // // // // // //                                     </Box>
// // // // // // // //                                 )}

// // // // // // // //                                 {selectedSensors.tds && (
// // // // // // // //                                     <Box sx={{ width: '48%' }}>
// // // // // // // //                                         <Typography variant="h6" color="primary">TDS Data</Typography>
// // // // // // // //                                         <Line
// // // // // // // //                                             ref={(el) => chartRefs.current[1] = el}
// // // // // // // //                                             data={prepareChartData('tds')}
// // // // // // // //                                             options={chartOptions}
// // // // // // // //                                             height={200}
// // // // // // // //                                             width={300}
// // // // // // // //                                         />
// // // // // // // //                                     </Box>
// // // // // // // //                                 )}

// // // // // // // //                                 {selectedSensors.turbidity && (
// // // // // // // //                                     <Box sx={{ width: '48%' }}>
// // // // // // // //                                         <Typography variant="h6" color="primary">Turbidity Data</Typography>
// // // // // // // //                                         <Line
// // // // // // // //                                             ref={(el) => chartRefs.current[2] = el}
// // // // // // // //                                             data={prepareChartData('turbidity')}
// // // // // // // //                                             options={chartOptions}
// // // // // // // //                                             height={200}
// // // // // // // //                                             width={300}
// // // // // // // //                                         />
// // // // // // // //                                     </Box>
// // // // // // // //                                 )}

// // // // // // // //                                 {selectedSensors.temperature && (
// // // // // // // //                                     <Box sx={{ width: '48%' }}>
// // // // // // // //                                         <Typography variant="h6" color="primary">Temperature Data</Typography>
// // // // // // // //                                         <Line
// // // // // // // //                                             ref={(el) => chartRefs.current[3] = el}
// // // // // // // //                                             data={prepareChartData('temperature')}
// // // // // // // //                                             options={chartOptions}
// // // // // // // //                                             height={200}
// // // // // // // //                                             width={300}
// // // // // // // //                                         />
// // // // // // // //                                     </Box>
// // // // // // // //                                 )}

// // // // // // // //                                 {selectedSensors.hardness && (
// // // // // // // //                                     <Box sx={{ width: '48%' }}>
// // // // // // // //                                         <Typography variant="h6" color="primary">Hardness Data</Typography>
// // // // // // // //                                         <Line
// // // // // // // //                                             ref={(el) => chartRefs.current[4] = el}
// // // // // // // //                                             data={prepareChartData('hardness')}
// // // // // // // //                                             options={chartOptions}
// // // // // // // //                                             height={200}
// // // // // // // //                                             width={300}
// // // // // // // //                                         />
// // // // // // // //                                     </Box>
// // // // // // // //                                 )}

// // // // // // // //                                 {/* Pie Chart */}
// // // // // // // //                                 <Box sx={{ width: '30%', marginTop: 3 }}>
// // // // // // // //                                     <Typography variant="h6" color="primary">Sensor Distribution</Typography>
// // // // // // // //                                     <Pie
// // // // // // // //                                         data={pieChartData}
// // // // // // // //                                         options={{
// // // // // // // //                                             responsive: true,
// // // // // // // //                                             plugins: {
// // // // // // // //                                                 legend: {
// // // // // // // //                                                     position: 'top',
// // // // // // // //                                                 },
// // // // // // // //                                                 tooltip: {
// // // // // // // //                                                     callbacks: {
// // // // // // // //                                                         label: (context) => `${context.label}: ${context.raw}`,
// // // // // // // //                                                     },
// // // // // // // //                                                 },
// // // // // // // //                                             },
// // // // // // // //                                         }}
// // // // // // // //                                     />
// // // // // // // //                                 </Box>
// // // // // // // //                             </Box>
// // // // // // // //                         </CardContent>
// // // // // // // //                     </Card>
// // // // // // // //                 </Box>
// // // // // // // //             ) : (
// // // // // // // //                 !loading && <Typography variant="h6" color="textSecondary">No data found for this date.</Typography>
// // // // // // // //             )}
// // // // // // // //         </Box>
// // // // // // // //     );
// // // // // // // // };

// // // // // // // // export default Dashboard;


// // // // // // // import React, { useState, useEffect, useRef } from 'react';
// // // // // // // import axios from 'axios';
// // // // // // // import { Line } from 'react-chartjs-2';
// // // // // // // import { Pie } from 'react-chartjs-2';
// // // // // // // import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
// // // // // // // import DatePicker from 'react-datepicker';
// // // // // // // import "react-datepicker/dist/react-datepicker.css";
// // // // // // // import { Box, CircularProgress, Typography, Card, CardContent, Checkbox, FormControlLabel, FormGroup } from '@mui/material';

// // // // // // // // Register necessary components of Chart.js
// // // // // // // ChartJS.register(ArcElement, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

// // // // // // // const Dashboard = () => {
// // // // // // //     const [sensorData, setSensorData] = useState([]);
// // // // // // //     const [selectedDate, setSelectedDate] = useState(new Date());
// // // // // // //     const [loading, setLoading] = useState(false);
// // // // // // //     const [selectedSensors, setSelectedSensors] = useState({
// // // // // // //         ph: true,
// // // // // // //         tds: true,
// // // // // // //         turbidity: true,
// // // // // // //         temperature: true,
// // // // // // //         hardness: true,
// // // // // // //     });
// // // // // // //     const chartRefs = useRef([]);

// // // // // // //     // Fetch data based on selected date
// // // // // // //     useEffect(() => {
// // // // // // //         const formattedDate = selectedDate.toISOString().split('T')[0]; // Convert to 'yy-mm-dd' format
// // // // // // //         setLoading(true);

// // // // // // //         // Fetch data for selected date
// // // // // // //         axios.get(`http://localhost:5000/api/sensor-data?datetime=${formattedDate}`)
// // // // // // //             .then((response) => {
// // // // // // //                 setSensorData(response.data);
// // // // // // //                 setLoading(false);
// // // // // // //             })
// // // // // // //             .catch((error) => {
// // // // // // //                 console.error("Error fetching data from API: ", error);
// // // // // // //                 setLoading(false);
// // // // // // //             });
// // // // // // //     }, [selectedDate]);

// // // // // // //     // Prepare chart data for each sensor
// // // // // // //     const prepareChartData = (sensor) => ({
// // // // // // //         labels: sensorData.map((data) => data.timestamp),
// // // // // // //         datasets: [
// // // // // // //             {
// // // // // // //                 label: sensor,
// // // // // // //                 data: sensorData.map((data) => data[sensor]),
// // // // // // //                 borderColor: 'rgba(75, 192, 192, 1)',
// // // // // // //                 backgroundColor: 'rgba(75, 192, 192, 0.2)',
// // // // // // //                 fill: false,
// // // // // // //                 borderWidth: 2,
// // // // // // //             },
// // // // // // //         ],
// // // // // // //     });

// // // // // // //     // Pie chart data for selected date
// // // // // // //     const pieChartData = {
// // // // // // //         labels: ['pH', 'TDS', 'Turbidity', 'Temperature', 'Hardness'],
// // // // // // //         datasets: [
// // // // // // //             {
// // // // // // //                 label: 'Sensor Distribution',
// // // // // // //                 data: [
// // // // // // //                     sensorData.reduce((acc, curr) => acc + curr.ph, 0),
// // // // // // //                     sensorData.reduce((acc, curr) => acc + curr.tds, 0),
// // // // // // //                     sensorData.reduce((acc, curr) => acc + curr.turbidity, 0),
// // // // // // //                     sensorData.reduce((acc, curr) => acc + curr.temperature, 0),
// // // // // // //                     sensorData.reduce((acc, curr) => acc + curr.hardness, 0),
// // // // // // //                 ],
// // // // // // //                 backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#FF9F40'],
// // // // // // //                 hoverOffset: 4,
// // // // // // //             },
// // // // // // //         ],
// // // // // // //     };

// // // // // // //     // Chart options
// // // // // // //     const chartOptions = {
// // // // // // //         responsive: true,
// // // // // // //         plugins: {
// // // // // // //             title: {
// // // // // // //                 display: true,
// // // // // // //                 text: 'Sensor Data for Selected Date',
// // // // // // //                 font: {
// // // // // // //                     size: 18,
// // // // // // //                 },
// // // // // // //             },
// // // // // // //             tooltip: {
// // // // // // //                 callbacks: {
// // // // // // //                     label: (context) => `${context.dataset.label}: ${context.raw}`,
// // // // // // //                 },
// // // // // // //             },
// // // // // // //         },
// // // // // // //         scales: {
// // // // // // //             y: {
// // // // // // //                 beginAtZero: true,
// // // // // // //                 grid: {
// // // // // // //                     color: '#ddd',
// // // // // // //                 },
// // // // // // //             },
// // // // // // //         },
// // // // // // //     };

// // // // // // //     // Handle checkbox change for sensors
// // // // // // //     const handleCheckboxChange = (event) => {
// // // // // // //         const { name, checked } = event.target;
// // // // // // //         setSelectedSensors((prevState) => ({
// // // // // // //             ...prevState,
// // // // // // //             [name]: checked,
// // // // // // //         }));
// // // // // // //     };

// // // // // // //     // Cleanup chart instances on unmount
// // // // // // //     useEffect(() => {
// // // // // // //         return () => {
// // // // // // //             chartRefs.current.forEach(chart => {
// // // // // // //                 if (chart) {
// // // // // // //                     chart.destroy();
// // // // // // //                 }
// // // // // // //             });
// // // // // // //         };
// // // // // // //     }, [sensorData]);

// // // // // // //     return (
// // // // // // //         <Box sx={{ padding: 3, backgroundColor: '#f5f5f5', height: '100vh' }}>
// // // // // // //             <Typography variant="h3" align="center" color="primary" gutterBottom>
// // // // // // //                 Sensor Data Dashboard
// // // // // // //             </Typography>

// // // // // // //             {/* Date Picker */}
// // // // // // //             <Box sx={{ marginBottom: 3, display: 'flex', justifyContent: 'center' }}>
// // // // // // //                 <DatePicker
// // // // // // //                     selected={selectedDate}
// // // // // // //                     onChange={date => setSelectedDate(date)}
// // // // // // //                     dateFormat="yyyy-MM-dd"
// // // // // // //                     maxDate={new Date()} // Disable future dates
// // // // // // //                     showYearDropdown
// // // // // // //                     scrollableYearDropdown
// // // // // // //                     placeholderText="Select a Date"
// // // // // // //                 />
// // // // // // //             </Box>

// // // // // // //             {/* Sensor Selection Checkboxes */}
// // // // // // //             <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
// // // // // // //                 <FormGroup row>
// // // // // // //                     <FormControlLabel
// // // // // // //                         control={<Checkbox checked={selectedSensors.ph} onChange={handleCheckboxChange} name="ph" />}
// // // // // // //                         label="pH"
// // // // // // //                     />
// // // // // // //                     <FormControlLabel
// // // // // // //                         control={<Checkbox checked={selectedSensors.tds} onChange={handleCheckboxChange} name="tds" />}
// // // // // // //                         label="TDS"
// // // // // // //                     />
// // // // // // //                     <FormControlLabel
// // // // // // //                         control={<Checkbox checked={selectedSensors.turbidity} onChange={handleCheckboxChange} name="turbidity" />}
// // // // // // //                         label="Turbidity"
// // // // // // //                     />
// // // // // // //                     <FormControlLabel
// // // // // // //                         control={<Checkbox checked={selectedSensors.temperature} onChange={handleCheckboxChange} name="temperature" />}
// // // // // // //                         label="Temperature"
// // // // // // //                     />
// // // // // // //                     <FormControlLabel
// // // // // // //                         control={<Checkbox checked={selectedSensors.hardness} onChange={handleCheckboxChange} name="hardness" />}
// // // // // // //                         label="Hardness"
// // // // // // //                     />
// // // // // // //                 </FormGroup>
// // // // // // //             </Box>

// // // // // // //             {/* Loading Spinner */}
// // // // // // //             {loading && (
// // // // // // //                 <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
// // // // // // //                     <CircularProgress />
// // // // // // //                 </Box>
// // // // // // //             )}

// // // // // // //             {/* Visualizations Container */}
// // // // // // //             {!loading && sensorData.length > 0 ? (
// // // // // // //                 <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
// // // // // // //                     {/* Container for all graphs and pie chart */}
// // // // // // //                     <Card sx={{ boxShadow: 3 }}>
// // // // // // //                         <CardContent>
// // // // // // //                             <Typography variant="h5" color="primary" gutterBottom>
// // // // // // //                                 Sensor Data Overview for {selectedDate.toISOString().split('T')[0]}
// // // // // // //                             </Typography>
// // // // // // //                             <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
// // // // // // //                                 {/* Render charts only for selected sensors */}
// // // // // // //                                 {selectedSensors.ph && (
// // // // // // //                                     <Box sx={{ width: '48%' }}>
// // // // // // //                                         <Typography variant="h6" color="primary">pH Data</Typography>
// // // // // // //                                         <Line
// // // // // // //                                             ref={(el) => chartRefs.current[0] = el}
// // // // // // //                                             data={prepareChartData('ph')}
// // // // // // //                                             options={chartOptions}
// // // // // // //                                             height={200}
// // // // // // //                                             width={300}
// // // // // // //                                         />
// // // // // // //                                     </Box>
// // // // // // //                                 )}

// // // // // // //                                 {selectedSensors.tds && (
// // // // // // //                                     <Box sx={{ width: '48%' }}>
// // // // // // //                                         <Typography variant="h6" color="primary">TDS Data</Typography>
// // // // // // //                                         <Line
// // // // // // //                                             ref={(el) => chartRefs.current[1] = el}
// // // // // // //                                             data={prepareChartData('tds')}
// // // // // // //                                             options={chartOptions}
// // // // // // //                                             height={200}
// // // // // // //                                             width={300}
// // // // // // //                                         />
// // // // // // //                                     </Box>
// // // // // // //                                 )}

// // // // // // //                                 {selectedSensors.turbidity && (
// // // // // // //                                     <Box sx={{ width: '48%' }}>
// // // // // // //                                         <Typography variant="h6" color="primary">Turbidity Data</Typography>
// // // // // // //                                         <Line
// // // // // // //                                             ref={(el) => chartRefs.current[2] = el}
// // // // // // //                                             data={prepareChartData('turbidity')}
// // // // // // //                                             options={chartOptions}
// // // // // // //                                             height={200}
// // // // // // //                                             width={300}
// // // // // // //                                         />
// // // // // // //                                     </Box>
// // // // // // //                                 )}

// // // // // // //                                 {selectedSensors.temperature && (
// // // // // // //                                     <Box sx={{ width: '48%' }}>
// // // // // // //                                         <Typography variant="h6" color="primary">Temperature Data</Typography>
// // // // // // //                                         <Line
// // // // // // //                                             ref={(el) => chartRefs.current[3] = el}
// // // // // // //                                             data={prepareChartData('temperature')}
// // // // // // //                                             options={chartOptions}
// // // // // // //                                             height={200}
// // // // // // //                                             width={300}
// // // // // // //                                         />
// // // // // // //                                     </Box>
// // // // // // //                                 )}

// // // // // // //                                 {selectedSensors.hardness && (
// // // // // // //                                     <Box sx={{ width: '48%' }}>
// // // // // // //                                         <Typography variant="h6" color="primary">Hardness Data</Typography>
// // // // // // //                                         <Line
// // // // // // //                                             ref={(el) => chartRefs.current[4] = el}
// // // // // // //                                             data={prepareChartData('hardness')}
// // // // // // //                                             options={chartOptions}
// // // // // // //                                             height={200}
// // // // // // //                                             width={300}
// // // // // // //                                         />
// // // // // // //                                     </Box>
// // // // // // //                                 )}

// // // // // // //                                 {/* Pie Chart */}
// // // // // // //                                 <Box sx={{ width: '30%', marginTop: 3 }}>
// // // // // // //                                     <Typography variant="h6" color="primary">Sensor Distribution</Typography>
// // // // // // //                                     <Pie
// // // // // // //                                         data={pieChartData}
// // // // // // //                                         options={{
// // // // // // //                                             responsive: true,
// // // // // // //                                             plugins: {
// // // // // // //                                                 legend: {
// // // // // // //                                                     position: 'top',
// // // // // // //                                                 },
// // // // // // //                                                 tooltip: {
// // // // // // //                                                     callbacks: {
// // // // // // //                                                         label: (context) => `${context.label}: ${context.raw}`,
// // // // // // //                                                     },
// // // // // // //                                                 },
// // // // // // //                                             },
// // // // // // //                                         }}
// // // // // // //                                     />
// // // // // // //                                 </Box>
// // // // // // //                             </Box>
// // // // // // //                         </CardContent>
// // // // // // //                     </Card>
// // // // // // //                 </Box>
// // // // // // //             ) : (
// // // // // // //                 !loading && <Typography variant="h6" color="textSecondary">No data found for this date.</Typography>
// // // // // // //             )}
// // // // // // //         </Box>
// // // // // // //     );
// // // // // // // };

// // // // // // // export default Dashboard;
// // // import React, { useState, useEffect, useRef } from 'react';
// // // import axios from 'axios';
// // // import { Line } from 'react-chartjs-2';
// // // import { Pie } from 'react-chartjs-2';
// // // import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
// // // import DatePicker from 'react-datepicker';
// // // import "react-datepicker/dist/react-datepicker.css";
// // // import { Box, CircularProgress, Typography, Card, CardContent, Checkbox, FormControlLabel } from '@mui/material';

// // // // Register necessary components of Chart.js
// // // ChartJS.register(ArcElement, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

// // // const Dashboard = () => {
// // //     const [sensorData, setSensorData] = useState([]); // Store the sensor data fetched from the API
// // //     const [selectedDate, setSelectedDate] = useState(new Date()); // Store the selected date
// // //     const [loading, setLoading] = useState(false); // Handle loading state
// // //     const [selectedSensors, setSelectedSensors] = useState({
// // //         ph: true,
// // //         tds: true,
// // //         turbidity: true,
// // //         temperature: true,
// // //         hardness: true,
// // //     }); // Store which sensors are selected for display

// // //     // Fetch data based on selected date
// // //     useEffect(() => {
// // //         const formattedDate = selectedDate.toISOString().split('T')[0]; // Format date to YYYY-MM-DD
// // //         setLoading(true);

// // //         axios.get(`http://localhost:4000/api/sensor-data?date=${formattedDate}`)
// // //             .then((response) => {
// // //                 setSensorData(response.data); // Store response data (sensor readings for the day)
// // //                 setLoading(false);
// // //             })
// // //             .catch((error) => {
// // //                 console.error("Error fetching data from API: ", error);
// // //                 setLoading(false);
// // //             });
// // //     }, [selectedDate]); // This hook runs whenever the selected date changes

// // //     // Prepare chart data for each selected sensor
// // //     const prepareChartData = (sensor) => {
// // //         return {
// // //             labels: sensorData.map((data) => `${data.hour}:00`), // X-axis: hours (00:00, 01:00, ..., 23:00)
// // //             datasets: [
// // //                 {
// // //                     label: sensor,
// // //                     data: sensorData.map((data) => data[sensor]),
// // //                     borderColor: 'rgba(75, 192, 192, 1)',
// // //                     backgroundColor: 'rgba(75, 192, 192, 0.2)',
// // //                     fill: false,
// // //                     borderWidth: 2,
// // //                 },
// // //             ],
// // //         };
// // //     };

// // //     // Pie chart data (for total values of each sensor on the selected date)
// // //     const pieChartData = {
// // //         labels: ['pH', 'TDS', 'Turbidity', 'Temperature', 'Hardness'],
// // //         datasets: [
// // //             {
// // //                 label: 'Sensor Distribution',
// // //                 data: [
// // //                     sensorData.reduce((acc, curr) => acc + curr.ph, 0),
// // //                     sensorData.reduce((acc, curr) => acc + curr.tds, 0),
// // //                     sensorData.reduce((acc, curr) => acc + curr.turbidity, 0),
// // //                     sensorData.reduce((acc, curr) => acc + curr.temperature, 0),
// // //                     sensorData.reduce((acc, curr) => acc + curr.hardness, 0),
// // //                 ],
// // //                 backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#FF9F40'],
// // //                 hoverOffset: 4,
// // //             },
// // //         ],
// // //     };

// // //     // Checkbox change handler (for selecting/deselecting sensors)
// // //     const handleCheckboxChange = (event) => {
// // //         setSelectedSensors((prevState) => ({
// // //             ...prevState,
// // //             [event.target.name]: event.target.checked,
// // //         }));
// // //     };

// // //     // Chart options for customization
// // //     const chartOptions = {
// // //         responsive: true,
// // //         plugins: {
// // //             title: {
// // //                 display: true,
// // //                 text: 'Sensor Data',
// // //                 font: {
// // //                     size: 18,
// // //                 },
// // //             },
// // //             tooltip: {
// // //                 callbacks: {
// // //                     label: (context) => `${context.dataset.label}: ${context.raw}`,
// // //                 },
// // //             },
// // //         },
// // //         scales: {
// // //             y: {
// // //                 beginAtZero: true,
// // //                 grid: {
// // //                     color: '#ddd',
// // //                 },
// // //             },
// // //         },
// // //     };

// // //     return (
// // //         <Box sx={{ padding: 3, backgroundColor: '#f5f5f5', height: '100vh' }}>
// // //             <Typography variant="h3" align="center" color="primary" gutterBottom>
// // //                 Sensor Data Dashboard
// // //             </Typography>

// // //             {/* Date Picker */}
// // //             <Box sx={{ marginBottom: 3, display: 'flex', justifyContent: 'center' }}>
// // //                 <DatePicker
// // //                     selected={selectedDate}
// // //                     onChange={date => setSelectedDate(date)}
// // //                     dateFormat="yyyy-MM-dd"
// // //                     maxDate={new Date()} // Disable future dates
// // //                     showYearDropdown
// // //                     scrollableYearDropdown
// // //                     placeholderText="Select a Date"
// // //                 />
// // //             </Box>

// // //             {/* Loading Spinner */}
// // //             {loading && (
// // //                 <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
// // //                     <CircularProgress />
// // //                 </Box>
// // //             )}

// // //             {/* Sensor Checkbox Filters */}
// // //             <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
// // //                 {['ph', 'tds', 'turbidity', 'temperature', 'hardness'].map((sensor) => (
// // //                     <FormControlLabel
// // //                         key={sensor}
// // //                         control={
// // //                             <Checkbox
// // //                                 checked={selectedSensors[sensor]}
// // //                                 onChange={handleCheckboxChange}
// // //                                 name={sensor}
// // //                                 color="primary"
// // //                             />
// // //                         }
// // //                         label={sensor.charAt(0).toUpperCase() + sensor.slice(1)}
// // //                     />
// // //                 ))}
// // //             </Box>

// // //             {/* Display Graphs */}
// // //             {!loading && sensorData.length > 0 ? (
// // //                 <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
// // //                     <Card sx={{ boxShadow: 3 }}>
// // //                         <CardContent>
// // //                             <Typography variant="h5" color="primary" gutterBottom>
// // //                                 Sensor Data Overview
// // //                             </Typography>
// // //                             <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
// // //                                 {/* Render selected sensor graphs */}
// // //                                 {Object.keys(selectedSensors).map((sensor) =>
// // //                                     selectedSensors[sensor] ? (
// // //                                         <Box key={sensor} sx={{ width: '48%' }}>
// // //                                             <Typography variant="h6" color="primary">
// // //                                                 {sensor.charAt(0).toUpperCase() + sensor.slice(1)} Data
// // //                                             </Typography>
// // //                                             <Line
// // //                                                 data={prepareChartData(sensor)}
// // //                                                 options={chartOptions}
// // //                                                 height={200}
// // //                                                 width={300}
// // //                                             />
// // //                                         </Box>
// // //                                     ) : null
// // //                                 )}

// // //                                 {/* Pie Chart */}
// // //                                 <Box sx={{ width: '30%', marginTop: 3 }}>
// // //                                     <Typography variant="h6" color="primary">Sensor Distribution</Typography>
// // //                                     <Pie data={pieChartData} options={{ responsive: true }} />
// // //                                 </Box>
// // //                             </Box>
// // //                         </CardContent>
// // //                     </Card>
// // //                 </Box>
// // //             ) : (
// // //                 !loading && <Typography variant="h6" color="textSecondary">No data found for this date.</Typography>
// // //             )}
// // //         </Box>
// // //     );
// // // };

// // // export default Dashboard;

// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { Line } from 'react-chartjs-2';
// // import { Pie } from 'react-chartjs-2';
// // import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
// // import DatePicker from 'react-datepicker';
// // import "react-datepicker/dist/react-datepicker.css";
// // import { Box, CircularProgress, Typography, Card, CardContent, Checkbox, FormControlLabel } from '@mui/material';

// // // Register necessary components of Chart.js
// // ChartJS.register(ArcElement, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

// // const Dashboard = () => {
// //     const [sensorData, setSensorData] = useState([]); // Store the sensor data fetched from the API
// //     const [selectedDate, setSelectedDate] = useState(new Date()); // Store the selected date
// //     const [loading, setLoading] = useState(false); // Handle loading state
// //     const [selectedSensors, setSelectedSensors] = useState({
// //         ph: true,
// //         tds: true,
// //         turbidity: true,
// //         temperature: true,
// //         hardness: true,
// //     }); // Store which sensors are selected for display

// //     // Fetch data based on selected date
// //     useEffect(() => {
// //         const formattedDate = selectedDate.toISOString().split('T')[0]; // Format date to YYYY-MM-DD
// //         setLoading(true);

// //         axios.get(`http://localhost:4000/api/sensor-data?date=${formattedDate}`)
// //             .then((response) => {
// //                 setSensorData(response.data); // Store response data (sensor readings for the day)
// //                 setLoading(false);
// //             })
// //             .catch((error) => {
// //                 console.error("Error fetching data from API: ", error);
// //                 setLoading(false);
// //             });
// //     }, [selectedDate]); // This hook runs whenever the selected date changes

// //     // Prepare chart data for each selected sensor
// //     const prepareChartData = (sensor) => {
// //         return {
// //             labels: sensorData.map((data) => `${data.hour}:00`), // X-axis: hours (00:00, 01:00, ..., 23:00)
// //             datasets: [
// //                 {
// //                     label: sensor,
// //                     data: sensorData.map((data) => data[sensor] || 0), // Default to 0 if data is missing
// //                     borderColor: 'rgba(75, 192, 192, 1)',
// //                     backgroundColor: 'rgba(75, 192, 192, 0.2)',
// //                     fill: false,
// //                     borderWidth: 2,
// //                 },
// //             ],
// //         };
// //     };

// //     // Pie chart data (for total values of each sensor on the selected date)
// //     const pieChartData = {
// //         labels: ['pH', 'TDS', 'Turbidity', 'Temperature', 'Hardness'],
// //         datasets: [
// //             {
// //                 label: 'Sensor Distribution',
// //                 data: [
// //                     sensorData.reduce((acc, curr) => acc + (curr.ph || 0), 0),
// //                     sensorData.reduce((acc, curr) => acc + (curr.tds || 0), 0),
// //                     sensorData.reduce((acc, curr) => acc + (curr.turbidity || 0), 0),
// //                     sensorData.reduce((acc, curr) => acc + (curr.temperature || 0), 0),
// //                     sensorData.reduce((acc, curr) => acc + (curr.hardness || 0), 0),
// //                 ],
// //                 backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#FF9F40'],
// //                 hoverOffset: 4,
// //             },
// //         ],
// //     };

// //     // Checkbox change handler (for selecting/deselecting sensors)
// //     const handleCheckboxChange = (event) => {
// //         setSelectedSensors((prevState) => ({
// //             ...prevState,
// //             [event.target.name]: event.target.checked,
// //         }));
// //     };

// //     // Chart options for customization
// //     const chartOptions = {
// //         responsive: true,
// //         plugins: {
// //             title: {
// //                 display: true,
// //                 text: 'Sensor Data',
// //                 font: {
// //                     size: 18,
// //                 },
// //             },
// //             tooltip: {
// //                 callbacks: {
// //                     label: (context) => `${context.dataset.label}: ${context.raw}`,
// //                 },
// //             },
// //         },
// //         scales: {
// //             y: {
// //                 beginAtZero: true,
// //                 grid: {
// //                     color: '#ddd',
// //                 },
// //             },
// //         },
// //     };

// //     return (
// //         <Box sx={{ padding: 3, backgroundColor: '#f5f5f5', height: '100vh' }}>
// //             <Typography variant="h3" align="center" color="primary" gutterBottom>
// //                 Sensor Data Dashboard
// //             </Typography>

// //             {/* Date Picker */}
// //             <Box sx={{ marginBottom: 3, display: 'flex', justifyContent: 'center' }}>
// //                 <DatePicker
// //                     selected={selectedDate}
// //                     onChange={date => setSelectedDate(date)}
// //                     dateFormat="yyyy-MM-dd"
// //                     maxDate={new Date()} // Disable future dates
// //                     showYearDropdown
// //                     scrollableYearDropdown
// //                     placeholderText="Select a Date"
// //                 />
// //             </Box>

// //             {/* Loading Spinner */}
// //             {loading && (
// //                 <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
// //                     <CircularProgress />
// //                 </Box>
// //             )}

// //             {/* Sensor Checkbox Filters */}
// //             <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
// //                 {['ph', 'tds', 'turbidity', 'temperature', 'hardness'].map((sensor) => (
// //                     <FormControlLabel
// //                         key={sensor}
// //                         control={
// //                             <Checkbox
// //                                 checked={selectedSensors[sensor]}
// //                                 onChange={handleCheckboxChange}
// //                                 name={sensor}
// //                                 color="primary"
// //                             />
// //                         }
// //                         label={sensor.charAt(0).toUpperCase() + sensor.slice(1)}
// //                     />
// //                 ))}
// //             </Box>

// //             {/* Display Graphs */}
// //             {!loading && sensorData.length > 0 ? (
// //                 <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
// //                     <Card sx={{ boxShadow: 3 }}>
// //                         <CardContent>
// //                             <Typography variant="h5" color="primary" gutterBottom>
// //                                 Sensor Data Overview
// //                             </Typography>
// //                             <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
// //                                 {/* Render selected sensor graphs */}
// //                                 {Object.keys(selectedSensors).map((sensor) =>
// //                                     selectedSensors[sensor] ? (
// //                                         <Box key={sensor} sx={{ width: '48%' }}>
// //                                             <Typography variant="h6" color="primary">
// //                                                 {sensor.charAt(0).toUpperCase() + sensor.slice(1)} Data
// //                                             </Typography>
// //                                             <Line
// //                                                 data={prepareChartData(sensor)}
// //                                                 options={chartOptions}
// //                                                 height={200}
// //                                                 width={300}
// //                                             />
// //                                         </Box>
// //                                     ) : null
// //                                 )}

// //                                 {/* Pie Chart */}
// //                                 <Box sx={{ width: '30%', marginTop: 3 }}>
// //                                     <Typography variant="h6" color="primary">Sensor Distribution</Typography>
// //                                     <Pie data={pieChartData} options={{ responsive: true }} />
// //                                 </Box>
// //                             </Box>
// //                         </CardContent>
// //                     </Card>
// //                 </Box>
// //             ) : (
// //                 !loading && <Typography variant="h6" color="textSecondary">No data found for this date.</Typography>
// //             )}
// //         </Box>
// //     );
// // };

// // export default Dashboard;


// // Dashboard.js
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { Line, Pie } from 'react-chartjs-2';
// // import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
// // import DatePicker from 'react-datepicker';
// // import "react-datepicker/dist/react-datepicker.css";
// // import { Box, CircularProgress, Typography, Card, CardContent, Checkbox, FormControlLabel } from '@mui/material';

// // // Register Chart.js components
// // ChartJS.register(ArcElement, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

// // const Dashboard = () => {
// //     const [sensorData, setSensorData] = useState([]); // Store sensor data
// //     const [selectedDate, setSelectedDate] = useState(new Date()); // Default to today's date
// //     const [loading, setLoading] = useState(false); // Handle loading state
// //     const [selectedSensors, setSelectedSensors] = useState({
// //         ph: true,
// //         tds: true,
// //         turbidity: true,
// //         temperature: true,
// //         hardness: true,
// //     }); // Store selected sensors

// //     // Fetch data when the component mounts & when selectedDate changes
// //     useEffect(() => {
// //         // const formattedDate = selectedDate.toISOString().split('T')[0]; // Format YYYY-MM-DD
// //         const localDate = new Date(selectedDate.getTime() - selectedDate.getTimezoneOffset() * 60000);
// //     const formattedDate = localDate.toISOString().split('T')[0];
// //         setLoading(true);

// //         axios.get(`http://localhost:4000/api/sensor-data?date=${formattedDate}`)
// //             .then((response) => {
// //                 setSensorData(response.data); // Store fetched data
// //                 setLoading(false);
// //             })
// //             .catch((error) => {
// //                 console.error("Error fetching data: ", error);
// //                 setLoading(false);
// //             });
// //     }, [selectedDate]);

// //     // Prepare chart data for each selected sensor
// //     const prepareChartData = (sensor) => {
// //         return {
// //             labels: sensorData.map((data) => `${data.hour}:00`), // X-axis: Time in hours (00:00 - 23:00)
// //             datasets: [
// //                 {
// //                     label: sensor.toUpperCase(),
// //                     data: sensorData.map((data) => parseFloat(data[sensor]) || 0), // Y-axis: Sensor values
// //                     borderColor: 'rgba(75, 192, 192, 1)',
// //                     backgroundColor: 'rgba(75, 192, 192, 0.2)',
// //                     fill: false,
// //                     borderWidth: 2,
// //                 },
// //             ],
// //         };
// //     };

// //     // Pie chart data (for sensor distribution)
// //     const pieChartData = {
// //         labels: ['pH', 'TDS', 'Turbidity', 'Temperature', 'Hardness'],
// //         datasets: [
// //             {
// //                 label: 'Sensor Distribution',
// //                 data: [
// //                     sensorData.reduce((acc, curr) => acc + (parseFloat(curr.ph) || 0), 0),
// //                     sensorData.reduce((acc, curr) => acc + (parseFloat(curr.tds) || 0), 0),
// //                     sensorData.reduce((acc, curr) => acc + (parseFloat(curr.turbidity) || 0), 0),
// //                     sensorData.reduce((acc, curr) => acc + (parseFloat(curr.temperature) || 0), 0),
// //                     sensorData.reduce((acc, curr) => acc + (parseFloat(curr.hardness) || 0), 0),
// //                 ],
// //                 backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#FF9F40'],
// //                 hoverOffset: 4,
// //             },
// //         ],
// //     };

// //     // Handle sensor selection via checkboxes
// //     const handleCheckboxChange = (event) => {
// //         setSelectedSensors((prevState) => ({
// //             ...prevState,
// //             [event.target.name]: event.target.checked,
// //         }));
// //     };

// //     // Chart options
// //     const chartOptions = {
// //         responsive: true,
// //         plugins: {
// //             title: {
// //                 display: true,
// //                 text: 'Sensor Data',
// //                 font: { size: 18 },
// //             },
// //             tooltip: {
// //                 callbacks: {
// //                     label: (context) => `${context.dataset.label}: ${context.raw}`,
// //                 },
// //             },
// //         },
// //         scales: {
// //             x: {
// //                 title: {
// //                     display: true,
// //                     text: 'Time (Hours)',
// //                 },
// //             },
// //             y: {
// //                 beginAtZero: true,
// //                 title: {
// //                     display: true,
// //                     text: 'Sensor Value',
// //                 },
// //                 grid: { color: '#ddd' },
// //             },
// //         },
// //     };

// //     return (
// //         <Box sx={{ padding: 3, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
// //             <Typography variant="h3" align="center" color="primary" gutterBottom>
// //                 Sensor Data Dashboard
// //             </Typography>

// //             {/* Date Picker */}
// //             <Box sx={{ marginBottom: 3, display: 'flex', justifyContent: 'center' }}>
// //                 <DatePicker
// //                     selected={selectedDate}
// //                     onChange={(date) => setSelectedDate(date)}
// //                     dateFormat="yyyy-MM-dd"
// //                     maxDate={new Date()} // Disable future dates
// //                     showYearDropdown
// //                     scrollableYearDropdown
// //                     placeholderText="Select a Date"
// //                 />
// //             </Box>

// //             {/* Loading Indicator */}
// //             {loading && (
// //                 <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
// //                     <CircularProgress />
// //                 </Box>
// //             )}

// //             {/* Sensor Selection Checkboxes */}
// //             <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
// //                 {['ph', 'tds', 'turbidity', 'temperature', 'hardness'].map((sensor) => (
// //                     <FormControlLabel
// //                         key={sensor}
// //                         control={
// //                             <Checkbox
// //                                 checked={selectedSensors[sensor]}
// //                                 onChange={handleCheckboxChange}
// //                                 name={sensor}
// //                                 color="primary"
// //                             />
// //                         }
// //                         label={sensor.toUpperCase()}
// //                     />
// //                 ))}
// //             </Box>

// //             {/* Line Charts for Sensors */}
// //             <Box sx={{ marginBottom: 5 }}>
// //                 {['ph', 'tds', 'turbidity', 'temperature', 'hardness'].map((sensor) => (
// //                     selectedSensors[sensor] && sensorData.length > 0 && (
// //                         <Card key={sensor} sx={{ marginBottom: 3 }}>
// //                             <CardContent>
// //                                 <Typography variant="h6">{sensor.toUpperCase()} Levels</Typography>
// //                                 <Line data={prepareChartData(sensor)} options={chartOptions} />
// //                             </CardContent>
// //                         </Card>
// //                     )
// //                 ))}
// //             </Box>

// //             {/* Pie Chart for Sensor Distribution */}
// //             {sensorData.length > 0 && (
// //                 <Box sx={{ display: 'flex', justifyContent: 'center' }}>
// //                     <Card sx={{ marginBottom: 3 }}>
// //                         <CardContent>
// //                             <Typography variant="h6">Sensor Distribution</Typography>
// //                             <Pie data={pieChartData} />
// //                         </CardContent>
// //                     </Card>
// //                 </Box>
// //             )}
// //         </Box>
// //     );
// // };

// // // // // export default Dashboard;
// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';
// // // import { Line, Pie } from 'react-chartjs-2';
// // // import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
// // // import DatePicker from 'react-datepicker';
// // // import "react-datepicker/dist/react-datepicker.css";
// // // import { Box, CircularProgress, Typography, Card, CardContent, Checkbox, FormControlLabel } from '@mui/material';

// // // // Register Chart.js components
// // // ChartJS.register(ArcElement, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

// // // const Dashboard = () => {
// // //     const [sensorData, setSensorData] = useState([]); // Store sensor data
// // //     const [selectedDate, setSelectedDate] = useState(null); // Default: No date selected
// // //     const [loading, setLoading] = useState(false); // Handle loading state
// // //     const [selectedSensors, setSelectedSensors] = useState({
// // //         ph: true,
// // //         tds: true,
// // //         turbidity: true,
// // //         temperature: true,
// // //         hardness: true,
// // //     }); // Store selected sensors

// // //     // Fetch data when the component mounts & when selectedDate changes
// // //     useEffect(() => {
// // //         setLoading(true);

// // //         let url = "http://localhost:4000/api/sensor-data";
// // //         if (selectedDate) {
// // //             const formattedDate = selectedDate.toISOString().split('T')[0]; // Format YYYY-MM-DD
// // //             url += `?date=${formattedDate}`;
// // //         }

// // //         axios.get(url)
// // //             .then((response) => {
// // //                 setSensorData(response.data); // Store fetched data
// // //                 setLoading(false);
// // //             })
// // //             .catch((error) => {
// // //                 console.error("Error fetching data: ", error);
// // //                 setLoading(false);
// // //             });
// // //     }, [selectedDate]);

// // //     // Prepare chart data (date-based if no date selected, time-based if date is selected)
// // //     const prepareChartData = (sensor) => {
// // //         return {
// // //             labels: sensorData.map((data) => 
// // //                 selectedDate ? `${data.hour}:00` : data.date // Show date if no date is selected
// // //             ), 
// // //             datasets: [
// // //                 {
// // //                     label: sensor.toUpperCase(),
// // //                     data: sensorData.map((data) => parseFloat(data[sensor]) || 0), 
// // //                     borderColor: 'rgba(75, 192, 192, 1)',
// // //                     backgroundColor: 'rgba(75, 192, 192, 0.2)',
// // //                     fill: false,
// // //                     borderWidth: 2,
// // //                 },
// // //             ],
// // //         };
// // //     };

// // //     // Pie chart data (for sensor distribution)
// // //     const pieChartData = {
// // //         labels: ['pH', 'TDS', 'Turbidity', 'Temperature', 'Hardness'],
// // //         datasets: [
// // //             {
// // //                 label: 'Sensor Distribution',
// // //                 data: [
// // //                     sensorData.reduce((acc, curr) => acc + (parseFloat(curr.ph) || 0), 0),
// // //                     sensorData.reduce((acc, curr) => acc + (parseFloat(curr.tds) || 0), 0),
// // //                     sensorData.reduce((acc, curr) => acc + (parseFloat(curr.turbidity) || 0), 0),
// // //                     sensorData.reduce((acc, curr) => acc + (parseFloat(curr.temperature) || 0), 0),
// // //                     sensorData.reduce((acc, curr) => acc + (parseFloat(curr.hardness) || 0), 0),
// // //                 ],
// // //                 backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#FF9F40'],
// // //                 hoverOffset: 4,
// // //             },
// // //         ],
// // //     };

// // //     // Handle sensor selection via checkboxes
// // //     const handleCheckboxChange = (event) => {
// // //         setSelectedSensors((prevState) => ({
// // //             ...prevState,
// // //             [event.target.name]: event.target.checked,
// // //         }));
// // //     };

// // //     // Chart options
// // //     const chartOptions = {
// // //         responsive: true,
// // //         plugins: {
// // //             title: {
// // //                 display: true,
// // //                 text: 'Sensor Data',
// // //                 font: { size: 18 },
// // //             },
// // //             tooltip: {
// // //                 callbacks: {
// // //                     label: (context) => `${context.dataset.label}: ${context.raw}`,
// // //                 },
// // //             },
// // //         },
// // //         scales: {
// // //             x: {
// // //                 title: {
// // //                     display: true,
// // //                     text: selectedDate ? 'Time (Hours)' : 'Date (YYYY-MM-DD)', 
// // //                 },
// // //             },
// // //             y: {
// // //                 beginAtZero: true,
// // //                 title: {
// // //                     display: true,
// // //                     text: 'Sensor Value',
// // //                 },
// // //                 grid: { color: '#ddd' },
// // //             },
// // //         },
// // //     };

// // //     return (
// // //         <Box sx={{ padding: 3, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
// // //             <Typography variant="h3" align="center" color="primary" gutterBottom>
// // //                 Sensor Data Dashboard
// // //             </Typography>

// // //             {/* Date Picker */}
// // //             <Box sx={{ marginBottom: 3, display: 'flex', justifyContent: 'center' }}>
// // //                 <DatePicker
// // //                     selected={selectedDate}
// // //                     onChange={(date) => setSelectedDate(date)}
// // //                     dateFormat="yyyy-MM-dd"
// // //                     maxDate={new Date()} // Disable future dates
// // //                     isClearable // Allow clearing the date to show all data
// // //                     showYearDropdown
// // //                     scrollableYearDropdown
// // //                     placeholderText="Select a Date"
// // //                 />
// // //             </Box>

// // //             {/* Loading Indicator */}
// // //             {loading && (
// // //                 <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
// // //                     <CircularProgress />
// // //                 </Box>
// // //             )}

// // //             {/* Sensor Selection Checkboxes */}
// // //             <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
// // //                 {['ph', 'tds', 'turbidity', 'temperature', 'hardness'].map((sensor) => (
// // //                     <FormControlLabel
// // //                         key={sensor}
// // //                         control={
// // //                             <Checkbox
// // //                                 checked={selectedSensors[sensor]}
// // //                                 onChange={handleCheckboxChange}
// // //                                 name={sensor}
// // //                                 color="primary"
// // //                             />
// // //                         }
// // //                         label={sensor.toUpperCase()}
// // //                     />
// // //                 ))}
// // //             </Box>

// // //             {/* Line Charts for Sensors */}
// // //             <Box sx={{ marginBottom: 5 }}>
// // //                 {['ph', 'tds', 'turbidity', 'temperature', 'hardness'].map((sensor) => (
// // //                     selectedSensors[sensor] && sensorData.length > 0 && (
// // //                         <Card key={sensor} sx={{ marginBottom: 3 }}>
// // //                             <CardContent>
// // //                                 <Typography variant="h6">{sensor.toUpperCase()} Levels</Typography>
// // //                                 <Line data={prepareChartData(sensor)} options={chartOptions} />
// // //                             </CardContent>
// // //                         </Card>
// // //                     )
// // //                 ))}
// // //             </Box>

// // //             {/* Pie Chart for Sensor Distribution */}
// // //             {sensorData.length > 0 && (
// // //                 <Box sx={{ display: 'flex', justifyContent: 'center' }}>
// // //                     <Card sx={{ marginBottom: 3 }}>
// // //                         <CardContent>
// // //                             <Typography variant="h6">Sensor Distribution</Typography>
// // //                             <Pie data={pieChartData} />
// // //                         </CardContent>
// // //                     </Card>
// // //                 </Box>
// // //             )}
// // //         </Box>
// // //     );
// // // };

// // // export default Dashboard;
// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';
// // // import { Line, Bar, Pie } from 'react-chartjs-2';
// // // import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
// // // import DatePicker from 'react-datepicker';
// // // import "react-datepicker/dist/react-datepicker.css";
// // // import { Box, CircularProgress, Typography, Card, CardContent, Checkbox, FormControlLabel, Grid, Paper } from '@mui/material';

// // // // Register Chart.js components
// // // ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

// // // const Dashboard = () => {
// // //     const [sensorData, setSensorData] = useState([]);
// // //     const [selectedDate, setSelectedDate] = useState(null);
// // //     const [loading, setLoading] = useState(false);
// // //     const [selectedSensors, setSelectedSensors] = useState({
// // //         ph: true,
// // //         tds: true,
// // //         turbidity: true,
// // //         temperature: true,
// // //         hardness: true,
// // //     });
// // //     const [graphType, setGraphType] = useState('line');

// // //     useEffect(() => {
// // //         setLoading(true);
// // //         let url = "http://localhost:4000/api/sensor-data";
// // //         if (selectedDate) {
// // //             const formattedDate = selectedDate.toISOString().split('T')[0];
// // //             url += `?date=${formattedDate}`;
// // //         }

// // //         axios.get(url)
// // //             .then((response) => {
// // //                 setSensorData(response.data);
// // //                 setLoading(false);
// // //             })
// // //             .catch((error) => {
// // //                 console.error("Error fetching data: ", error);
// // //                 setLoading(false);
// // //             });
// // //     }, [selectedDate]);

// // //     const prepareChartData = (sensor) => ({
// // //         labels: sensorData.map((data) => selectedDate ? `${data.hour}:00` : data.date),
// // //         datasets: [{
// // //             label: sensor.toUpperCase(),
// // //             data: sensorData.map((data) => parseFloat(data[sensor]) || 0),
// // //             backgroundColor: 'rgba(75, 192, 192, 0.5)',
// // //             borderColor: 'rgba(75, 192, 192, 1)',
// // //             fill: true,
// // //             borderWidth: 2,
// // //         }],
// // //     });

// // //     const pieChartData = {
// // //         labels: ['pH', 'TDS', 'Turbidity', 'Temperature', 'Hardness'],
// // //         datasets: [{
// // //             data: ['ph', 'tds', 'turbidity', 'temperature', 'hardness'].map(sensor =>
// // //                 sensorData.reduce((acc, curr) => acc + (parseFloat(curr[sensor]) || 0), 0)
// // //             ),
// // //             backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#FF9F40'],
// // //             hoverOffset: 4,
// // //         }],
// // //     };

// // //     const handleCheckboxChange = (event) => {
// // //         setSelectedSensors(prev => ({ ...prev, [event.target.name]: event.target.checked }));
// // //     };

// // //     return (
// // //         <Box sx={{ padding: 3, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
// // //             <Typography variant="h3" align="center" color="primary" gutterBottom>
// // //                 Sensor Data Dashboard
// // //             </Typography>

// // //             <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginBottom: 3 }}>
// // //                 <DatePicker
// // //                     selected={selectedDate}
// // //                     onChange={(date) => setSelectedDate(date)}
// // //                     dateFormat="yyyy-MM-dd"
// // //                     maxDate={new Date()}
// // //                     isClearable
// // //                     showYearDropdown
// // //                     scrollableYearDropdown
// // //                     placeholderText="Select a Date"
// // //                 />
// // //                 <FormControlLabel
// // //                     control={<Checkbox checked={graphType === 'bar'} onChange={() => setGraphType(graphType === 'line' ? 'bar' : 'line')} color="primary" />}
// // //                     label="Bar Graph"
// // //                 />
// // //             </Box>

// // //             {loading && <Box sx={{ display: 'flex', justifyContent: 'center' }}><CircularProgress /></Box>}

// // //             <Grid container spacing={3}>
// // //                 {['ph', 'tds', 'turbidity', 'temperature', 'hardness'].map((sensor) => (
// // //                     selectedSensors[sensor] && sensorData.length > 0 && (
// // //                         <Grid item xs={12} md={6} key={sensor}>
// // //                             <Card>
// // //                                 <CardContent>
// // //                                     <Typography variant="h6">{sensor.toUpperCase()} Levels</Typography>
// // //                                     {graphType === 'line' ? (
// // //                                         <Line data={prepareChartData(sensor)} />
// // //                                     ) : (
// // //                                         <Bar data={prepareChartData(sensor)} />
// // //                                     )}
// // //                                 </CardContent>
// // //                             </Card>
// // //                         </Grid>
// // //                     )
// // //                 ))}
// // //             </Grid>

// // //             {sensorData.length > 0 && (
// // //                 <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
// // //                     <Paper elevation={3} sx={{ padding: 2, maxWidth: 500 }}>
// // //                         <Typography variant="h6" align="center">Sensor Distribution</Typography>
// // //                         <Pie data={pieChartData} />
// // //                     </Paper>
// // //                 </Box>
// // //             )}
// // //         </Box>
// // //     );
// // // };

// // // export default Dashboard;
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { Line } from 'react-chartjs-2';
// // import { Bar } from 'react-chartjs-2';
// // import { Pie } from 'react-chartjs-2';
// // import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, ArcElement, BarElement } from 'chart.js';
// // import DatePicker from 'react-datepicker';
// // import "react-datepicker/dist/react-datepicker.css";
// // import { Box, CircularProgress, Typography, Card, CardContent, Checkbox, FormControlLabel, Grid } from '@mui/material';

// // // Register necessary components of Chart.js
// // ChartJS.register(ArcElement, CategoryScale, LinearScale, LineElement, PointElement, BarElement, Title, Tooltip, Legend);

// // const Dashboard = () => {
// //     const [sensorData, setSensorData] = useState([]); // Store the sensor data fetched from the API
// //     const [selectedDate, setSelectedDate] = useState(null); // Store the selected date (null initially)
// //     const [loading, setLoading] = useState(false); // Handle loading state
// //     const [selectedSensors, setSelectedSensors] = useState({
// //         ph: true,
// //         tds: true,
// //         turbidity: true,
// //         temperature: true,
// //         hardness: true,
// //     }); // Store which sensors are selected for display
// //     const [graphType, setGraphType] = useState('line'); // Track selected graph type (line or bar)

// //     // Fetch data when the component mounts or when selectedDate changes
// //     useEffect(() => {
// //         setLoading(true);
        
// //         let url = 'http://localhost:4000/api/sensor-data';
        
// //         // If a date is selected, fetch data for that specific date
// //         if (selectedDate) {
// //             const formattedDate = selectedDate.toISOString().split('T')[0]; // Format date to YYYY-MM-DD
// //             url += `?date=${formattedDate}`;
// //         }

// //         axios.get(url)
// //             .then((response) => {
// //                 setSensorData(response.data); // Store response data (sensor readings)
// //                 setLoading(false);
// //             })
// //             .catch((error) => {
// //                 console.error("Error fetching data from API: ", error);
// //                 setLoading(false);
// //             });
// //     }, [selectedDate]); // Dependency on selectedDate to fetch data based on it

// //     // Prepare chart data for each selected sensor
// //     const prepareChartData = (sensor) => {
// //         return {
// //             labels: selectedDate 
// //                 ? sensorData.map((data) => `${data.hour}:00`) // If date is selected, show hours on X-axis
// //                 : sensorData.map((data) => data.date), // If no date is selected, show dates on X-axis
// //             datasets: [
// //                 {
// //                     label: sensor,
// //                     data: sensorData.map((data) => data[sensor]),
// //                     borderColor: 'rgba(75, 192, 192, 1)',
// //                     backgroundColor: graphType === 'line' ? 'rgba(75, 192, 192, 0.2)' : 'rgba(75, 192, 192, 0.5)', // Bar or Line graph styling
// //                     fill: graphType === 'line', // Line graphs fill the area
// //                     borderWidth: 2,
// //                 },
// //             ],
// //         };
// //     };

// //     // Pie chart data (for total values of each sensor on the selected date)
// //     const pieChartData = {
// //         labels: ['pH', 'TDS', 'Turbidity', 'Temperature', 'Hardness'],
// //         datasets: [
// //             {
// //                 label: 'Sensor Distribution',
// //                 data: [
// //                     sensorData.reduce((acc, curr) => acc + curr.ph, 0),
// //                     sensorData.reduce((acc, curr) => acc + curr.tds, 0),
// //                     sensorData.reduce((acc, curr) => acc + curr.turbidity, 0),
// //                     sensorData.reduce((acc, curr) => acc + curr.temperature, 0),
// //                     sensorData.reduce((acc, curr) => acc + curr.hardness, 0),
// //                 ],
// //                 backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#FF9F40'],
// //                 hoverOffset: 4,
// //             },
// //         ],
// //     };

// //     // Checkbox change handler (for selecting/deselecting sensors)
// //     const handleCheckboxChange = (event) => {
// //         setSelectedSensors((prevState) => ({
// //             ...prevState,
// //             [event.target.name]: event.target.checked,
// //         }));
// //     };

// //     // Chart options for customization
// //     const chartOptions = {
// //         responsive: true,
// //         plugins: {
// //             title: {
// //                 display: true,
// //                 text: 'Sensor Data',
// //                 font: {
// //                     size: 18,
// //                 },
// //             },
// //             tooltip: {
// //                 callbacks: {
// //                     label: (context) => `${context.dataset.label}: ${context.raw}`,
// //                 },
// //             },
// //         },
// //         scales: {
// //             x: {
// //                 title: {
// //                     display: true,
// //                     text: selectedDate ? 'Time (Hours)' : 'Date (YYYY-MM-DD)', // Label X-axis accordingly
// //                 },
// //             },
// //             y: {
// //                 beginAtZero: true,
// //                 title: {
// //                     display: true,
// //                     text: 'Sensor Value',
// //                 },
// //                 grid: {
// //                     color: '#ddd',
// //                 },
// //             },
// //         },
// //     };

// //     return (
// //         <Box sx={{ padding: 3, backgroundColor: '#f5f5f5', height: '100vh' }}>
// //             <Typography variant="h3" align="center" color="primary" gutterBottom>
// //                 Sensor Data Dashboard
// //             </Typography>

// //             {/* Date Picker */}
// //             <Box sx={{ marginBottom: 3, display: 'flex', justifyContent: 'center' }}>
// //                 <DatePicker
// //                     selected={selectedDate}
// //                     onChange={(date) => setSelectedDate(date)} // Set selected date
// //                     dateFormat="yyyy-MM-dd"
// //                     maxDate={new Date()} // Disable future dates
// //                     isClearable // Allow clearing the date to show all data
// //                     showYearDropdown
// //                     scrollableYearDropdown
// //                     placeholderText="Select a Date"
// //                 />
// //             </Box>

// //             {/* Loading Spinner */}
// //             {loading && (
// //                 <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
// //                     <CircularProgress />
// //                 </Box>
// //             )}

// //             {/* Sensor Checkbox Filters */}
// //             <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
// //                 {['ph', 'tds', 'turbidity', 'temperature', 'hardness'].map((sensor) => (
// //                     <FormControlLabel
// //                         key={sensor}
// //                         control={
// //                             <Checkbox
// //                                 checked={selectedSensors[sensor]}
// //                                 onChange={handleCheckboxChange}
// //                                 name={sensor}
// //                                 color="primary"
// //                             />
// //                         }
// //                         label={sensor.charAt(0).toUpperCase() + sensor.slice(1)}
// //                     />
// //                 ))}
// //             </Box>

// //             {/* Display Graphs */}
// //             {!loading && sensorData.length > 0 ? (
// //                 <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
// //                     <Card sx={{ boxShadow: 3 }}>
// //                         <CardContent>
// //                             <Typography variant="h5" color="primary" gutterBottom>
// //                                 Sensor Data Overview
// //                             </Typography>
// //                             <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
// //                                 {/* Render selected sensor graphs */}
// //                                 {Object.keys(selectedSensors).map((sensor) =>
// //                                     selectedSensors[sensor] ? (
// //                                         <Box key={sensor} sx={{ width: '48%' }}>
// //                                             <Typography variant="h6" color="primary">
// //                                                 {sensor.charAt(0).toUpperCase() + sensor.slice(1)} Data
// //                                             </Typography>
// //                                             {graphType === 'line' ? (
// //                                                 <Line
// //                                                     data={prepareChartData(sensor)}
// //                                                     options={chartOptions}
// //                                                     height={200}
// //                                                     width={300}
// //                                                 />
// //                                             ) : (
// //                                                 <Bar
// //                                                     data={prepareChartData(sensor)}
// //                                                     options={chartOptions}
// //                                                     height={200}
// //                                                     width={300}
// //                                                 />
// //                                             )}
// //                                         </Box>
// //                                     ) : null
// //                                 )}

// //                                 {/* Pie Chart */}
// //                                 <Box sx={{ width: '30%', marginTop: 3 }}>
// //                                     <Typography variant="h6" color="primary">Sensor Distribution</Typography>
// //                                     <Pie data={pieChartData} options={{ responsive: true }} />
// //                                 </Box>
// //                             </Box>
// //                         </CardContent>
// //                     </Card>
// //                 </Box>
// //             ) : (
// //                 !loading && <Typography variant="h6" color="textSecondary">No data found for this date.</Typography>
// //             )}
// //         </Box>
// //     );
// // };

// // // export default Dashboard;
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { Line } from 'react-chartjs-2';
// // import { Pie } from 'react-chartjs-2';
// // import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, ArcElement, BarElement } from 'chart.js';
// // import DatePicker from 'react-datepicker';
// // import "react-datepicker/dist/react-datepicker.css";
// // import { Box, CircularProgress, Typography, Checkbox, FormControlLabel, Grid } from '@mui/material';

// // // Register necessary components of Chart.js
// // ChartJS.register(ArcElement, CategoryScale, LinearScale, LineElement, PointElement, BarElement, Title, Tooltip, Legend);

// // const Dashboard = () => {
// //     const [sensorData, setSensorData] = useState([]);
// //     const [selectedDate, setSelectedDate] = useState(null);
// //     const [loading, setLoading] = useState(false);
// //     const [selectedSensors, setSelectedSensors] = useState({
// //         ph: true,
// //         tds: true,
// //         turbidity: true,
// //         temperature: true,
// //         hardness: true,
// //     });

// //     useEffect(() => {
// //         setLoading(true);
// //         let url = 'http://localhost:4000/api/sensor-data';
// //         if (selectedDate) {
// //             const formattedDate = selectedDate.toISOString().split('T')[0];
// //             url += `?date=${formattedDate}`;
// //         }

// //         axios.get(url)
// //             .then((response) => {
// //                 setSensorData(response.data);
// //                 setLoading(false);
// //             })
// //             .catch((error) => {
// //                 console.error("Error fetching data from API: ", error);
// //                 setLoading(false);
// //             });
// //     }, [selectedDate]);

// //     const prepareChartData = (sensor) => {
// //         return {
// //             labels: selectedDate
// //                 ? sensorData.map((data) => `${data.hour}:00`)
// //                 : sensorData.map((data) => data.date),
// //             datasets: [
// //                 {
// //                     label: sensor,
// //                     data: sensorData.map((data) => data[sensor]),
// //                     borderColor: 'rgba(75, 192, 192, 1)',
// //                     backgroundColor: 'rgba(75, 192, 192, 0.2)',
// //                     fill: true,
// //                     borderWidth: 2,
// //                 },
// //             ],
// //         };
// //     };

// //     const pieChartData = {
// //         labels: ['pH', 'TDS', 'Turbidity', 'Temperature', 'Hardness'],
// //         datasets: [
// //             {
// //                 label: 'Sensor Distribution',
// //                 data: [
// //                     sensorData.reduce((acc, curr) => acc + curr.ph, 0),
// //                     sensorData.reduce((acc, curr) => acc + curr.tds, 0),
// //                     sensorData.reduce((acc, curr) => acc + curr.turbidity, 0),
// //                     sensorData.reduce((acc, curr) => acc + curr.temperature, 0),
// //                     sensorData.reduce((acc, curr) => acc + curr.hardness, 0),
// //                 ],
// //                 backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#FF9F40'],
// //                 hoverOffset: 4,
// //             },
// //         ],
// //     };

// //     const handleCheckboxChange = (event) => {
// //         setSelectedSensors((prevState) => ({
// //             ...prevState,
// //             [event.target.name]: event.target.checked,
// //         }));
// //     };

// //     return (
// //         <Box sx={{ padding: 3, backgroundColor: '#ffffff', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
// //             <Typography variant="h3" align="center" color="primary" gutterBottom>
// //                 Sensor Data Dashboard
// //             </Typography>

// //             <Box sx={{ marginBottom: 3, display: 'flex', justifyContent: 'center' }}>
// //                 <DatePicker
// //                     selected={selectedDate}
// //                     onChange={(date) => setSelectedDate(date)}
// //                     dateFormat="yyyy-MM-dd"
// //                     maxDate={new Date()}
// //                     isClearable
// //                     showYearDropdown
// //                     scrollableYearDropdown
// //                     placeholderText="Select a Date"
// //                 />
// //             </Box>

// //             {loading && (
// //                 <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
// //                     <CircularProgress />
// //                 </Box>
// //             )}

// //             <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3,backgroundColor: '#ffffff' }}>
// //                 {['ph', 'tds', 'turbidity', 'temperature', 'hardness'].map((sensor) => (
// //                     <FormControlLabel
// //                         key={sensor}
// //                         control={
// //                             <Checkbox
// //                                 checked={selectedSensors[sensor]}
// //                                 onChange={handleCheckboxChange}
// //                                 name={sensor}
// //                                 color="primary"
// //                             />
// //                         }
// //                         label={sensor.charAt(0).toUpperCase() + sensor.slice(1)}
// //                     />
// //                 ))}
// //             </Box>

// //             {!loading && sensorData.length > 0 ? (
// //                 <Grid container spacing={3} justifyContent="center" backgroundColor="#ffffff">
// //                     {Object.keys(selectedSensors).map((sensor) =>
// //                         selectedSensors[sensor] ? (
// //                             <Grid item xs={12} sm={6} md={6} key={sensor} sx={{ padding: 2 }}>
// //                                 <Box sx={{
// //                                     border: '1px solid #ddd',
// //                                     borderRadius: 2,
// //                                     padding: 2,
// //                                     backgroundColor: '#ffffff',
// //                                     boxShadow: 2,
// //                                     minHeight: '300px',
// //                                 }}>
// //                                     <Typography variant="h5" color="primary" gutterBottom>
// //                                         {sensor.charAt(0).toUpperCase() + sensor.slice(1)} Data
// //                                     </Typography>

// // //                                     <Line
// // //                                         data={prepareChartData(sensor)}
// // //                                         options={{
// // //                                             responsive: true,
// // //                                             plugins: {
// // //                                                 title: {
// // //                                                     display: true,
// // //                                                     text: `${sensor.charAt(0).toUpperCase() + sensor.slice(1)} Data`,
// // //                                                     font: { size: 16 },
// // //                                                 },
// // //                                                 tooltip: {
// // //                                                     callbacks: {
// // //                                                         label: (context) => `${context.dataset.label}: ${context.raw}`,
// // //                                                     },
// // //                                                 },
// // //                                             },
// // //                                             scales: {
// // //                                                 x: {
// // //                                                     title: {
// // //                                                         display: true,
// // //                                                         text: selectedDate ? 'Time (Hours)' : 'Date (YYYY-MM-DD)',
// // //                                                     },
// // //                                                 },
// // //                                                 y: {
// // //                                                     beginAtZero: true,
// // //                                                     title: {
// // //                                                         display: true,
// // //                                                         text: 'Sensor Value',
// // //                                                     },
// // //                                                 },
// // //                                             },
// // //                                         }}
// // //                                         height={300} // Increased graph size
// // //                                         width={500} // Increased graph size
// // //                                     />
// // //                                 </Box>
// // //                             </Grid>
// // //                         ) : null
// // //                     )}

// // //                     {/* Pie Chart for Sensor Distribution */}
// // //                     <Grid item xs={12} sm={6} md={6} sx={{ padding: 2 }}>
// // //                         <Box sx={{
// // //                             border: '1px solid #ddd',
// // //                             borderRadius: 2,
// // //                             padding: 2,
// // //                             backgroundColor: '#ffffff',
// // //                             boxShadow: 2,
// // //                             minHeight: '300px',
// // //                         }}>
// // //                             <Typography variant="h5" color="primary" gutterBottom>
// // //                                 Sensor Distribution (Pie Chart)
// // //                             </Typography>
// // //                             <Pie data={pieChartData} options={{ responsive: true }} />
// // //                         </Box>
// // //                     </Grid>
// // //                 </Grid>
// // //             ) : (
// // //                 !loading && <Typography variant="h6" color="textSecondary">No data found for this date.</Typography>
// // //             )}
// // //         </Box>
// // //     );
// // // };

// // // export default Dashboard;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Line } from 'react-chartjs-2';
// import { Pie } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, ArcElement, BarElement } from 'chart.js';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";
// import { Box, CircularProgress, Typography, Checkbox, FormControlLabel, Grid } from '@mui/material';

// // Register necessary components of Chart.js
// ChartJS.register(ArcElement, CategoryScale, LinearScale, LineElement, PointElement, BarElement, Title, Tooltip, Legend);

// const Dashboard = () => {
//     const [sensorData, setSensorData] = useState([]);
//     const [selectedDate, setSelectedDate] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [selectedSensors, setSelectedSensors] = useState({
//         ph: true,
//         tds: true,
//         turbidity: true,
//         temperature: true,
//         hardness: true,
//     });

//     // Function to generate a random color
//     const getRandomColor = () => {
//         const letters = '0123456789ABCDEF';
//         let color = '#';
//         for (let i = 0; i < 6; i++) {
//             color += letters[Math.floor(Math.random() * 16)];
//         }
//         return color;
//     };

//     useEffect(() => {
//         setLoading(true);
//         let url = 'http://localhost:4000/api/sensor-data';
//         if (selectedDate) {
//             const formattedDate = selectedDate.toISOString().split('T')[0];
//             url += `?date=${formattedDate}`;
//         }

//         axios.get(url)
//             .then((response) => {
//                 setSensorData(response.data);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error("Error fetching data from API: ", error);
//                 setLoading(false);
//             });
//     }, [selectedDate]);

//     const prepareChartData = (sensor) => {
//         return {
//             labels: selectedDate
//                 ? sensorData.map((data) => `${data.hour}:00`)
//                 : sensorData.map((data) => data.date),
//             datasets: [
//                 {
//                     label: sensor,
//                     data: sensorData.map((data) => data[sensor]),
//                     borderColor: 'rgba(75, 192, 192, 1)',
//                     backgroundColor: 'rgba(75, 192, 192, 0.2)',
//                     fill: true,
//                     borderWidth: 2,
//                 },
//             ],
//         };
//     };

//     const combinedChartData = {
//         labels: selectedDate
//             ? sensorData.map((data) => `${data.hour}:00`)
//             : sensorData.map((data) => data.date),
//         datasets: Object.keys(selectedSensors)
//             .filter(sensor => selectedSensors[sensor])
//             .map(sensor => ({
//                 label: sensor.charAt(0).toUpperCase() + sensor.slice(1),
//                 data: sensorData.map((data) => data[sensor]),
//                 borderColor: getRandomColor(),
//                 backgroundColor: 'rgba(75, 192, 192, 0.2)',
//                 fill: true,
//                 borderWidth: 2,
//             })),
//     };

//     const pieChartData = {
//         labels: ['pH', 'TDS', 'Turbidity', 'Temperature', 'Hardness'],
//         datasets: [
//             {
//                 label: 'Sensor Distribution',
//                 data: [
//                     sensorData.reduce((acc, curr) => acc + curr.ph, 0),
//                     sensorData.reduce((acc, curr) => acc + curr.tds, 0),
//                     sensorData.reduce((acc, curr) => acc + curr.turbidity, 0),
//                     sensorData.reduce((acc, curr) => acc + curr.temperature, 0),
//                     sensorData.reduce((acc, curr) => acc + curr.hardness, 0),
//                 ],
//                 backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#FF9F40'],
//                 hoverOffset: 4,
//             },
//         ],
//     };

//     const handleCheckboxChange = (event) => {
//         setSelectedSensors((prevState) => ({
//             ...prevState,
//             [event.target.name]: event.target.checked,
//         }));
//     };

//     return (
//         <Box sx={{ padding: 3, backgroundColor: '#ffffff', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//             <Typography variant="h3" align="center" color="primary" gutterBottom>
//                 Sensor Data Dashboard
//             </Typography>

//             <Box sx={{ marginBottom: 3, display: 'flex', justifyContent: 'center' }}>
//                 <DatePicker
//                     selected={selectedDate}
//                     onChange={(date) => setSelectedDate(date)}
//                     dateFormat="yyyy-MM-dd"
//                     maxDate={new Date()}
//                     isClearable
//                     showYearDropdown
//                     scrollableYearDropdown
//                     placeholderText="Select a Date"
//                 />
//             </Box>

//             {loading && (
//                 <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
//                     <CircularProgress />
//                 </Box>
//             )}

//             <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3, backgroundColor: '#ffffff' }}>
//                 {['ph', 'tds', 'turbidity', 'temperature', 'hardness'].map((sensor) => (
//                     <FormControlLabel
//                         key={sensor}
//                         control={
//                             <Checkbox
//                                 checked={selectedSensors[sensor]}
//                                 onChange={handleCheckboxChange}
//                                 name={sensor}
//                                 color="primary"
//                             />
//                         }
//                         label={sensor.charAt(0).toUpperCase() + sensor.slice(1)}
//                     />
//                 ))}
//             </Box>

//             {!loading && sensorData.length > 0 ? (
//                 <Grid container spacing={3} justifyContent="center" backgroundColor="#ffffff">
//                     {Object.keys(selectedSensors).map((sensor) =>
//                         selectedSensors[sensor] ? (
//                             <Grid item xs={12} sm={6} md={6} key={sensor} sx={{ padding: 2 }}>
//                                 <Box sx={{
//                                     border: '1px solid #ddd',
//                                     borderRadius: 2,
//                                     padding: 2,
//                                     backgroundColor: '#ffffff',
//                                     boxShadow: 2,
//                                     minHeight: '350px',
//                                 }}>
//                                     <Typography variant="h5" color="primary" gutterBottom>
//                                         {sensor.charAt(0).toUpperCase() + sensor.slice(1)} Data
//                                     </Typography>

//                                     <Line
//                                         data={prepareChartData(sensor)}
//                                         options={{
//                                             responsive: true,
//                                             plugins: {
//                                                 title: {
//                                                     display: true,
//                                                     text: `${sensor.charAt(0).toUpperCase() + sensor.slice(1)} Data`,
//                                                     font: { size: 16 },
//                                                 },
//                                                 tooltip: {
//                                                     callbacks: {
//                                                         label: (context) => `${context.dataset.label}: ${context.raw}`,
//                                                     },
//                                                 },
//                                             },
//                                             scales: {
//                                                 x: {
//                                                     title: {
//                                                         display: true,
//                                                         text: selectedDate ? 'Time (Hours)' : 'Date (YYYY-MM-DD)',
//                                                     },
//                                                 },
//                                                 y: {
//                                                     beginAtZero: true,
//                                                     title: {
//                                                         display: true,
//                                                         text: 'Sensor Value',
//                                                     },
//                                                 },
//                                             },
//                                         }}
//                                         height={400} // Increased graph size
//                                         width={500} // Increased graph size
//                                     />
//                                 </Box>
//                             </Grid>
//                         ) : null
//                     )}

//                     {/* Combined Graph for all Sensors */}
//                     <Grid item xs={12} sm={6} md={6} sx={{ padding: 2 }}>
//                         <Box sx={{
//                             border: '1px solid #ddd',
//                             borderRadius: 2,
//                             padding: 2,
//                             backgroundColor: '#ffffff',
//                             boxShadow: 2,
//                             minHeight: '350px',
//                         }}>
//                             <Typography variant="h5" color="primary" gutterBottom>
//                                 Combined Sensor Data
//                             </Typography>

//                             <Line
//                                 data={combinedChartData}
//                                 options={{
//                                     responsive: true,
//                                     plugins: {
//                                         title: {
//                                             display: true,
//                                             text: 'Combined Sensor Data',
//                                             font: { size: 16 },
//                                         },
//                                         tooltip: {
//                                             callbacks: {
//                                                 label: (context) => `${context.dataset.label}: ${context.raw}`,
//                                             },
//                                         },
//                                     },
//                                     scales: {
//                                         x: {
//                                             title: {
//                                                 display: true,
//                                                 text: selectedDate ? 'Time (Hours)' : 'Date (YYYY-MM-DD)',
//                                             },
//                                         },
//                                         y: {
//                                             beginAtZero: true,
//                                             title: {
//                                                 display: true,
//                                                 text: 'Sensor Value',
//                                             },
//                                         },
//                                     },
//                                 }}
//                                 height={400} // Increased graph size
//                                 width={500} // Increased graph size
//                             />
//                         </Box>
//                     </Grid>

//                     {/* Pie Chart for Sensor Distribution */}
//                     <Grid item xs={12} sm={6} md={6} sx={{ padding: 2 }}>
//                         <Box sx={{
//                             border: '1px solid #ddd',
//                             borderRadius: 2,
//                             padding: 2,
//                             backgroundColor: '#ffffff',
//                             boxShadow: 2,
//                             minHeight: '350px',
//                         }}>
//                             <Typography variant="h5" color="primary" gutterBottom>
//                                 Sensor Distribution (Pie Chart)
//                             </Typography>
//                             <Pie data={pieChartData} options={{ responsive: true }} />
//                         </Box>
//                     </Grid>
//                 </Grid>
//             ) : (
//                 !loading && <Typography variant="h6" color="textSecondary">No data found for this date.</Typography>
//             )}
//         </Box>
//     );
// };

// export default Dashboard;
//===============================================================================
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, ArcElement, BarElement } from 'chart.js';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Box, CircularProgress, Typography, Checkbox, FormControlLabel, Grid } from '@mui/material';

// Register necessary components of Chart.js
ChartJS.register(ArcElement, CategoryScale, LinearScale, LineElement, PointElement, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
    const [sensorData, setSensorData] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [loading, setLoading] = useState(false);
    const [selectedSensors, setSelectedSensors] = useState({
        ph: true,
        tds: true,
        turbidity: true,
        temperature: true,
        hardness: true,
    });
    const [useBarChart, setUseBarChart] = useState(false);

    useEffect(() => {
        setLoading(true);
        let url = 'http://localhost:4000/api/sensor-data';
        if (selectedDate) {
            // const formattedDate = selectedDate.toISOString().split('T')[0];
            // const localDate = new Date(selectedDate.getTime());
            //  const formattedDate = localDate.toISOString().split('T')[0];
            // url += `?date=${formattedDate}`;
             const istOffset = 5.5 * 60 * 60 * 1000; // Offset for IST (5 hours 30 minutes ahead of UTC)
            const localDate = new Date(selectedDate.getTime() + istOffset);
            const formattedDate = localDate.toISOString().split('T')[0];
            url += `?date=${formattedDate}`;
        }

        axios.get(url)
            .then((response) => {
                setSensorData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data from API: ", error);
                setLoading(false);
            });
    }, [selectedDate]);

    const prepareChartData = (sensor) => {
        return {
            labels: selectedDate
                ? sensorData.map((data) => `${data.hour}:00`)
                : sensorData.map((data) => data.date),
            datasets: [
                {
                    label: sensor,
                    data: sensorData.map((data) => data[sensor]),
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    fill: true,
                    borderWidth: 2,
                },
            ],
        };
    };

    // Prepare data for the pie chart (representing the sum of all sensor values)
    const preparePieChartData = () => {
        const totalPh = sensorData.reduce((acc, data) => acc + (parseFloat(data.ph) || 0), 0);
        const totalTds = sensorData.reduce((acc, data) => acc + (parseFloat(data.tds) || 0), 0);
        const totalTurbidity = sensorData.reduce((acc, data) => acc + (parseFloat(data.turbidity) || 0), 0);
        const totalTemperature = sensorData.reduce((acc, data) => acc + (parseFloat(data.temperature) || 0), 0);
        const totalHardness = sensorData.reduce((acc, data) => acc + (parseFloat(data.hardness) || 0), 0);
        

    // Log the values to ensure correct summation
    console.log('Total PH:', totalPh);
    console.log('Total TDS:', totalTds);
    console.log('Total Turbidity:', totalTurbidity);
    console.log('Total Temperature:', totalTemperature);
    console.log('Total Hardness:', totalHardness);
        return {
            labels: ['pH', 'TDS', 'Turbidity', 'Temperature', 'Hardness'],
            datasets: [
                {
                    data: [
                       totalPh,
                       totalTds,
                       totalTurbidity,
                       totalTemperature,
                       totalHardness
                    ],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#FF5733'],
                },
            ],
        };
    };
    
    // Prepare data for the combined chart (all selected sensors)
    const prepareAllSensorsChartData = () => {
        const labels = selectedDate
            ? sensorData.map((data) => `${data.hour}:00`)
            : sensorData.map((data) => data.date);

        const datasets = [];
        Object.keys(selectedSensors).forEach((sensor) => {
            if (selectedSensors[sensor]) {
                datasets.push({
                    label: sensor.charAt(0).toUpperCase() + sensor.slice(1),
                    data: sensorData.map((data) => data[sensor]),
                    borderColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 1)`,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    fill: true,
                    borderWidth: 2,
                });
            }
        });

        return {
            labels,
            datasets,
        };
    };

    const handleSensorChange = (sensor) => {
        setSelectedSensors((prevSelectedSensors) => ({
            ...prevSelectedSensors,
            [sensor]: !prevSelectedSensors[sensor],
        }));
    };

    return (
        <Box sx={{ padding: 3, backgroundColor: '#ffffff', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h3" align="center" color="primary" gutterBottom>
                Sensor Data Dashboard
            </Typography>

            <Box sx={{ marginBottom: 3, display: 'flex', justifyContent: 'center' }}>
                <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="yyyy-MM-dd"
                    maxDate={new Date()}
                    isClearable
                    showYearDropdown
                    scrollableYearDropdown
                    placeholderText="Select a Date"
                />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3, backgroundColor: '#ffffff' }}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={useBarChart}
                            onChange={() => setUseBarChart(!useBarChart)}
                            color="primary"
                        />
                    }
                    label={useBarChart ? "Bar Chart" : "Line Chart"}
                />
            </Box>

            {/* Checkbox list for each sensor */}
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
                {['ph', 'tds', 'turbidity', 'temperature', 'hardness'].map((sensor) => (
                    <FormControlLabel
                        key={sensor}
                        control={
                            <Checkbox
                                checked={selectedSensors[sensor]}
                                onChange={() => handleSensorChange(sensor)}
                                color="primary"
                            />
                        }
                        label={sensor.charAt(0).toUpperCase() + sensor.slice(1)}
                    />
                ))}
            </Box>

            {loading && (
                <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
                    <CircularProgress />
                </Box>
            )}

            {!loading && sensorData.length > 0 && (
                <Grid container spacing={3} justifyContent="center" backgroundColor="#ffffff">
                    {Object.keys(selectedSensors).map(
                        (sensor) =>
                            selectedSensors[sensor] && (
                                <Grid item xs={12} sm={6} md={4} key={sensor} sx={{ padding: 2 }}>
                                    <Box sx={{
                                        border: '1px solid #ddd',
                                        borderRadius: 2,
                                        padding: 2,
                                        backgroundColor: '#ffffff',
                                        boxShadow: 2,
                                        minHeight: '300px', // Reduced height for smaller graphs
                                    }}>
                                        <Typography variant="h5" color="primary" gutterBottom>
                                            {sensor.charAt(0).toUpperCase() + sensor.slice(1)} Data
                                        </Typography>
                                        {useBarChart ? (
                                            <Bar
                                                data={prepareChartData(sensor)}
                                                options={{
                                                    responsive: true,
                                                    plugins: {
                                                        title: {
                                                            display: true,
                                                            text: `${sensor.charAt(0).toUpperCase() + sensor.slice(1)} Data`,
                                                            font: { size: 16 },
                                                        },
                                                        tooltip: {
                                                            callbacks: {
                                                                label: (context) => `${context.dataset.label}: ${context.raw}`,
                                                            },
                                                        },
                                                    },
                                                    scales: {
                                                        x: {
                                                            title: {
                                                                display: true,
                                                                text: selectedDate ? 'Time (Hour)' : 'Date (YYYY-MM-DD)',
                                                            },
                                                        },
                                                        y: {
                                                            beginAtZero: true,
                                                            title: {
                                                                display: true,
                                                                text: 'Sensor Value',
                                                            },
                                                        },
                                                    },
                                                }}
                                                height={300} // Reduced size
                                                width={400} // Reduced width
                                            />
                                        ) : (
                                            <Line
                                                data={prepareChartData(sensor)}
                                                options={{
                                                    responsive: true,
                                                    plugins: {
                                                        title: {
                                                            display: true,
                                                            text: `${sensor.charAt(0).toUpperCase() + sensor.slice(1)} Data`,
                                                            font: { size: 16 },
                                                        },
                                                        tooltip: {
                                                            callbacks: {
                                                                label: (context) => `${context.dataset.label}: ${context.raw}`,
                                                            },
                                                        },
                                                    },
                                                    scales: {
                                                        x: {
                                                            title: {
                                                                display: true,
                                                                text: selectedDate ? 'Time (Hours)' : 'Date (YYYY-MM-DD)',
                                                            },
                                                        },
                                                        y: {
                                                            beginAtZero: true,
                                                            title: {
                                                                display: true,
                                                                text: 'Sensor Value',
                                                            },
                                                        },
                                                    },
                                                }}
                                                height={300} // Reduced size
                                                width={400} // Reduced width
                                            />
                                        )}
                                    </Box>
                                </Grid>
                            )
                    )}

                    {/* All sensors in one graph */}
                    <Grid item xs={12} sm={6} md={4} sx={{ padding: 2 }}>
                        <Box sx={{
                            border: '1px solid #ddd',
                            borderRadius: 2,
                            padding: 2,
                            backgroundColor: '#ffffff',
                            boxShadow: 2,
                            minHeight: '300px',
                        }}>
                            <Typography variant="h5" color="primary" gutterBottom>
                                All Sensors Data Combined
                            </Typography>
                            {useBarChart ? (
                                <Bar
                                    data={prepareAllSensorsChartData()}
                                    options={{
                                        responsive: true,
                                        plugins: {
                                            title: {
                                                display: true,
                                                text: 'All Sensors Data Combined',
                                                font: { size: 16 },
                                            },
                                            tooltip: {
                                                callbacks: {
                                                    label: (context) => `${context.dataset.label}: ${context.raw}`,
                                                },
                                            },
                                        },
                                        scales: {
                                            x: {
                                                title: {
                                                    display: true,
                                                    text: selectedDate ? 'Time (Hours)' : 'Date (YYYY-MM-DD)',
                                                },
                                            },
                                            y: {
                                                beginAtZero: true,
                                                title: {
                                                    display: true,
                                                    text: 'Sensor Value',
                                                },
                                            },
                                        },
                                    }}
                                    height={300} // Reduced size
                                    width={400} // Reduced width
                                />
                            ) : (
                                <Line
                                    data={prepareAllSensorsChartData()}
                                    options={{
                                        responsive: true,
                                        plugins: {
                                            title: {
                                                display: true,
                                                text: 'All Sensors Data Combined',
                                                font: { size: 16 },
                                            },
                                            tooltip: {
                                                callbacks: {
                                                    label: (context) => `${context.dataset.label}: ${context.raw}`,
                                                },
                                            },
                                        },
                                        scales: {
                                            x: {
                                                title: {
                                                    display: true,
                                                    text: selectedDate ? 'Time (Hours)' : 'Date (YYYY-MM-DD)',
                                                },
                                            },
                                            y: {
                                                beginAtZero: true,
                                                title: {
                                                    display: true,
                                                    text: 'Sensor Value',
                                                },
                                            },
                                        },
                                    }}
                                    height={300} // Reduced size
                                    width={400} // Reduced width
                                />
                            )}
                        </Box>
                    </Grid>

                    {/* Pie Chart */}
                    <Grid item xs={12} sm={6} md={4} sx={{ padding: 2 }}>
                        <Box sx={{
                            border: '1px solid #ddd',
                            borderRadius: 2,
                            padding: 2,
                            backgroundColor: '#ffffff',
                            boxShadow: 2,
                            minHeight: '300px',
                        }}>
                            <Typography variant="h5" color="primary" gutterBottom>
                                Sensor Data Distribution
                            </Typography>
                            <Pie
                                data={preparePieChartData()}
                                options={{
                                    responsive: true,
                                    plugins: {
                                        title: {
                                            display: true,
                                            text: 'Sensor Data Distribution',
                                            font: { size: 16 },
                                        },
                                    },
                                }}
                                height={250}
                                width={250}
                            />
                        </Box>
                    </Grid>
                </Grid>
            )}

            {!loading && sensorData.length === 0 && (
                <Typography variant="h6" color="textSecondary">No data found for this date.</Typography>
            )}
        </Box>
    );
};

export default Dashboard;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Line, Bar, Pie } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, ArcElement, BarElement } from 'chart.js';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";
// import { Box, CircularProgress, Typography, Checkbox, FormControlLabel, Grid } from '@mui/material';

// // Register necessary components of Chart.js
// ChartJS.register(ArcElement, CategoryScale, LinearScale, LineElement, PointElement, BarElement, Title, Tooltip, Legend);

// const Dashboard = () => {
//     const [sensorData, setSensorData] = useState([]);
//     const [startDate, setStartDate] = useState(null);
//     const [endDate, setEndDate] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [selectedSensors, setSelectedSensors] = useState({
//         ph: true,
//         tds: true,
//         turbidity: true,
//         temperature: true,
//         hardness: true,
//     });
//     const [useBarChart, setUseBarChart] = useState(false);

//     useEffect(() => {
//         setLoading(true);
//         let url = 'http://localhost:4000/api/sensor-data';

//         if (startDate && endDate) {
//             // Adjust the selectedDate to local time
//             const localStartDate = new Date(startDate.getTime() - startDate.getTimezoneOffset() * 60000);
//             const localEndDate = new Date(endDate.getTime() - endDate.getTimezoneOffset() * 60000);
        
//             // Format the dates in 'YYYY-MM-DD' format
//             const formattedStartDate = localStartDate.toISOString().split('T')[0];
//             const formattedEndDate = localEndDate.toISOString().split('T')[0];
        
//             // Build the URL with formatted dates as query parameters
//             url += `?start_date=${formattedStartDate}&end_date=${formattedEndDate}`;
//         }

//         axios.get(url)
//             .then((response) => {
//                 setSensorData(response.data);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error("Error fetching data from API: ", error);
//                 setLoading(false);
//             });
//     }, [startDate, endDate]);

//     const prepareChartData = (sensor) => {
//         return {
//             labels: sensorData.map((data) => data.date),
//             datasets: [
//                 {
//                     label: sensor,
//                     data: sensorData.map((data) => data[sensor]),
//                     borderColor: 'rgba(75, 192, 192, 1)',
//                     backgroundColor: 'rgba(75, 192, 192, 0.2)',
//                     fill: true,
//                     borderWidth: 2,
//                 },
//             ],
//         };
//     };

//     // Prepare data for the pie chart (representing the sum of all sensor values)
//     const preparePieChartData = () => {
//         return {
//             labels: ['pH', 'TDS', 'Turbidity', 'Temperature', 'Hardness'],
//             datasets: [
//                 {
//                     data: [
//                         sensorData.reduce((acc, data) => acc + data.ph, 0),
//                         sensorData.reduce((acc, data) => acc + data.tds, 0),
//                         sensorData.reduce((acc, data) => acc + data.turbidity, 0),
//                         sensorData.reduce((acc, data) => acc + data.temperature, 0),
//                         sensorData.reduce((acc, data) => acc + data.hardness, 0),
//                     ],
//                     backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#FF5733'],
//                 },
//             ],
//         };
//     };

//     const handleSensorChange = (sensor) => {
//         setSelectedSensors((prevSelectedSensors) => ({
//             ...prevSelectedSensors,
//             [sensor]: !prevSelectedSensors[sensor],
//         }));
//     };

//     return (
//         <Box sx={{ padding: 3, backgroundColor: '#ffffff', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//             <Typography variant="h3" align="center" color="primary" gutterBottom>
//                 Sensor Data Dashboard
//             </Typography>

//             <Box sx={{ marginBottom: 3, display: 'flex', justifyContent: 'center' }}>
//                 <DatePicker
//                     selected={startDate}
//                     onChange={(date) => setStartDate(date)}
//                     dateFormat="yyyy-MM-dd"
//                     maxDate={new Date()}
//                     isClearable
//                     showYearDropdown
//                     scrollableYearDropdown
//                     placeholderText="Select Start Date"
//                 />
//                 <Typography variant="h6" sx={{ marginX: 2 }}>to</Typography>
//                 <DatePicker
//                     selected={endDate}
//                     onChange={(date) => setEndDate(date)}
//                     dateFormat="yyyy-MM-dd"
//                     maxDate={new Date()}
//                     isClearable
//                     showYearDropdown
//                     scrollableYearDropdown
//                     placeholderText="Select End Date"
//                 />
//             </Box>

//             <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3, backgroundColor: '#ffffff' }}>
//                 <FormControlLabel
//                     control={
//                         <Checkbox
//                             checked={useBarChart}
//                             onChange={() => setUseBarChart(!useBarChart)}
//                             color="primary"
//                         />
//                     }
//                     label={useBarChart ? "Bar Chart" : "Line Chart"}
//                 />
//             </Box>

//             {/* Checkbox list for each sensor */}
//             <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
//                 {['ph', 'tds', 'turbidity', 'temperature', 'hardness'].map((sensor) => (
//                     <FormControlLabel
//                         key={sensor}
//                         control={
//                             <Checkbox
//                                 checked={selectedSensors[sensor]}
//                                 onChange={() => handleSensorChange(sensor)}
//                                 color="primary"
//                             />
//                         }
//                         label={sensor.charAt(0).toUpperCase() + sensor.slice(1)}
//                     />
//                 ))}
//             </Box>

//             {loading && (
//                 <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
//                     <CircularProgress />
//                 </Box>
//             )}

//             {!loading && sensorData.length > 0 && (
//                 <Grid container spacing={3} justifyContent="center" backgroundColor="#ffffff">
//                     {Object.keys(selectedSensors).map(
//                         (sensor) =>
//                             selectedSensors[sensor] && (
//                                 <Grid item xs={12} sm={6} md={4} key={sensor} sx={{ padding: 2 }}>
//                                     <Box sx={{
//                                         border: '1px solid #ddd',
//                                         borderRadius: 2,
//                                         padding: 2,
//                                         backgroundColor: '#ffffff',
//                                         boxShadow: 2,
//                                         minHeight: '300px', // Reduced height for smaller graphs
//                                     }}>
//                                         <Typography variant="h5" color="primary" gutterBottom>
//                                             {sensor.charAt(0).toUpperCase() + sensor.slice(1)} Data
//                                         </Typography>
//                                         {useBarChart ? (
//                                             <Bar
//                                                 data={prepareChartData(sensor)}
//                                                 options={{
//                                                     responsive: true,
//                                                     plugins: {
//                                                         title: {
//                                                             display: true,
//                                                             text: `${sensor.charAt(0).toUpperCase() + sensor.slice(1)} Data`,
//                                                             font: { size: 16 },
//                                                         },
//                                                         tooltip: {
//                                                             callbacks: {
//                                                                 label: (context) => `${context.dataset.label}: ${context.raw}`,
//                                                             },
//                                                         },
//                                                     },
//                                                     scales: {
//                                                         x: {
//                                                             title: {
//                                                                 display: true,
//                                                                 text: 'Date (YYYY-MM-DD)',
//                                                             },
//                                                         },
//                                                         y: {
//                                                             beginAtZero: true,
//                                                             title: {
//                                                                 display: true,
//                                                                 text: 'Sensor Value',
//                                                             },
//                                                         },
//                                                     },
//                                                 }}
//                                                 height={300} // Reduced size
//                                                 width={400} // Reduced width
//                                             />
//                                         ) : (
//                                             <Line
//                                                 data={prepareChartData(sensor)}
//                                                 options={{
//                                                     responsive: true,
//                                                     plugins: {
//                                                         title: {
//                                                             display: true,
//                                                             text: `${sensor.charAt(0).toUpperCase() + sensor.slice(1)} Data`,
//                                                             font: { size: 16 },
//                                                         },
//                                                         tooltip: {
//                                                             callbacks: {
//                                                                 label: (context) => `${context.dataset.label}: ${context.raw}`,
//                                                             },
//                                                         },
//                                                     },
//                                                     scales: {
//                                                         x: {
//                                                             title: {
//                                                                 display: true,
//                                                                 text: 'Date (YYYY-MM-DD)',
//                                                             },
//                                                         },
//                                                         y: {
//                                                             beginAtZero: true,
//                                                             title: {
//                                                                 display: true,
//                                                                 text: 'Sensor Value',
//                                                             },
//                                                         },
//                                                     },
//                                                 }}
//                                                 height={300} // Reduced size
//                                                 width={400} // Reduced width
//                                             />
//                                         )}
//                                     </Box>
//                                 </Grid>
//                             )
//                     )}

//                     {/* Pie Chart */}
//                     <Grid item xs={12} sm={6} md={4} sx={{ padding: 2 }}>
//                         <Box sx={{
//                             border: '1px solid #ddd',
//                             borderRadius: 2,
//                             padding: 2,
//                             backgroundColor: '#ffffff',
//                             boxShadow: 2,
//                             minHeight: '300px',
//                         }}>
//                             <Typography variant="h5" color="primary" gutterBottom>
//                                 Sensor Data Distribution
//                             </Typography>
//                             <Pie
//                                 data={preparePieChartData()}
//                                 options={{
//                                     responsive: true,
//                                     plugins: {
//                                         title: {
//                                             display: true,
//                                             text: 'Sensor Data Distribution',
//                                             font: { size: 16 },
//                                         },
//                                     },
//                                 }}
//                                 height={250}
//                                 width={250}
//                             />
//                         </Box>
//                     </Grid>
//                 </Grid>
//             )}

//             {!loading && sensorData.length === 0 && (
//                 <Typography variant="h6" color="textSecondary">No data found for this date range.</Typography>
//             )}
//         </Box>
//     );
// };

// export default Dashboard;
