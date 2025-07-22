// import React, { useEffect, useState } from "react";
// import { getDatabase, ref, onValue } from "firebase/database";
// import axios from "axios";
// import { initializeApp } from "firebase/app";

// // ✅ Firebase Configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA3Q88TA8ph0KFTHPoxjGYoT-6RSfrgIpY",
//   authDomain: "water-1309d.firebaseapp.com",
//   databaseURL: "https://water-1309d-default-rtdb.firebaseio.com/",
//   projectId: "water-1309d",
//   storageBucket: "water-1309d.appspot.com",
//   messagingSenderId: "294970534740",
//   appId: "1:294970534740:web:6a7f4978585b31a42ab6c1",
//   measurementId: "G-MK1QVFG39W",
// };

// // ✅ Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);

// const WaterQuality = () => {
//   const [sensorData, setSensorData] = useState({
//     ph: "",
//     hardness: "",
//     solids: "",
//     turbidity: "",
//   });
//   const [prediction, setPrediction] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // ✅ Fetch sensor data from Firebase
//   useEffect(() => {
//     const sensorRef = ref(database, "sensors");
//     onValue(sensorRef, (snapshot) => {
//       if (snapshot.exists()) {
//         const data = snapshot.val();
//         console.log("Firebase Data:", data); // Debugging
//         setSensorData({
//           ph: data.pH || 0,
//           hardness: data.hardness || 0,
//           solids: data.TDS || 0, // Assuming TDS = solids
//           turbidity: data.turbidity || 0,
//         });
//       } else {
//         console.warn("No sensor data available in Firebase");
//       }
//     }, (error) => {
//       console.error("Firebase Read Error:", error);
//     });
//   }, []);

//   // ✅ Handle prediction request
//   const handlePredict = async () => {
//     setLoading(true);
//     try {
//       console.log("Sending Data:", sensorData); // Debugging

//       const response = await axios.post("http://127.0.0.1:5000/predict", sensorData);
      
//       console.log("API Response:", response.data); // Debugging
//       setPrediction(response.data);
//     } catch (error) {
//       console.error("Prediction error:", error);
//       setPrediction({ status: "Error", reason: "Failed to get prediction", filtration: "N/A" });
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
//       <h1 className="text-2xl font-bold mb-4">Water Quality Prediction</h1>

//       <div className="grid grid-cols-2 gap-4 p-4 bg-white shadow-lg rounded-lg">
//         {Object.entries(sensorData).map(([key, value]) => (
//           <div key={key} className="flex flex-col">
//             <label className="font-semibold">{key.toUpperCase()}</label>
//             <input
//               type="text"
//               value={value}
//               readOnly
//               className="border p-2 rounded"
//             />
//           </div>
//         ))}
//       </div>

//       <button
//         onClick={handlePredict}
//         className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg"
//         disabled={loading}
//       >
//         {loading ? "Predicting..." : "Predict"}
//       </button>

//       {prediction && (
//         <div className="mt-4 p-4 bg-green-100 border-l-4 border-green-500">
//           <p className="font-semibold">Water Status: {prediction.status}</p>
//           <p>Reason: {prediction.reason}</p>
//           <p>Filtration Method: {prediction.filtration}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default WaterQuality;
// import React from "react";
// import WaterQuality from "./WaterQuality.jsx";

// function App() {
//   return (
//     <div>
//       <WaterQuality />
//     </div>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import WaterQuality from "./components/WaterQuality";
import "./App.css";
import SensorDashboard from "./components/SensorDashboard";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/predict" element={<WaterQuality />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<SensorDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
