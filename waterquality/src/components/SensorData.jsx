// import React from "react";
// import { Card, CardContent, Typography, Grid, TextField } from "@mui/material";

// const SensorData = ({ sensorData }) => {
//   const attributes = [
//     { label: "pH Level", value: sensorData.ph, unit: "" },
//     { label: "Hardness", value: sensorData.hardness, unit: "mg/L" },
//     { label: "TDS (Solids)", value: sensorData.solids, unit: "ppm" },
//     { label: "Turbidity", value: sensorData.turbidity, unit: "NTU" },
//     { label: "Chloramines", value: sensorData.chloramines, unit: "mg/L" },
//     { label: "Sulfate", value: sensorData.sulfate, unit: "mg/L" },
//     { label: "Conductivity", value: sensorData.conductivity, unit: "μS/cm" },
//     { label: "Organic Carbon", value: sensorData.organic_carbon, unit: "mg/L" },
//     { label: "Trihalomethanes", value: sensorData.trihalomethanes, unit: "μg/L" },
//     { label: "Potability", value: sensorData.potability === 1 ? "Safe" : "Unsafe", unit: "" },
//   ];

//   return (
//     <Card sx={{ mt: 3, p: 3, boxShadow: 3, borderRadius: 2 }}>
//       <CardContent>
//       <Typography variant="h4" align="center" gutterBottom>
//         Water Quality Prediction
//       </Typography>
//         <Typography variant="h5" align="center" gutterBottom>
//           Sensor Data
//         </Typography>
//         <Grid container spacing={3}>
//           {attributes.map((attr, index) => (
//             <Grid item xs={12} sm={6} key={index}>
//               <TextField
//                 label={attr.label}
//                 value={`${attr.value} ${attr.unit}`.trim()}
//                 fullWidth
//                 variant="outlined"
//                 InputProps={{ readOnly: true }}
//               />
//             </Grid>
//           ))}
//         </Grid>
        
//       </CardContent>
//     </Card>
//   );
// };

// export default SensorData;
import React from "react";
import { Card, CardContent, Typography, Grid, TextField, Button, Box } from "@mui/material";

const SensorData = ({ sensorData, onPredict, onReset, loading }) => {
  const attributes = [
    { label: "pH Level", value: sensorData.pH, unit: "" },
    { label: "Hardness", value: sensorData.hardness, unit: "mg/L" },
    { label: "TDS (Solids)", value: sensorData.TDS, unit: "ppm" },
    { label: "Turbidity", value: sensorData.turbidity, unit: "NTU" },
    { label: "Chloramines", value: sensorData.chloramines, unit: "mg/L" },
    { label: "Sulfate", value: sensorData.sulfate, unit: "mg/L" },
    { label: "Conductivity", value: sensorData.conductivity, unit: "μS/cm" },
    { label: "Organic Carbon", value: sensorData.organic_carbon, unit: "mg/L" },
    { label: "Trihalomethanes", value: sensorData.trihalomethanes, unit: "μg/L" },
    { label: "Potability", value: sensorData.potability === 1 ? "Safe" : "Unsafe", unit: "" },
  ];
  console.log(sensorData);

  return (
    <Card
      sx={{
        mt: 3,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "transparent",
        border: "2px solid white",
      }}
    >
      <CardContent>
      <Typography variant="h4" align="center" gutterBottom sx={{ color: "white" }}>
          Water Quality Prediction
        </Typography>
        <Typography variant="h5" align="center" gutterBottom sx={{ color: "white" }}  py={2}>
          Sensor Data
        </Typography>
        <Grid container spacing={3}>
          {attributes.map((attr, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <TextField
                  label={<strong>{attr.label}</strong>}
                  value={`${attr.value} ${attr.unit}`.trim()}
                  fullWidth
                  variant="outlined"
                  InputProps={{ 
                    readOnly: true, 
                    style: { 
                      color: "white", 
                      fontWeight: "bold",  // Correct way to make text bold
                      fontSize: "1rem"  
                    } 
                  }}
                  InputLabelProps={{ style: { color: "orange", fontSize: "1.5rem" } }} // <-- Added missing comma
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "white" },
                      "&:hover fieldset": { borderColor: "blue" },
                      "&.Mui-focused fieldset": { borderColor: "white" },
                    },
                  }}
                />

              
            </Grid>
          ))}
        </Grid>

        {/* Buttons inside the Card */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
  <Button 
    onClick={onPredict} 
    variant="contained" 
    color="primary" 
    disabled={loading} 
    sx={{ mx: 1, px: 1, py: 1, fontSize: "1rem", borderRadius: "5px", boxShadow: "3px 3px 10px rgba(0,0,0,0.3)" }}
  >
    {loading ? "Predicting..." : "Predict"}
  </Button>
  <Button 
    onClick={onReset} 
    variant="contained" 
    color="secondary" 
    sx={{ mx: 1, px: 1, py: 1, fontSize: "1rem", borderRadius: "5px", boxShadow: "3px 3px 10px rgba(0,0,0,0.3)" }}
  >
    Reset
  </Button>
</Box>

      </CardContent>
    </Card>
  );
};

export default SensorData;