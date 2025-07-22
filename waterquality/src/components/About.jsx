// import React from "react";
// import { Container, Typography, Card, CardContent, Box, Grid, Avatar } from "@mui/material";

// const teamMembers = [
//   { name: "Hrudhay", role: "Frontend Developer", img: "pic1.jpg" },
//   { name: "Nadeem", role: "Backend Developer", img: "pic2.jpg" },
//   { name: "Teammate 3", role: "AI/ML Specialist", img: "pic3.jpg" }
// ];

// const About = () => {
//   return (
//     <Container maxWidth="md" sx={{ mt: 4, textAlign: "center" }}>
//       <Card sx={{ p: 3, boxShadow: 3, borderRadius: 3, backgroundColor: "#f5f5f5" }}>
//         <CardContent>
//           <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", color: "#1565c0" }}>
//             About Us
//           </Typography>
//           <Typography variant="h5" sx={{ color: "#424242", mb: 2 }}>
//             Empowering Water Safety with AI
//           </Typography>
//           <Typography variant="body1" sx={{ fontSize: "1.1rem", color: "#616161", mb: 3 }}>
//             We are students from <strong>GRIET</strong> with a passion for technology and innovation.  
//             Our Water Quality Prediction system leverages AI to analyze sensor data and determine whether water
//             is **safe or unsafe** for consumption. If unsafe, we provide **recommended filtration methods** to ensure clean water.
//           </Typography>

//           {/* Team Section */}
//           <Box sx={{ my: 3 }}>
//             <Typography variant="h5" sx={{ fontWeight: "bold", color: "#1565c0", mb: 2 }}>
//               Meet Our Team
//             </Typography>
//             <Grid container spacing={3} justifyContent="center">
//               {teamMembers.map((member, index) => (
//                 <Grid item xs={12} sm={4} key={index}>
//                   <Avatar 
//                     alt={member.name} 
//                     src={member.img} 
//                     sx={{ width: 100, height: 100, margin: "auto", boxShadow: 2 }} 
//                   />
//                   <Typography variant="h6" sx={{ fontWeight: "bold", mt: 1, color: "#424242" }}>
//                     {member.name}
//                   </Typography>
//                   <Typography variant="body2" sx={{ color: "#616161" }}>
//                     {member.role}
//                   </Typography>
//                 </Grid>
//               ))}
//             </Grid>
//           </Box>

//           {/* Features Section */}
//           <Box sx={{ backgroundColor: "#e3f2fd", p: 2, borderRadius: 2, mt: 3 }}>
//             <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1565c0" }}>
//               Why Use Our System?
//             </Typography>
//             <Typography variant="body1" sx={{ color: "#424242", mt: 1 }}>
//               ✅ Real-time water quality predictions  
//               ✅ AI-driven filtration suggestions  
//               ✅ Helps communities ensure safe drinking water  
//             </Typography>
//           </Box>
//         </CardContent>
//       </Card>
//     </Container>
//   );
// };

// export default About;

// import React from "react";
// import { Container, Typography, Card, CardContent, Box, Grid, Avatar } from "@mui/material";

// const teamMembers = [
//   { name: "Hrudhay", role: "Frontend Developer", img: "pic1.jpg" },
//   { name: "Nadeem", role: "Backend Developer", img: "pic2.jpg" },
//   { name: "Teammate 3", role: "AI/ML Specialist", img: "pic3.jpg" }
// ];

// const About = () => {
//   return (
//     <Container maxWidth="md" sx={{ mt: 4, textAlign: "center" }}>
//       <Card sx={{
//         p: 3,
//         boxShadow: 3,
//         borderRadius: 3,
//         backgroundColor: 'transparent',
//         border: '1px solid rgba(0, 0, 0, 0.1)'  // Optional: Add a subtle border for visibility
//       }}>
//         <CardContent>
//           <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", color: "#1565c0" }}>
//             About Us
//           </Typography>
//           <Typography variant="h5" sx={{ color: "#424242", mb: 2 }}>
//             Empowering Water Safety with AI
//           </Typography>
//           <Typography variant="body1" sx={{ fontSize: "1.1rem", color: "#424242", mb: 3 }}>
//             We are students from <strong>GRIET</strong> with a passion for technology and innovation.  
//             Our Water Quality Prediction system leverages AI to analyze sensor data and determine whether water
//             is **safe or unsafe** for consumption. If unsafe, we provide **recommended filtration methods** to ensure clean water.
//           </Typography>

