// import React, { useEffect, useState } from "react";
// import { getDatabase, ref, onValue } from "firebase/database";
// import axios from "axios";
// import { initializeApp } from "firebase/app";
// import SensorData from "./SensorData";
// import PredictionResult from "./PredictionResult";
// import { Button, Container, Box } from "@mui/material";

// // ✅ Firebase Configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA...",
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
//   const [sensorData, setSensorData] = useState({ ph: "", hardness: "", solids: "", turbidity: "" });
//   const [prediction, setPrediction] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const sensorRef = ref(database, "sensors");
//     onValue(sensorRef, (snapshot) => {
//       if (snapshot.exists()) {
//         setSensorData(snapshot.val());
//       }
//     });
//   }, []);

//   const handlePredict = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.post("http://127.0.0.1:5000/predict", sensorData);
//       setPrediction(response.data);
//     } catch (error) {
//       setPrediction({ status: "Error", reason: "Failed to get prediction" });
//     }
//     setLoading(false);
//   };

//   // ✅ Reset function to clear the prediction result
//   const handleReset = () => {
//     setPrediction(null);
//   };

//   return (
//     <Container>
//       <SensorData sensorData={sensorData} />
//       <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
//         <Button onClick={handlePredict} variant="contained" color="primary" disabled={loading} sx={{ mx: 1 }}>
//           {loading ? "Predicting..." : "Predict"}
//         </Button>
//         <Button onClick={handleReset} variant="outlined" color="secondary" sx={{ mx: 1 }}>
//           Reset
//         </Button>
//       </Box>
//       {prediction && <PredictionResult prediction={prediction} />}
//     </Container>
//   );
// };

// export default WaterQuality;
// import React, { useEffect, useState } from "react";
// import { getDatabase, ref, onValue } from "firebase/database";
// import axios from "axios";
// import { initializeApp } from "firebase/app";
// import SensorData from "./SensorData";
// import PredictionResult from "./PredictionResult";
// import { Container } from "@mui/material";

// // ✅ Firebase Configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA...",
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
//   const [sensorData, setSensorData] = useState({ ph: "", hardness: "", solids: "", turbidity: "" });
//   const [prediction, setPrediction] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const sensorRef = ref(database, "sensors");
//     onValue(sensorRef, (snapshot) => {
//       if (snapshot.exists()) {
//         setSensorData(snapshot.val());
//       }
//     });
//   }, []);
//   console.log("Data1"+sensorData)

//   const handlePredict = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.post("http://127.0.0.1:5000/predict", sensorData);
//       console.log(response.data);
//       setPrediction(response.data);
//     } catch (error) {
//       setPrediction({ status: "Error", reason: "Failed to get prediction" });
//     }
//     setLoading(false);
//   };

//   const handleReset = () => {
//     setPrediction(null);
//   };

//   return (
//     <Container>
//       <SensorData sensorData={sensorData} onPredict={handlePredict} onReset={handleReset} loading={loading} />
//       {prediction && <PredictionResult prediction={prediction} />}
//     </Container>
//   );
// };

// export default WaterQuality;
import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import axios from "axios";
import { initializeApp } from "firebase/app";
import SensorData from "./SensorData";
import PredictionResult from "./PredictionResult";
import { Container } from "@mui/material";

// ✅ Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyA...",
  authDomain: "water-1309d.firebaseapp.com",
  databaseURL: "https://water-1309d-default-rtdb.firebaseio.com/",
  projectId: "water-1309d",
  storageBucket: "water-1309d.appspot.com",
  messagingSenderId: "294970534740",
  appId: "1:294970534740:web:6a7f4978585b31a42ab6c1",
  measurementId: "G-MK1QVFG39W",
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const WaterQuality = () => {
  const [sensorData, setSensorData] = useState({
    pH: 0,
    hardness: 0,
    TDS: 0,
    turbidity: 0,
  });

  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const sensorRef = ref(database, "sensors");
    onValue(sensorRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log("🔥 Firebase Data:", data);

        setSensorData({
          pH: data.pH || 0,
          hardness: data.hardness || 0,
          TDS: data.TDS || 0,
          turbidity: data.turbidity || 0,
        });
      }
    });
  }, []);

  const handlePredict = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", sensorData);
      console.log("✅ Prediction Response:", response.data);
      setPrediction(response.data);
    } catch (error) {
      console.error("❌ Prediction Error:", error);
      setPrediction({ status: "Error", reason: "Failed to get prediction" });
    }
    setLoading(false);
  };

  const handleReset = () => {
    setPrediction(null);
  };

  return (
    <Container>
      <SensorData sensorData={sensorData} onPredict={handlePredict} onReset={handleReset} loading={loading} />
      {prediction && <PredictionResult prediction={prediction} />}
    </Container>
  );
};

export default WaterQuality;

