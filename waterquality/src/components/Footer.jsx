import React from "react";
import { Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ textAlign: "center", p: 3, bgcolor: "primary.main", color: "white" }}>
      <Typography variant="body2">© 2025 Water Quality Prediction App</Typography>
    </Box>
  );
};

export default Footer;