//           {/* Team Section */}
//           <Box sx={{ my: 3 }}>
//             <Typography variant="h5" sx={{ fontWeight: "bold", color: "#1565c0", mb: 2 }}>
//               Meet Our Team
//             </Typography>
//             <Grid container spacing={3} justifyContent="center">
//               {teamMembers.map((member, index) => (
//                 <Grid item xs={12} sm={4} key={index}>
//                   <Avatar 
//                     alt={member.name} 
//                     src={member.img} 
//                     sx={{ width: 100, height: 100, margin: "auto", boxShadow: 2 }} 
//                   />
//                   <Typography variant="h6" sx={{ fontWeight: "bold", mt: 1, color: "#424242" }}>
//                     {member.name}
//                   </Typography>
//                   <Typography variant="body2" sx={{ color: "#616161" }}>
//                     {member.role}
//                   </Typography>
//                 </Grid>
//               ))}
//             </Grid>
//           </Box>

//           {/* Features Section */}
//           <Box sx={{ backgroundColor: "#e3f2fd", p: 2, borderRadius: 2, mt: 3 }}>
//             <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1565c0" }}>
//               Why Use Our System?
//             </Typography>
//             <Typography variant="body1" sx={{ color: "#424242", mt: 1 }}>
//               ✅ Real-time water quality predictions  
//               ✅ AI-driven filtration suggestions  
//               ✅ Helps communities ensure safe drinking water  
//             </Typography>
//           </Box>
//         </CardContent>
//       </Card>
//     </Container>
//   );
// };

// export default About;

import React from "react";
import { Container, Typography, Card, CardContent, Box, Grid, Avatar } from "@mui/material";

const teamMembers = [
  { name: "Dr P.Deepthi", role: "Guide", img: "deepthi.jpg" },  
  { name: "D.Hrudhay", role: "Software Developer", img: "hru5.jpg" },
  { name: "G Abhiram", role: "Team-02", img: "pic2.jpg" },
  { name: "k  Santosh", role: "Team-03", img: "pic3.jpg" }
];

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 5, textAlign: "center" }}>
      {/* About Us Card */}
      <Card sx={{
        p: 4,
        boxShadow: 4,
        borderRadius: 3,
        backgroundColor: "#ffffff",  // White background for clarity
        border: '1px solid rgba(0, 0, 0, 0.1)' 
      }}>
        <CardContent>
          {/* Main Heading */}
          <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", color: "#1565c0" }}>
            About Us
          </Typography>
          <Typography variant="h5" sx={{ color: "#333", mb: 2 }}>
            Empowering Water Safety with AI
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1.1rem", color: "#424242", mb: 4 }}>
            We are students from <strong>GRIET</strong> passionate about technology and innovation.  
            Our Water Quality Prediction system uses AI to analyze sensor data and determine whether water
            is <strong>safe or unsafe</strong> for consumption. If unsafe, we provide <strong>recommended filtration methods</strong> to ensure clean drinking water.
          </Typography>

          {/* Team Section */}
          <Box sx={{ my: 4 }}>
            <Typography variant="h4" sx={{ fontWeight: "bold", color: "#1565c0", mb: 3 }}>
              Meet Our Team
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {teamMembers.map((member, index) => (
                <Grid item xs={12} sm={4} key={index}>
                  <Avatar 
                    alt={member.name} 
                    src={member.img} 
                    sx={{ width: 110, height: 110, margin: "auto", boxShadow: 3 }} 
                  />
                  <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2, color: "#333" }}>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "1rem", color: "#555" }}>
                    {member.role}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Features Section */}
          <Box sx={{ backgroundColor: "#e3f2fd", p: 3, borderRadius: 2, mt: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#1565c0" }}>
              Why Choose Our System?
            </Typography>
            <Typography variant="body1" sx={{ color: "#333", mt: 2, fontSize: "1.1rem" }}>
              ✅ <strong>Real-time Water Quality Predictions</strong> – Get instant insights on water safety.  
              ✅ <strong>AI-driven Filtration Suggestions</strong> – Smart recommendations for clean drinking water.  
              ✅ <strong>Ensures Community Safety</strong> – Helps households and communities maintain water hygiene.  
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default About;
