import React, { useState } from "react";
import { Container, Typography, TextField, Button, Card, CardContent, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", phone: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      email: formData.email,
      message: formData.message,
    };

    emailjs.send(
      "service_gkl31m2",   // Replace with your EmailJS service ID
      "template_wyqc36i",  // Replace with your EmailJS template ID
      templateParams,
      "zVlo7QuO4S5EQQtC_"       // Replace with your EmailJS user ID
    )
    .then((response) => {
      alert("Message sent successfully!");
      setFormData({ firstName: "", lastName: "", phone: "", email: "", message: "" });
    })
    .catch((error) => {
      alert("Failed to send message. Please try again.");
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 8, textAlign: "center" }}>
      <Card sx={{ p: 3, boxShadow: 3, borderRadius: 3, backgroundColor: "#f5f5f5" }}>
        <CardContent>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", color: "#1565c0" }}>
            Contact Us
          </Typography>
          <Typography variant="h6" sx={{ color: "#424242", mb: 3 }}>
            We'd love to hear from you! Fill out the form below.
          </Typography>

          <form onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
              <TextField label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} fullWidth required variant="outlined" />
              <TextField label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} fullWidth required variant="outlined" />
            </Box>

            <TextField label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} fullWidth required variant="outlined" margin="normal" />
            <TextField label="Your Email" name="email" type="email" value={formData.email} onChange={handleChange} fullWidth required variant="outlined" margin="normal" />
            <TextField label="Your Message" name="message" value={formData.message} onChange={handleChange} fullWidth required variant="outlined" margin="normal" multiline rows={4} />

            <Box sx={{ mt: 3 }}>
              <Button 
                type="submit" 
                variant="contained" 
                color="primary" 
                size="large"
                endIcon={<SendIcon />}
                disabled={loading}
                sx={{ 
                  px: 1, 
                  py: 1, 
                  fontSize: "1rem", 
                  borderRadius: "5px", 
                  boxShadow: "3px 3px 10px rgba(0,0,0,0.3)" 
                }}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Contact;
